import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactGA from 'react-ga';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { App } from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

function initializeTracking() {
    ReactGA.initialize('UA-51754530-1'); // poorclaresarundel.org

    const historyListener = (pathname: string) => {
        ReactGA.set({ page: pathname });
        ReactGA.pageview(pathname);
    };

    history.listen(({ pathname }) => historyListener(pathname));
    historyListener(window.location.pathname);
}

const history = createBrowserHistory();

initializeTracking();

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
