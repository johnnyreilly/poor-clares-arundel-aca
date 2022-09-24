import * as React from 'react';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';
import seekerAngela from './images/SeekerAngela.jpg';

export const angelaPath = '/angela';

export const Angela: React.FC<React.PropsWithChildren<unknown>> = _props => (
    <>
        <Card className="float-right">
            <CardImg top src={seekerAngela} />
            <CardBody>
                <CardText>Angela</CardText>
            </CardBody>
        </Card>

        <h3>Angela</h3>

        <h4>Why I applied to go to the convent</h4>

        <p>
            As a Sales Manager in my early forties my life consisted of an hour’s journey to work, long manic stressful
            days at the office and a single but unfulfilling personal life. Despite the fact that work success meant
            having a nice car and home, expensive holidays and being able to eat out and buy clothes whenever I wanted,
            being single without children, with a number of failed relationships behind me, and coming home to an empty
            house each night, left me thinking that there must be something more to life. I wondered if faith was the
            answer but never had or made the time to explore this or even really thought about what I wanted to do with
            the next forty years of my life. A chance e-mail from a colleague advertising for a stressed business person
            to spend 6 weeks in a convent seemed like the perfect opportunity for me to temporarily leave the rat race,
            take time out and explore other alternatives, both personally and spiritually, and as a bit of an adventurer
            take an opportunity I felt would never come again.
        </p>

        <h4>Angela - How I felt when I left</h4>

        <p>
            After 6 terrific weeks in the convent a big part of me was reluctant to leave the oasis of quiet and
            tranquility at Arundel and return to a life without all the love and care of the nuns who I now consider to
            be my friends. Upon leaving, and since I have returned to life outside the enclosure, I have an inner peace
            that I am determined to hold onto whatever I do. I feel privileged to have been able to share 6 precious
            weeks with the wonderful nuns and participate in the journey with 3 other very interesting women and I am a
            much happier, more relaxed person as a result. It was hard to leave the nuns and that lifestyle but it is
            also exciting that I have an opportunity to put what I learned there into practice to be happy for the next
            40 years.{' '}
        </p>
    </>
);
