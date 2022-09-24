import * as React from 'react';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';
import srJoseph from './images/SrJoseph.jpg';

export const sisterJosephPath = '/community-sister-joseph';

export const SisterJoseph: React.FC<React.PropsWithChildren<unknown>> = _props => (
    <>
        <Card className="float-right">
            <CardImg top src={srJoseph} />
            <CardBody>
                <CardText>Sister Joseph</CardText>
            </CardBody>
        </Card>

        <h3>Sister Joseph's Story</h3>

        <p>
            I came from an Irish family of six children – two boys and four girls, who all became nuns in the end. We
            lived on a farm in Limerick. My eldest sister, Catherine, left home to enter the Little Sisters of the Poor,
            and when my second sister left to join her, I was very upset because I knew then that I would have to come
            in to do the housework and I missed working outside with the animals, which I enjoyed very much. I had no
            intention of following them. My dad never thought I would become a nun; I was a bit of a tomboy. At the back
            of my mind, I really did want to enter a convent, but I couldn’t decide until one day, mum and I went
            shopping. We always called into a church and on the way back, we met a nun over from England. She told us
            about her life which interested me a lot. After much thought and prayer, I wrote to her, and had a reply
            back, so off I went leaving a tearful mum and dad behind. I didn’t join them straight away. I worked in the
            school and had to learn French. I went to dances and to the pictures, with girl friends. I soon got fed up
            with it but I did once win a 100 cigarettes. All that came to an end one day when I met a lady who told me
            that she had a daughter, a Franciscan nun in Taunton. She told me what their work was and I thought to
            myself, that was just what I wanted, as I didn’t like teaching. I wrote to the Reverend Mother and told her
            that I was interested in their life. I had a nice welcoming letter back, inviting me to come and visit them.
            The date was fixed to come and as I walked up the drive, I knew straight away: this is the place for me.
        </p>
    </>
);
