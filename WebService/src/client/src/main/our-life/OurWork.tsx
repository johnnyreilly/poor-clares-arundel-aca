import * as React from 'react';
import { Card, CardText, CardImg, CardBody } from 'reactstrap';
import workSrMariaIcon from './images/workSrMariaIcon.jpg';
import work1 from './images/Work1.jpg';
import work2 from './images/Work2.jpg';
import work3 from './images/Work3.jpg';
import vestments1 from './images/vestments1.jpg';
import vestments2 from './images/vestments2.jpg';
import vestments3 from './images/vestments3.jpg';
import vestments4 from './images/vestments4.jpg';
import vestments5 from './images/vestments5.jpg';
import tripAroundGuestHouse from '../../static/tripAroundGuestHouse.pdf';

export const ourWorkPath = '/our-work';

export const OurWork: React.FC<React.PropsWithChildren<unknown>> = _props => (
    <>
        <Card className="float-right">
            <CardImg top src={workSrMariaIcon} />
            <CardBody>
                <CardText>Sister Maria painting an icon</CardText>
            </CardBody>
        </Card>

        <h3>Our Work</h3>

        <p>
            We not only work to earn our living, but still more we work as a way of sharing in God’s work of creation
            and in the work and struggles of the rest of humanity. Every sister contributes to the care of the house and
            garden according to her capacity. There is a rota for those who cook and another for answering the Front
            Door bell; parts of the house are shared out for the cleaning. Several others work in the garden. One or two
            are involved in the teaching and formation of new members. The Infirmarian and her helpers are closely
            involved with the care of the elderly and the sick. Each does what she can, just as each receives from the
            community what she needs, and this will be different for each person.
        </p>

        <p>
            We have a small guest house where people can come to find rest and refreshment, sharing our prayer with us
            in our chapel and staying in simple, but attractive rooms. We try to share the gifts God has given us by
            enabling others to share our prayer in Chapel, and by praying constantly in response to people’s needs.
        </p>

        <p>
            You can see round our guest house{' '}
            <a href={tripAroundGuestHouse}>
                here
            </a>
            .
        </p>

        <p>One of our Sisters paints icons, a slow and prayerful work.</p>

        <p>
            There are numerous crafts practised in the community, the fruits of which are on sale in our small shop. One
            sister turns wood, several others make garments on knitting machines. Others make candles, encaustic wax
            cards, as well as cards created and printed on our computer.
        </p>

        <div className="row">
            <div className="col-md-4">
                <div className="thumbnail">
                    <img src={work1} alt="" />
                </div>
            </div>
            <div className="col-md-4">
                <div className="thumbnail">
                    <img src={work2} alt="" />
                </div>
            </div>
            <div className="col-md-4">
                <div className="thumbnail">
                    <img src={work3} alt="" />
                </div>
            </div>
        </div>

        <p>
            We also make vestments for liturgical use. There are albs, purificators, etc and many other designs than the
            ones pictured below.
        </p>

        <div className="row">
            <div className="col-md-2">
                <div className="thumbnail">
                    <img src={vestments1} alt="Vestment" />
                </div>
            </div>
            <div className="col-md-3">
                <div className="thumbnail">
                    <img src={vestments2} alt="Vestment" />
                </div>
            </div>
            <div className="col-md-3">
                <div className="thumbnail">
                    <img src={vestments3} alt="Vestment" />
                </div>
            </div>
            <div className="col-md-2">
                <div className="thumbnail">
                    <img src={vestments4} alt="Vestment" />
                </div>
            </div>
            <div className="col-md-2">
                <div className="thumbnail">
                    <img src={vestments5} alt="Vestment" />
                </div>
            </div>
        </div>
    </>
);
