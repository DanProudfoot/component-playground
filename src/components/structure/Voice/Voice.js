import React, { Component } from 'react';
import FuzzySet from 'fuzzyset';
import Typed from 'typed.js';

import style from './voice.module.scss';
import particles from 'assets/videos/particles.mp4';

import microservice_img from 'assets/images/microservice.png';

const terms = [
	{
		name: 'isolated microservices',
		text:
			'<span className="mid">ISOLATED</span> <br/> <span className="big">MICROSERVICES?</span>',
		image: microservice_img,
		info:
			'The task of transforming monolithic mainframe applications into Microservices can be daunting unless they can be containerized, delivered and deployed using a modern DevOps Toolchain. '
	}

	// {
	// 	name: 'banana',
	// 	text: '<span className="big">BANANA</span>',

	// 	image: banana_img,
	// 	info:
	// 		'A banana is an edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called plantains, distinguishing them from dessert bananas.'
	// }
];

const getSelected = name => terms.filter(term => term.name === name)[0];

const grammar = `#JSGF V1.0; grammar terms; public <color> = ${terms
	.map(term => term.name)
	.join(' | ')}`;

export default class Voice extends Component {
	state = {
		captured: 'Listening...',
		started: false,
		selected: null
	};

	fuzzy = FuzzySet(terms.map(term => term.name));

	ref = {
		title: React.createRef(),
		subtitle: React.createRef(),
		paragraph: React.createRef()
	};

	componentDidMount() {
		if ('webkitSpeechRecognition' in window) {
			this.recognition = new window.webkitSpeechRecognition();
			this.recognition.continuous = false;
			this.recognition.interimResults = false;
			this.recognition.lang = 'en-GB';
			this.recognition.maxAlternatives = 4;

			const speechRecognitionList = new window.webkitSpeechGrammarList();
			speechRecognitionList.addFromString(grammar, 1);
			this.recognition.grammars = speechRecognitionList;

			this.recognition.onresult = this.recognitionResult;
			// this.recognition.onspeechend = this.speechEnd;

			this.recognition.onnomatch = () => {
				console.log('No match found');
				this.recognition.abort();
			};

			this.recognition.onend = () => {
				this.recognition.start();
			};

			this.recognition.start();
			this.setState({ started: true });
		}
	}

	recognitionResult = event => {
		console.log(event.results);

		const results = [...event.results].map(speech =>
			speech[0].transcript.toLowerCase().trim()
		);
		console.log(results);

		const matched = results.map(result => this.fuzzy.get(result));
		console.log(matched);

		if (matched[0]) {
			const filtered = matched[0]
				.filter(match => match[0] > 0.3)
				.map(filt => filt[1]);

			console.log(filtered);

			const selected = getSelected(filtered[0]);

			this.setState({
				selected
			});

			console.log(selected);

			if (selected) {
				const options1 = { strings: [selected.text], typeSpeed: 5 };
				const options2 = { strings: [selected.info], typeSpeed: 10 };

				new Typed(this.ref.title.current, options1);
				new Typed(this.ref.paragraph.current, options2);
			}
		}
	};

	speechEnd = () => {
		// this.setState({ started: false });
		// this.recognition.abort();
		// setTimeout(() => {
		// 	this.recognition.start();
		// }, 300);
	};

	toggleRecognition = () => {
		if (this.state.started) {
			this.recognition.stop();
			this.setState({ started: false });
		} else {
			this.recognition.start();
			this.setState({ started: true });
		}
	};

	render() {
		return (
			<>
				<div className={style.container}>
					<h1 className={style.title} ref={this.ref.title}>
						{this.state.selected ? '' : 'Listening...'}
					</h1>
					<div className={style.spacer} />
					<p className={style.para} ref={this.ref.paragraph} />
				</div>
				{/* <img
					src={this.state.selected && this.state.selected.image}
					className={style.image}
					alt=""
				/> */}
				<video
					preload="auto"
					loop
					muted
					autoPlay
					src={particles}
					className={style.background}
				/>
			</>
		);
	}
}
