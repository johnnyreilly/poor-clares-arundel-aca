import * as React from 'react';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';
import srMariaAndKatana from './images/SrMariaAndKatana.jpg';

export const sisterMariaPath = '/community-sister-maria';

export const SisterMaria: React.FC<React.PropsWithChildren<unknown>> = _props => (
    <>
        <Card className="float-right">
            <CardImg top src={srMariaAndKatana} />
            <CardBody>
                <CardText>Sister Maria (and Katana!)</CardText>
            </CardBody>
        </Card>

        <h3>Sister Maria's Story</h3>

        <p>
            I was born in Malaysia, I came to this country when I was 19 to be a student. I received my calling to be a
            religious soon after I was confirmed at 17. I had no courage at that time to acknowledge this since none of
            my family has a religious vocation and I did not want to cause an uprising in my family, especially a large
            extended one.
        </p>

        <p>
            Although I did not want to believe this calling which I knew would cost me a tremendous pain of not having
            my own family and being looked upon as 'strange' within my close knit family, I felt an overwhelming joy of
            being alive like I never did in my life. I experienced God's deep love in my prayer each night and His Power
            at work in all things. I started to improve my English and attended daily Mass secretly if possible.
        </p>

        <p>
            I came to England hoping my English would become fluent. It was during the course of my degree that I became
            very unhappy, I no longer could experience God. After all that blissful relationship with God for about a
            year, I experienced a total emptiness of the presence of God. I began to doubt if God ever existed and felt
            terribly guilty for my feeling, I had to go to daily Mass just in case God still cared about me. It was only
            the Mass that I had a desire for, not prayer, nor did I know if I believed in the God I was brought up to
            believe in.
        </p>

        <p>
            I stopped attending lectures after the Easter break in my second year, and decided to search for religious
            life even in the stage of 'unbelief'. I just had to find out if this desire for God is still true, or could
            I totally give up my faith. I went to an apostolic religious congregation only to be told to go back to
            university. Then finally I was directed by two other religious to come to Arundel. I did that as my last
            resort and after the first night in the guest house, I knew God existed.
        </p>

        <p>
            Not I, rather, God embraced me with the strength to leave my family and my country. Despite years of
            struggles in everyway daily, happy to be here, it is a school of all schools, a place to learn through
            failings and mistakes, the art of love and to bear the fruits of the Holy Spirit.
        </p>
    </>
);
