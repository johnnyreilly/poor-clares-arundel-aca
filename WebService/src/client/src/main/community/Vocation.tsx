import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';
import { addressesPath } from '../misc/Addresses';
import chapel from './images/Chapel.jpg';

export const vocationPath = '/community-vocation';

export const Vocation: React.FC<React.PropsWithChildren<unknown>> = _props => (
    <>
        <h3>Vocation</h3>

        <Card className="float-right">
            <CardImg top src={chapel} />
            <CardBody>
                <CardText>In Chapel</CardText>
            </CardBody>
        </Card>

        <p>
            If a person feels drawn by God to offer herself to him in a life of prayer and contemplation, together with
            others who share this desire, she would be advised to make enquiries about the various Contemplative Orders.
            Should she feel drawn to following the Franciscan way begun by St Clare of Assisi she then contacts one of
            the Poor Clare Convents in England.
        </p>

        <p>
            You can find addresses <Link to={addressesPath}>here</Link>.
        </p>

        <h4>Requirements</h4>

        <p>For those who would like to be a Poor Clare in Arundel:</p>
        <ul>
            <li>She needs to be over 18</li>
            <li>
                She must have completed secondary education and either had some further training or work experience for
                a few years.
            </li>
            <li>
                She must be free from other commitments, such as marriage bonds, dependent children or parents, or debt.
            </li>
            <li>She needs to be psychologically mature and a lover of life!</li>
            <li>Good health is also necessary.</li>
            <li>
                She would need to be attuned to prayer, both personal and liturgical; to have a taste for a simple life;
                to be prepared to live with others who have responded to God’s call.
            </li>
            <li>A sense of humour is essential!</li>
        </ul>

        <p>
            St Clare’s Rule says:
            <br />
            If, by DIVINE INSPIRATION, anyone should come to us desiring to accept this life . . .<br />
            This shows clearly that a religious vocation is an entirely free gift from God. His is the initiative. The
            person’s part is to choose to respond. In this delicate matter there is much need for careful discernment,
            on the part of the individual and of the community. Time is given to this.
        </p>

        <h4>The Process</h4>

        <ol>
            <li>
                The would-be Poor Clare writes to the Abbess to ask to come to visit us. She would make several visits,
                during which time the Sisters begin to know her and she them.
            </li>
            <li>
                If she feels she has found what she is looking for, and the Abbess is also happy about her. She would be
                invited to come for a Live-In. She would come and share the life of the community for up to one month,
                so that she may gain first-hand experience of the life.
            </li>
            <li>If she is still of the same mind, she then makes a formal request in writing to join the community.</li>
            <li>
                The Abbess ascertains that she has all the requirements mentioned above, and a date of entry is fixed.
            </li>
        </ol>

        <h4>Formation in the Religious Life</h4>

        <p>
            At first she is a postulant for a minimum of one year. She wears her own clothes and lives alongside the
            Sisters, watching and learning from them, and also following certain studies which will help her to deepen
            her spiritual life.
        </p>

        <p>
            At the end of her postulancy the Abbess, with the consent of the community, may receive her into the
            Novitiate. She is given the habit and her religious name. She is a Novice for two years and receives
            formation in Franciscan spirituality and prayer, scripture and doctrine.
        </p>

        <p>
            After that, if she is considered suitable by the Abbess and the community, she is accepted for First Vows,
            and makes the three vows of Poverty, Chastity and Obedience for three years. She is now a Junior, not yet a
            full member of the Community. Her formation continues.
        </p>

        <p>
            At the end of the three years – or may be longer – she asks to be admitted to full membership of the
            community. If the Abbess and Community accept her, she makes her three vows of commitment to God for the
            rest of her life at her Solemn Profession.
        </p>
    </>
);
