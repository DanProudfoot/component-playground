import React from 'react';
import { hydrate, render } from 'react-dom';
import { loadComponents, getState } from 'loadable-components';

import App from 'components/structure/App';

import 'normalize.css';

import 'styles/index.scss';
window.snapSaveState = () => getState();

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
	loadComponents().then(() => {
		hydrate(<App />, rootElement);
	});
} else {
	render(<App />, rootElement);
}
