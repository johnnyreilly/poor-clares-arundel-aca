import * as React from 'react';
import { Jumbotron } from 'reactstrap';
import ionaComingInDoor from './images/IonaComingInDoor.jpg';

export const homePath = '/home';

export const Home: React.FC<React.PropsWithChildren<unknown>> = _props => (
    <>
        <Jumbotron>
            <h2>"The Convent"</h2>

            <p>A mini-site dedicated to the television programme "The Convent".</p>

            <img src={ionaComingInDoor} alt="© Tiger Aspect Productions" className="img-thumbnail img-fluid" />

            <p />
            <p>Iona arrives...</p>
        </Jumbotron>
        <footer>Photos in the 'Convent' site by members of the TV crew.</footer>
    </>
);
