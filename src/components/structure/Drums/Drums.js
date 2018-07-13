import React, { Component } from 'react';
import io from 'socket.io-client';
import cls from 'classnames';
import Tone from 'tone';

import style from './drums.module.scss';

import crash from 'assets/samples/crash.wav';
import bass from 'assets/samples/bass.wav';
import hat from 'assets/samples/hat.wav';
import snare from 'assets/samples/snare.wav';
import smallTom from 'assets/samples/small-tom.wav';
import bigTom from 'assets/samples/big-tom.wav';

const socket = io(`http://${window.location.hostname}:3050`);

const instruments = [
	{
		name: 'Bass',
		className: style.bass,
		state: false,
		enabled: true,
		tone: 'A4',
		playing: false
	},
	{
		name: 'Snare',
		className: style.snare,
		state: false,
		enabled: true,
		tone: 'B4',
		playing: false
	},
	{
		name: 'Hi-Hat',
		className: style.hats,
		state: false,
		enabled: true,
		tone: 'C4',
		playing: false
	},
	{
		name: 'Crash',
		className: style.crash,
		state: false,
		enabled: true,
		tone: 'D4',
		playing: false
	},
	{
		name: 'Small Tom',
		className: style.tom,
		state: false,
		enabled: true,
		tone: 'E4',
		playing: false
	},
	{
		name: 'Big Tom',
		className: style.cowbell,
		state: false,
		enabled: true,
		tone: 'F4',
		playing: false
	}
];

class App extends Component {
	state = {
		pads: instruments,
		ready: false
	};

	getPad = (allPads = this.state.pads, name) =>
		//  Get pad by name
		allPads.filter(pad => pad.name === name)[0];

	setPads = (newPad, values, comparitor = 'name') => {
		// Generic 'pads' updater, takes a pad and optionally the field to compare
		// to, and updates with new values
		const ret = this.state.pads.map(
			localPad =>
				newPad[comparitor] === localPad[comparitor]
					? { ...localPad, ...values }
					: localPad
		);

		this.setState({
			pads: ret
		});

		return ret;
	};

	componentDidMount() {
		// Create new Sampler using drum samples
		this.sampler = new Tone.Sampler(
			{
				A4: bass,
				B4: snare,
				C4: hat,
				D4: crash,
				E4: smallTom,
				F4: bigTom
			},
			() => {
				this.setState({ ready: true });
			}
		).toMaster();

		socket.on('pads', pads => {
			this.incomingPads(pads);
		});
	}

	incomingPads = incomingPad => {
		const newPads = this.setPads(incomingPad, { state: incomingPad.state });

		// Get the tone for this specific pad name and send it to the tone generator.
		this.playTone(this.getPad(newPads, incomingPad.name));
	};

	playTone = pad => {
		if (pad.state && pad.enabled) {
			this.sampler.triggerAttackRelease(pad.tone);
		}
	};

	setEnabled = (pad, state) => {
		// Set pad enabled/disabled
		this.setPads(pad, { enabled: !pad.enabled });
	};

	render() {
		const { pads, ready } = this.state;

		if (ready)
			return (
				<div className={style.app}>
					<ul className={style.pads}>
						{pads.map(inst => (
							<li
								key={inst.name}
								className={cls(style.pad, inst.className, {
									[style.disabled]: !inst.enabled,
									[style.active]: inst.state && inst.enabled
								})}
								onClick={e => this.setEnabled(inst)}
							>
								<span key={inst.name} className={style.label}>
									{inst.name}
								</span>
							</li>
						))}
					</ul>
				</div>
			);

		return null;
	}
}

export default App;
