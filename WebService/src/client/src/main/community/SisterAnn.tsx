import * as React from 'react';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';
import srAnn from './images/SrAnn.jpg';

export const sisterAnnPath = '/community-sister-ann';

export const SisterAnn: React.FC<React.PropsWithChildren<unknown>> = _props => (
    <>
        <Card className="float-right">
            <CardImg top src={srAnn} />
            <CardBody>
                <CardText>Sister Ann</CardText>
            </CardBody>
        </Card>

        <h3>Sister Ann's Story</h3>

        <p>
            It all began when I was nine years old, when my teacher hung up a poster of St Francis surrounded by birds
            and animals. Like many a child I was animal mad at that time – (and still am!). The teacher told us that St
            Francis was a friend of all wild things and could talk to animals and they to him. I was hooked! – and ran
            home to tell my parents about this wonderful man. My Father then produced a copy of The Little Flowers of St
            Francis which is a collection of legends about St Francis and was written about a hundred years after this
            medieval saint died. Having consumed this book I decided that when I grew up I would be a friar, and I would
            preach to the birds and tell everybody about Jesus! As time went on I realized I would have a few anatomical
            problems, and would have to be content with being a nun!
        </p>

        <p>
            When I was about fourteen I came in contact with the Anglican Friars. I was Anglo-Catholic at the time. They
            introduced me to the Anglican Poor Clares, who were in the process of being founded. They were undergoing
            their formation at Tymawr in Monmouthshire where I visited them and felt that this was where I would go.
        </p>

        <p>
            In the meantime my father became a Catholic, followed by my mother and then my brother. When I was seventeen
            I too was received into the Catholic Church, and became a member of the Franciscan Third Order, which St
            Francis founded for ordinary people wanting to live in his spirit. Knowing that I would need time to settle
            in the Catholic Church, I chose to train as a nurse before entering a convent. I then fell in love with
            nursing, and after becoming an SRN continued with Midwifery and then trained as a Queen’s District Nurse and
            worked in Leicester for four years in this capacity.
        </p>

        <p>
            I loved my work, but the ‘Franciscan nunbug’ was still biting when I was asked if I would consider going out
            to Malta to pioneer District Nursing there. This was a catalyst for me and it seemed I had to make up my
            mind as to whether I continued with my nursing career or try my vocation in a religious order. I thought I
            should try a religious order, if only to get the idea out of my system! I was drawn to the Poor Clares but I
            had also come into contact with some Franciscan contemplative Sisters at Goodings, near Newbury. I would
            visit them now and then for a few days quiet, staying in their guest house. I talked things over with my
            parish priest, who said he thought the Poor Clares would be too tough for me, and advised me to try with the
            Goodings sisters. So I applied and was accepted by them.
        </p>

        <p>
            At this point I became very ill and had to be hospitalized with salmonella. I emerged somewhat lighter than
            I should be, so vocations and nursing was on hold for a few months. Eventually my parish priest asked me
            what I was going to do. I replied that I still felt drawn to the Poor Clares. To which he replied, “Why
            don’t you go and give them the once over at Arundel”? Until then I had never heard of Arundel but I came and
            ‘gave them the once-over’ and felt that this was where God wanted me. Forty-six years later I am still
            getting the ‘nunbug’ out of my system, but I think I shall stay, if they will have me!
        </p>
    </>
);
