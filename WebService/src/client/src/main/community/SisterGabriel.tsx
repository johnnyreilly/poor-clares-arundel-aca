import * as React from 'react';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';
import srGabriel from './images/SrGabriel.jpg';

export const sisterGabrielPath = '/community-sister-gabriel';

export const SisterGabriel: React.FC<React.PropsWithChildren<unknown>> = _props => (
    <>
        <Card className="float-right">
            <CardImg top src={srGabriel} />
            <CardBody>
                <CardText>Sister Gabriel</CardText>
            </CardBody>
        </Card>
        <h3>Sister Gabriel's Story</h3>
        <p>
            My name is Sr Gabriel, I am 35 years old, I was born and brought up in Newcastle and I have been a Poor
            Clare for twelve years. I graduated in 1993 having read engineering at Salford University and I worked for a
            year before I tried my vocation with the Poor Clares. I was brought up in a Catholic family along with my
            three older sisters, who are now all married and I was greatly influenced by my own mother’s strong and
            practical faith.
        </p>
        <p>
            I didn’t really think about religious life until more than half way through my degree programme. Having been
            educated at a girl’s convent school I had lived a rather sheltered existence so I found being plunged into a
            lecture hall full of men rather exciting!!!!! I spent the first year of my degree socialising more than
            studying and inevitably I also fell in love for the first time, you can imagine that religious life was far
            from my thoughts at this point. However after a year that relationship had run its course and I knew that we
            were not right for each other. With a broken heart my mum invited me on holiday for a fortnight to Crete and
            we had a great time together. I remember distinctly sitting on the hotel balcony one evening saying to her
            ‘Mum I think there is more for me than spending my life with one person’. It was the first time I verbalised
            what had been going on inside me for some time. She said ‘Don’t you even think about becoming a nun’ and I
            just said I didn’t know. That of course was the beginning of a long process of discovering who I really was
            and God’s plan for me.
        </p>
        <p>
            While I was at university I joined the Catholic Chaplaincy and it was during my second year there that I
            began to think about religious life. With the support and help of friends I decided to seek some help to
            discern if I had a vocation and the chaplains at the university were a great help and support. I did
            consider using my degree to work for a development organisation like CAFOD but after a period of reflection
            I realised that God wanted me for who I was and not for what I could do. I visited a few different
            contemplative houses but I felt most at home with the Franciscans and in particular the Poor Clares.
        </p>
        <p>
            Our way of life is expressed and lived out by the vows of poverty, chastity and obedience promising to live
            enclosed, which basically means living in one place. I find great fulfilment and joy in living sisterhood
            and spending the better part of my day singing the praises of God through praying the divine office. We all
            have different jobs within the community but our primary call is to be an expression of God’s love to each
            other in community and to those who we meet and to be a praying presence bringing peace and healing
            throughout the world.
        </p>
        <p>I wouldn’t want to live my life in any other way!!!</p>
        <p>2006.</p>
    </>
);
