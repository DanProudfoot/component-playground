import React, { Component } from 'react';
import FuzzySet from 'fuzzyset';
import Typed from 'typed.js';

import style from './voice.module.scss';
import particles from 'assets/videos/particles.mp4';

const terms = [
	{
		name: 'isolated microservices',
		text:
			'<span className="mid">ISOLATED</span> <br/> <span className="big">MICROSERVICES?</span>',

		info:
			'The task of transforming monolithic mainframe applications into Microservices can be daunting unless they can be containerized, delivered and deployed using a modern DevOps Toolchain. '
	},
	{
		name: 'realtime analytics',
		text:
			'<span className="mid">REAL TIME</span> <br/> <span className="big">ANALYTICS?</span>',

		info:
			'Using a database such as PostgreSQL to store updates, an organization can benefit from a plethora of tools which put critical information into the hands of key decision makers at the same speed as other source data. '
	}
];

const getSelected = name => terms.filter(term => term.name === name)[0];

const grammar = `#JSGF V1.0; grammar terms; public <color> = ${terms
	.map(term => term.name)
	.join(' | ')}`;

export default class Voice extends Component {
	state = {
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

	componentDidUpdate() {
		const { selected } = this.state;

		if (selected) {
			if (this.timeout) clearTimeout(this.timeout);
			if (this.title) this.title.destroy();
			if (this.paragraph) this.paragraph.destroy();

			const optionsParagraph = {
				strings: [selected.info],
				typeSpeed: 10,
				onComplete: () => {
					this.timeout = setTimeout(() => {
						if (this.title) this.title.destroy();
						if (this.paragraph) this.paragraph.destroy();
						this.setState({ selected: null });
					}, 3000);
				}
			};
			const optionsTitle = {
				strings: [selected.text],
				typeSpeed: 5,
				onComplete: () => {
					this.paragraph = new Typed(
						this.ref.paragraph.current,
						optionsParagraph
					);
				}
			};

			this.title = new Typed(this.ref.title.current, optionsTitle);
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
			console.log(selected);

			if (selected) {
				this.setState({
					selected
				});
			}
		}
	};

	render() {
		return (
			<>
				<div className={style.container}>
					<h1 className={style.title} ref={this.ref.title}>
						{this.state.selected ? '' : ''}
					</h1>
					<div className={style.spacer} />
					{this.state.selected && (
						<p className={style.para} ref={this.ref.paragraph} />
					)}
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
