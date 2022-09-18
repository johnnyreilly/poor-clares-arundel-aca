import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { Home } from './Home';
import './App.css';

const Main = React.lazy(() => import('./main'));
const TheConvent = React.lazy(() => import('./the-convent'));

const theConventPath = 'the-convent';

interface LoadingProps {
    noHeader?: boolean;
}

const Loading: React.FunctionComponent<React.PropsWithChildren<LoadingProps>> = (props) =>
    props.noHeader ? (
        <>
            <FontAwesomeIcon icon={faSnowflake} spin /> Loading {props.children} ...
        </>
    ) : (
        <h1 className="loader">
            <FontAwesomeIcon icon={faSnowflake} spin /> Loading {props.children} ...
        </h1>
    );

export class App extends React.Component {
    public render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route
                    path={`/${theConventPath}`}
                    render={(props) => (
                        <React.Suspense fallback={<Loading>the Convent</Loading>}>
                            <TheConvent {...props} />
                        </React.Suspense>
                    )}
                />
                <Route
                    path="/"
                    render={(props) => (
                        <React.Suspense fallback={<Loading />}>
                            <Main {...props} />
                        </React.Suspense>
                    )}
                />
            </Switch>
        );
    }
}
