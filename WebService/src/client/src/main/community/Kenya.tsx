import * as React from 'react';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';
import kenyaContractSigning from './images/KenyaContractSigning.jpg';
import kenyaHomePic from './images/KenyaHomePic.jpg';
import kenyaHouseChurch from './images/KenyaHouseChurch.jpg';
import kenyaCommunity2019 from './images/KenyaCommunity2019.jpg';
import africanStClare from './images/AfricanStClare.jpg';

export const kenyaPath = '/community-kenya';

export const Kenya: React.FC<React.PropsWithChildren<unknown>> = _props => (
    <>
        <Card className="float-right">
            <CardImg top src={kenyaContractSigning} />
            <CardBody>
                <CardText>
                    Bishop Longinus and Sr
                    <br />
                    Aelred(Abbess) sign the
                    <br />
                    contract
                </CardText>
            </CardBody>
        </Card>

        <h3>
            Clare in Kenya
            <br />
            Monastery of Our Lady of Light, Myanga
        </h3>

        <h4>Beginnings</h4>

        <p>
            On 3 June 1990 the Arundel community voted to make a foundation in Kenya. In October 1991 three sisters
            travelled to the Poor Clare community in Mbarara, Uganda to experience African Poor Clare life and in March
            1992 they moved to Kenya and the diocese of Bungoma to which they had been invited by the then Bishop,
            Longinus Atundo.
        </p>

        <p>
            They were offered land near the village of Myanga by a local family who wished to donate it in memory of
            their parents. The sisters returned to UK for more consultations with the Arundel community and in October
            1992, after a Mass of Missioning, they left for Kenya.
        </p>

        <p>
            The sisters settled in Myanga and supervised the building of the Monastery and the first Mass was celebrated
            on 1 December 1992. The building was done in several stages and culminated in the construction of the chapel
            which was consecrated on 19 July 2001
        </p>

        <Card style={{ maxWidth: '430px' }}>
            <CardImg top src={kenyaHomePic} />
            <CardBody>
                <CardText>
                    Before the Mass of Missioning with Cardinal Cormac Murphy O’Connor (then our Archbishop) and Bishop
                    (now Cardinal) Vincent Nichols, the three foundresses and the (then) Abbess of Arundel and the
                    vicaress
                </CardText>
            </CardBody>
        </Card>

        <h4>Where We Live</h4>

        <p>
            The diocese of Bungoma is situated in Western Kenya and Myanga village is 26 km from Bungoma town and very
            near to the border with Uganda. Our monastery is on the edge of Myanga village surrounded by the houses and
            small plots of land of the local people.
        </p>

        <Card style={{ maxWidth: '430px' }}>
            <CardImg top src={kenyaHouseChurch} />
            <CardBody>
                <CardText>The House and the Church</CardText>
            </CardBody>
        </Card>

        <h4>The Community</h4>

        <p>
            The community are 12 in number at present. One sister from Arundel, six solemnly professed Kenyans, one
            novice and four postulants.
        </p>

        <p>
            We are in contact with many young Kenyan women who are beginning the process of discerning whether they are
            called to Poor Clare life and we pray daily for more young women to join us. Once a young lady has made the
            decision to start her discernment with us, she has a year outside living in her own environment while she
            follows a program with a member of the professed community appointed to look after aspirants. The program is
            designed to gently introduce her to our way of life
        </p>

        <Card style={{ maxWidth: '430px' }}>
            <CardImg top src={kenyaCommunity2019} />
            <CardBody>
                <CardText>The Community in 2019</CardText>
            </CardBody>
        </Card>

        <p>
            Over the years many sisters from our founding community in Arundel have visited us and they are still
            closely in contact with us.
        </p>

        <Card className="float-right">
            <CardImg top src={africanStClare} />
            <CardBody>
                <CardText>African St Clare</CardText>
            </CardBody>
        </Card>

        <h4>Our daily life</h4>

        <p>
            Our contemplative life of prayer and praise is centred around the celebration of Mass, the Divine Office and
            daily adoration of the Blessed Sacrament. We pray for the needs of the Church, our diocese and the many
            people who come to us for help. We also spend a good part of the day working at simple tasks. Cooking,
            cleaning and growing food. We make church vestments, candles and rosaries.
        </p>

        <h4>Hospitality</h4>

        <p>We have a small guesthouse and welcome people for a time of quiet, rest or for private retreats.</p>

        <p>
            Please contact us if you would like us to pray for you. Also for booking a place in the guesthouse or if you
            would like more information about our community and way of life.
        </p>

        <address>
            <strong>Monastery of Poor Clares</strong>
            <br />
            P.O.Box 2131
            <br />
            Bungoma 5 0200
            <br />
            <br />
            <abbr title="Phone">Tel:</abbr> 073342562 / 0722345334
            <br />
            <br />
            Email: <a href="mailto:poorclaresmyanga@hotmail.com">poorclaresmyanga@hotmail.com</a>
        </address>
    </>
);
