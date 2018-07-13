const five = require('johnny-five');
const io = require('socket.io')(3050);

io.on('connection', socket => {
	console.log('a client connected', socket.id);
});

const board = five.Board({ repl: false });

let pads = [
	{ pin: 0, state: false, name: 'Bass' },
	{ pin: 1, state: false, name: 'Snare' },
	{ pin: 2, state: false, name: 'Hi-Hat' },
	{ pin: 3, state: false, name: 'Crash' },
	{ pin: 4, state: false, name: 'Small Tom' },
	{ pin: 5, state: false, name: 'Big Tom' }
];

const debug = !!process.env.DEBUG;
const sensitivity = Number(process.env.SENSITIVITY) || 200;

const getPad = pin => pads.filter(pad => pin === pad.pin)[0];
const setPad = (pin, state) => {
	pads = pads.map(pad => (pin === pad.pin ? { ...pad, state } : pad));
};

board.on('ready', () => {
	setButtonState = (pin, state) => {
		if (getPad(pin).state !== state) {
			setPad(pin, state);
			const currentPad = getPad(pin);
			console.log(currentPad);

			io.emit('pads', currentPad);
		}
	};

	const startReading = pin => {
		board.analogRead(pin, voltage => {
			if (debug && voltage > 50) {
				console.log(voltage);
			}
			setButtonState(pin, voltage > sensitivity);
		});
	};

	pads.forEach(pad => {
		board.pinMode(pad.pin, five.Pin.ANALOG);

		startReading(pad.pin);
	});
});
