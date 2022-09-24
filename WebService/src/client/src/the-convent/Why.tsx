import * as React from 'react';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';
import communityPhoto from './images/CommunityPhoto.jpg';

export const whyPath = '/why';

export const Why: React.FC<React.PropsWithChildren<unknown>> = _props => (
    <>
        <h3>Why?</h3>

        <p>
            Early in 2005 we were approached by Tiger Aspect, the film company who had made the very successful TV
            programme, ‘The Monastery’, to see whether we would be willing to be part of a similar programme for five
            women, which would be called ‘The Convent’.
        </p>

        <p>
            Our first response was pretty negative. This was due in part to previous disappointing engagements with the
            media. More weighty, though, was the commitment we have made to a life of silence and solitude, within an
            enclosure into which people would normally be given entrance only for very specific and necessary reasons.
            The thought of five strangers, along with a crew of camera and sound people, plus their equipment, being
            with us from dawn to dusk for 6 weeks, seemed too disruptive to contemplate!
        </p>

        <p>
            Over the following months, as we watched ‘The Monastery’, which impressed us deeply, heard friends, and then
            met with Abbot Christopher, we grew in openness to the idea that perhaps, with a bit of negotiation (eg 4
            women rather than 5, as our home is so much smaller than Worth), we could do it, and might be willing to.
            After long discernment we took a vote in the community and a large majority were now in favour.
        </p>

        <p>
            Ultimately our reasons for doing the programme were focused on our desire to do something to spread the
            knowledge of the kingdom of God, and of God’s overwhelming love for us all as individuals, whatever our walk
            of life. If nothing else comes through in the four programmes, we would like to think that everyone who sees
            it will have some understanding of how much God loves everyone and that we in Arundel are here to be
            channels of that love in our world of today.
        </p>

        <Card className="float-left">
            <CardImg top src={communityPhoto} />
            <CardBody>
                <CardText>The Community</CardText>
            </CardBody>
        </Card>
    </>
);
