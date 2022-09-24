import * as React from 'react';
import { Card, CardImg, CardBody, CardText, CardGroup } from 'reactstrap';
import dukeNDuchess from './images/DukeNDuchess.jpg';
import motherAbbessAgnesGasquet from './images/MotherAbbessAgnesGasquet.jpg';
import motherClareCampbell from './images/MotherClareCampbell.jpg';
import motherAustinGibson from './images/MotherAustinGibson.jpg';
import motherCampionFleet from './images/MotherCampionFleet.jpg';
import conventFromTheBack from './images/ConventFromTheBack.jpg';
import spire from './images/Spire.jpg';
import woodchester from './images/Woodchester.jpg';
import bulwell from './images/Bulwell.jpg';
import communityPresent from './images/CommunityPresent.jpg';
import communityTripAroundHouse from '../../static/communityTripAroundHouse.pdf';
import communityFoundationsHollington from '../../static/communityFoundationsHollington.pdf';

export const arundelPath = '/community-arundel';

export const Arundel: React.FC<React.PropsWithChildren<unknown>> = _props => (
    <>
        <h3>The Arundel Community</h3>

        <Card className="float-right">
            <CardImg top src={dukeNDuchess} />
            <CardBody>
                <CardText>
                    Henry and Flora
                    <br />
                    Duke and Duchess of Norfolk
                </CardText>
            </CardBody>
        </Card>

        <h4>1886</h4>
        <p>
            On Monday 31 August, ten Poor Clares from the community of Notting Hill stood on Victoria Station awaiting
            the Arundel train. They were on their way to found a new community at the request of Flora, Duchess of
            Norfolk, on land given by her husband, Henry 15th Duke of Norfolk.
        </p>

        <p>
            The Duke and Duchess were at the station and the whole party went in six carriages up the hill to the new
            convent where the priest and choir of St Philip’s, the local Catholic church, met them with thirty acolytes.
            After a short service of thanksgiving, the Duchess showed the sisters around their new home, and then left
            them to unpack.
        </p>

        <p>
            The community had a hard time in the beginning as their generous benefactor, the Duchess, died on 11th April
            1887. The sisters had no means of support apart from begging, and five of the original sisters found it so
            hard that they left and two young sisters died of consumption.
        </p>

        <h4>1902</h4>

        <p>
            Mother Abbess Agnes Gasquet, the founding Abbess, was succeeded by Mother Clare Campbell who was abbess
            until her death in 1948. During those years the community continued to grow and develop, there was further
            building and the garden was gradually coaxed out of its wilderness condition.
        </p>

        <div className="row">
            <div className="col-xs-6 col-md-2">
                <div className="thumbnail text-center">
                    <img src={motherAbbessAgnesGasquet} alt="Mother Abbess Agnes Gasquet" />
                    <div className="caption">Mother Abbess Agnes Gasquet</div>
                </div>
            </div>
            <div className="col-xs-6 col-md-2">
                <div className="thumbnail text-center">
                    <img src={motherClareCampbell} alt="Mother Clare Campbell" />
                    <div className="caption">Mother Clare Campbell</div>
                </div>
            </div>
        </div>

        <h4>1951</h4>
        <p>
            Mother Columba followed Mother Clare and was in turn followed in 1951 by Mother Gabriel who was also the
            first President of the Poor Clares Association of all the English, Scottish and Welsh communities which was
            established in 1968.
        </p>

        <h4>1972</h4>

        <p>
            Franciscan sisters of the Third Order Regular Enclosed, from Goodings, near Newbury, Berkshire, with their
            Abbess, Mother Austin Gibson, came to amalgamate with the Arundel community. Mother Campion Fleet was the
            courageous abbess at the time. The community still laugh about those early days when sixteen sisters,
            including two over 90, arrived in a house with only one empty bedroom! The next years were a time of
            consolidation and expansion, and soon the community numbered 44 sisters.
        </p>

        <div className="row">
            <div className="col-xs-6 col-md-2">
                <div className="thumbnail text-center">
                    <img src={motherAustinGibson} alt="Mother Austin Gibson" />
                    <div className="caption">Mother Austin Gibson</div>
                </div>
            </div>
            <div className="col-xs-6 col-md-2">
                <div className="thumbnail text-center">
                    <img src={motherCampionFleet} alt="Mother Campion Fleet" />
                    <div className="caption">Mother Campion Fleet</div>
                </div>
            </div>
        </div>

        <Card style={{ maxWidth: "430px" }}>
            <CardImg top src={conventFromTheBack} />
            <CardBody>
                <CardText>
                    Arundel Convent from the back
                    <br />
                    <a href={communityTripAroundHouse}>Please take a look round our house.</a>
                </CardText>
            </CardBody>
        </Card>

        <h4>1990</h4>

        <Card className="float-right">
            <CardImg top src={spire} />
            <CardBody>
                <CardText>The Spire</CardText>
            </CardBody>
        </Card>

        <p>
            At this time we needed urgent work done on our chapel spire and the estimate was £40,000. We had just
            £2,000! The diocese lent us the money so that work could begin. It was then that we started a series of
            meetings to see how we could raise more money to pay off the debt, and it was out of these that the wild
            idea of starting a community in the Third World arose, to make our life available to women there. In spite
            of the fears and the lack of money we agreed to explore the possibility of a house in Africa, where many
            doors were opening for us. Our Abbess set off to stay with the Poor Clares in Uganda to see the African
            interpretation of our life. On the morning she left a legacy came through the post for exactly £40,000! It
            seemed to us that God stepped in in a very tangible way and was putting his sign of approval on our venture!
            We were then able to repay the debt.
        </p>

        <p>
            Kenya was finally chosen and land there was generously given by a local Kenyan family. Bishop Longinus and
            the people in Myanga, north-west Kenya, gave us a very warm welcome. So in 1992 three Sisters – Sr Angela,
            Sr Felicity and Sr Leo set off on the new venture.
        </p>

        <p>
            You can find more about Kenya <a href="/communityFoundationsKenya">here</a>
        </p>

        <h4>2003</h4>
        <p>
            In 2001 after further discernment, the community voted to open a small convent in a built-up area where the
            sisters would be a praying presence among poor people. Finally a large house became available in Hollington,
            near St Leonards on Sea, East Sussex. Four sisters moved in, and two Franciscan Friars joined the community,
            living in a house opposite, but joining in the prayer and community life of the sisters.
        </p>

        <p>
            You can find more about Hollington{' '}
            <a href={communityFoundationsHollington} target="_self">
                here
            </a>
        </p>

        <h4>Present</h4>
        <p>
            In January 2010 M. Francis and Sr Margaret came from Bulwell, Nottingham, to join us. Their community had
            gradually become smaller and they were now the only two remaining from the original community.
        </p>

        <p>
            The Woodchester Convent closed in 2011 and sisters from there came to join us. Woodchester had been founded
            from Taunton, so this was a connecting with our own roots, as the Taunton community moved to Goodings, then
            amalgamated with Arundel in 1972.
        </p>

        <CardGroup>
            <Card>
                <CardImg top src={bulwell} />
                <CardBody>
                    <CardText>Bulwell</CardText>
                </CardBody>
            </Card>
            <Card>
                <CardImg top src={woodchester} />
                <CardBody>
                    <CardText>Woodchester</CardText>
                </CardBody>
            </Card>
        </CardGroup>

        <p>
            We continue to follow the way of life St Clare wanted, filled with prayer, working together to be a
            Christ-centered community, so that the glory and the love of God can pour out on the world for the healing
            of the nations. Today we try to be faithful to this vision and go frequently to prayer. Without losing the
            spirit of prayer, we also work to share with those who are in need and to support ourselves. St Clare wanted
            us to live in visible dependence of God, so we have no fixed income or assets. This element of risk is one
            of her great gifts to us. It demonstrates that God is always faithful.
        </p>

        <p>Now in 2018 we are 22 sisters.</p>

        <Card>
            <CardImg top src={communityPresent} />
            <CardBody>
                <CardText>The Community, Now</CardText>
            </CardBody>
        </Card>
    </>
);
