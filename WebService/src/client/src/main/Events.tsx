import * as React from 'react';
import { Card, CardImg } from 'reactstrap';
import stClareStatue from './images/StClareStatue.jpg';
import stFrancis from './images/StFrancis.jpg';
import strewnCross from './images/strewnCross.jpg';
import easterVigil from './images/EasterVigil.jpg';
import crib from './images/crib.jpg';
import taize from './images/Taize.png';

export const eventsPath = '/events';

export const Events: React.FC<React.PropsWithChildren<unknown>> = (_props) => {
    var eventStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: 'Christmas',
        startDate: '2021-12-24T17:30',
        endDate: '2021-12-25T10:00',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        location: {
            '@type': 'Place',
            name: 'Convent of Poor Clares ',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Crossbush, Arundel',
                postalCode: 'BN18 9PJ',
                streetAddress: 'Convent of Poor Clares',
            },
        },
        image: [
            crib,
        ],
        description: `Christmas Eve - 5.30pm: 1st Vespers, 11.15pm: Blessing of the Crib and Midnight Mass.
Christmas Day - 8.30am: Christmas Morning Mass, please join us for refreshments afterwards`,
        organizer: {
            '@type': 'CatholicChurch',
            name: 'Convent of Poor Clares',
            url: 'https://www.poorclaresarundel.org/',
        },
    };

    return (
        <>
            <script type="application/ld+json">{JSON.stringify(eventStructuredData)}</script>
            <h3>Events</h3>

            <h4>Covid 19</h4>

            <p>We are sorry but for the present our Chapel and guest house remain closed to the public.</p>

            <p>
                Morning and Evening Prayer are live-streamed on Facebook most days as a way of sharing our lives and
                liturgy while we cannot invite anyone to join us physically. We keep you in our prayers.
            </p>

            <h4>Annual Events</h4>
            <p>Come and join us for these events which take place throughout the year!</p>

            <h4>Franciscan Celebrations</h4>

            <Card className="float-right">
                <CardImg top src={stClareStatue} />
            </Card>

            <h5>Solemnity of St Clare</h5>

            <p>10th August, Transitus with 1st Vespers: 5.30pm. Followed by supper with the community</p>

            <p>11th August: 8.30am Mass of St Clare</p>

            <Card className="float-right">
                <CardImg top src={stFrancis} />
            </Card>

            <h5>Solemnity of St. Francis: 4th October</h5>

            <p>3rd Oct – Transitus with 1st Vespers: 5.30pm</p>

            <p>4th Oct – Mass of St. Francis: 8.30am</p>

            <h5>The Easter Triduum</h5>

            <h6>Maundy Thursday</h6>

            <p>Mass of the Lord’s Supper: 6.30pm</p>

            <Card className="float-right">
                <CardImg top src={strewnCross} />
            </Card>

            <h6>Good Friday</h6>

            <p>Liturgy of the Passion: 3pm</p>
            <p>Way of the Cross: 5.30pm</p>

            <Card className="float-right">
                <CardImg top src={easterVigil} />
            </Card>

            <h6>Holy Saturday</h6>

            <p>Easter Vigil: 8.30pm</p>

            <h6>Easter Sunday</h6>

            <p>Easter Morning Mass: 8.30am</p>

            <h4>Christmas</h4>

            <h5>Christmas Eve</h5>

            <p>1st Vespers: 5.30pm</p>

            <p>Blessing of the Crib and Midnight Mass: 11.15pm</p>

            <Card className="float-right">
                <CardImg top src={crib} />
            </Card>

            <h5>Christmas Day</h5>

            <p>Christmas Morning Mass: 8.30am</p>

            <p>Please join us for refreshments afterwards</p>

            <Card className="float-left">
                <CardImg top src={taize} />
            </Card>

            <h5>Taize Evening</h5>

            <p>Every last Friday of the month (except December): 7.15 - 8.15</p>
            <p>...round the Cross with Scripture, song and silence</p>

            <h6>Every Sunday</h6>
            <p>Exposition: 4:30pm</p>
            <p>Vespers with Benediction: 5:30pm</p>

            <h6>Every Tuesday</h6>
            <p>John Main Meditation Group: 7:15pm</p>
        </>
    );
};
