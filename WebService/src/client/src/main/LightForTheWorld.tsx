import { faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Card, CardImg } from 'reactstrap';
import lightForTheWorldSmall from '../images/light-for-the-world-small.jpg';
import oComeEmmanuelSmall from '../images/o-come-emmanuel-small.jpg';

export const lightForTheWorldPath = '/light-for-the-world';

export const LightForTheWorld: React.FC<React.PropsWithChildren<unknown>> = (_props) => (
    <>
        <Card className="float-right">
            <CardImg top src={new Date().getMonth() === 11 ? oComeEmmanuelSmall : lightForTheWorldSmall} />
        </Card>

        <h3>Light for the World</h3>

        <p>
            Here is our new album, 'Light for the World' . Enjoy listening to our music. We hope it will help you find a
            place of peace and inner calm.
        </p>

        <p>
            <a href="https://PCOA.lnk.to/LightForTheWorldSo">Buy our beautiful music here.</a>
        </p>

        {/* <p>
            We will be able to sell our CD from 9th of November. 
            We are selling the CD for £10 plus postage and packaging.  
            Contact us at <a href="mailto:arundel.poorclares@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} /> arundel.poorclares@gmail.com
            </a> for more details.
        </p> */}

        <p>
            <a href="https://www.youtube.com/watch?v=zs5rGW-RE38">
                <FontAwesomeIcon icon={faYoutube} /> The video on YouTube
            </a>
        </p>

        <h3>O Come, O Come Emmanuel</h3>

        <p>
            We recorded a song for Christmas;{' '}
            <a href="https://PCOA.lnk.to/OComeEmmanuelSo">you can listen to it here.</a>
        </p>

        <iframe
            title="O Come Emmanuel"
            width={560}
            height={315}
            src="https://www.youtube-nocookie.com/embed/sVdHG_cst8Q"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </>
);
