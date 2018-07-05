import React, { Component } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';

import style from './app.module.scss';

class App extends Component {
	state = {
		opened: false,
		href: null
	};

	linkClick = e => {
		e.preventDefault();
		console.log(e.target.href);
		this.setState({ href: e.target.href });
	};

	render() {
		return (
			<Flipper flipKey={this.state.opened}>
				<div className={style.app}>
					<div className={style.central}>
						<h1 className={style.heading}>
							Something really interesting
						</h1>
						<p className={style.para}>
							Some kinda paragraph. It has a link in it here to{' '}
							<Flipped flipId="link">
								<a
									href="http://danproudfoot.co.uk"
									className={style.warp}
									onClick={this.linkClick}
								>
									My Site
								</a>
							</Flipped>
						</p>
					</div>
					<div className={style.external}>
						<iframe
							src={this.state.href || 'about:blank'}
							title="external"
							frameBorder="0"
							className={style.iframe}
						/>
					</div>
				</div>
			</Flipper>
		);
	}
}

export default App;
