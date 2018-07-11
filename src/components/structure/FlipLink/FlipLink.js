import React, { Component, Fragment } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import html2canvas from 'html2canvas';

import style from './app.module.scss';

const Link = ({ children, ...rest }) => (
	<a className={style.warp} {...rest}>
		{children}
	</a>
);

const getImage = (iframe, link) =>
	new Promise((resolve, reject) => {
		iframe.onload = () => {
			html2canvas(iframe).then(canvas => {
				resolve(canvas);
			});
		};
		iframe.src = link;
	});

class App extends Component {
	canvas = React.createRef();
	iframe = React.createRef();
	links = [];

	state = {
		opened: false,
		href: 'about:blank'
	};

	registerLink = href => {
		this.links.push(href);
		console.log(this.links);
		return href;
	};

	componentDidMount() {
		const canvas = this.canvas.current;
		const iframe = this.iframe.current;

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		const images = this.links.map(async link => {
			return await getImage(iframe, link);
		});
	}

	linkClick = e => {
		e.preventDefault();
		this.setState(prevState => ({
			opened: !prevState.opened
		}));
	};

	render() {
		return (
			<Fragment>
				<Flipper flipKey={this.state.opened} duration={500}>
					<div className={style.app}>
						<div className={style.central}>
							<h1 className={style.heading}>
								Something really interesting
							</h1>
							<p className={style.para}>
								Some kinda paragraph. It has a link in it here
								to{' '}
								{this.state.opened ? (
									<Flipped flipId="link" />
								) : (
									<Flipped flipId="link">
										<Link
											href={this.registerLink(
												'http://danproudfoot.co.uk'
											)}
											onClick={this.linkClick}
										>
											Test Link
										</Link>
									</Flipped>
								)}
							</p>
						</div>
					</div>
				</Flipper>
				<div className={style.hidden}>
					<iframe
						src={null}
						title="hidden"
						frameBorder="0"
						className={style.iframe}
						ref={this.iframe}
					/>
					<canvas ref={this.canvas} />
				</div>
			</Fragment>
		);
	}
}

export default App;
