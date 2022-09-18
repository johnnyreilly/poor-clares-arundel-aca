import * as React from 'react';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';
import srClareAgnes from './images/SrClareAgnes.jpg';

export const sisterClareAgnesPath = '/community-sister-clare-agnes';

export const SisterClareAgnes: React.FC<React.PropsWithChildren<unknown>> = _props => (
    <>
        <Card className="float-right">
            <CardImg top src={srClareAgnes} />
            <CardBody>
                <CardText>Sister Clare Agnes</CardText>
            </CardBody>
        </Card>
        <h3>Sister Clare Agnes' Story</h3>
        <p>
            Well, I was 58 when I joined the Poor Clares in Arundel. Before that I had been in a teaching Order, called
            Notre Dame de Namur. I went there when I was 22, having been a Catholic for just 2 years, because I was so
            attracted by the Person of Jesus, especially in the Eucharist. I had a wonderful formation with them, and
            was sent to University and Teacher Training College, and so into the classroom. I was there for 17 years
            when I had a kind of a breakdown and so I left. I stopped praying and only did the minimum to remain a
            Catholic. I went into a foolish marriage, which failed after 9 years, and once more on my own I began to
            pray again. It was then that the attraction of Jesus re- emerged, at first a small shoot, and it grew into a
            great climbing plant that had nothing to climb up. I knew he was calling me back into religious life, and
            this time I wanted to be a contemplative, to spend quality time with him and for his people. It was a love
            affair like no other, and so I eventually got here, and would not be anywhere else!
        </p>
    </>
);
