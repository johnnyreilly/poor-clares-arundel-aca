import * as React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import house from './images/house.jpg';
// import lightForTheWorldSmall from './images/light-for-the-world-small.jpg';
// import oComeEmmanuelSmall from './images/o-come-emmanuel-small.jpg';
import './Home.css';

// https://schema.org/CatholicChurch
const catholicChurchStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CatholicChurch',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Crossbush, Arundel',
        postalCode: 'BN18 9PJ',
        streetAddress: 'Convent of Poor Clares',
    },
    email: 'arundel.poorclares@gmail.com',
    hasMap: 'https://goo.gl/maps/RYAL6WvbkAadDrTF9',
    telephone: '+441903882536',
    name: 'Convent of Poor Clares',
    description:
        'We are sisters, who share prayer, work, laughter and struggles, and live according to the Form of Life drawn up by St Clare of Assisi in 1253.',
    image: house,
};

export class Home extends React.Component {
    public render() {
        return (
            <>
                <script type="application/ld+json">{JSON.stringify(catholicChurchStructuredData)}</script>
                <div className="text-center">
                    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                        <header className="masthead mb-auto">
                            <div className="inner">
                                <h2 className="masthead-brand">Welcome to the Poor Clares of Arundel</h2>
                            </div>
                        </header>

                        <main role="main" className="inner cover">
                            {/* {new Date().getMonth() !== 11 ? (
                            <Link to="/light-for-the-world" title="We made an album...">
                                <img
                                    id="light-of-the-world"
                                    src={lightForTheWorldSmall}
                                    alt="We made an album..."
                                    className="img-fluid img-rounded"
                                />
                            </Link>
                        ) : (
                            <Link to="/light-for-the-world" title="We made a Christmas song...">
                                <img
                                    id="o-come-emmanuel"
                                    src={oComeEmmanuelSmall}
                                    alt="We made an album..."
                                    className="img-fluid img-rounded"
                                />
                            </Link>
                        )} */}

                            <Link to="/us" title="Learn more about us...">
                                <img
                                    id="house"
                                    src={house}
                                    alt="Click here to enter..."
                                    className="img-fluid img-rounded"
                                />
                            </Link>
                            <p className="lead">
                                We are sisters, who share prayer, work, laughter and struggles,
                                <br />
                                and live according to the Form of Life drawn up by St Clare of Assisi in 1253.
                            </p>
                            <p className="lead">
                                <Link to="/us">Learn more about us...</Link>
                            </p>
                        </main>

                        <footer className="mastfoot mt-auto">
                            <div className="inner">
                                <p>
                                    © Community of Poor Clares, Arundel 2014
                                    <br /> Convent of Poor Clares, Crossbush, Arundel, BN18 9PJ
                                </p>
                                <p>
                                    <a href="mailto:arundel.poorclares@gmail.com">
                                        <FontAwesomeIcon icon={faEnvelope} /> arundel.poorclares@gmail.com
                                    </a>{' '}
                                    <a href="https://www.facebook.com/poorclaresarundel">
                                        <FontAwesomeIcon icon={faFacebook} /> Facebook
                                    </a>
                                </p>
                            </div>
                        </footer>
                    </div>
                </div>
            </>
        );
    }
}
