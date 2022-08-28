import * as React from 'react';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';
import stFrancis from './images/StFrancis.jpg';
import sanDamianoCrucifix from './images/SanDamianoCrucifix.jpg';
import theBible from './images/TheBible.jpg';

export const francisLifePath = '/beginnings-francis-life';

export const FrancisLife: React.FC<React.PropsWithChildren<unknown>> = _props => (
    <>
        <Card className="float-right">
            <CardImg top src={stFrancis} />
            <CardBody><CardText>St Francis</CardText></CardBody>
        </Card>

        <h3>St Francis of Assisi – His Life</h3>

        <p>
            He was born in 1182 to Pia and Pietro Bernadone in Assisi a small town towards the north of Italy. Pietro
            belonged to the new merchant class, and made a rich living buying and selling cloth. When his first child
            was born, he was away getting it in France. On his return he discovered that his wife had had the child
            baptized “John”. He didn’t want that and said his name was to be Francesco, or Francis, and this name stuck.
        </p>

        <p>
            The boy grew up to be a wild leader of the youth in Assisi. They would go around the town singing and
            dancing, drinking and eating, largely at Francis’ expense. He was ambitious too. He wanted to be a Knight,
            which would take him up the social ladder, so when he was about 18 he joined in a local battle against the
            neighbouring town of Perugia. He was taken prisoner, and remained in terrible conditions for about a year,
            during which time he got sick. Eventually his father paid a ransom for him, but on his return home he was
            not his usual jolly self. Depression hit him. He could not even find pleasure in the beauty of the
            countryside as he used to do.
        </p>

        <p>
            Eventually he was able to pull himself together, and set off again in pursuit of glory in battle, this time
            further from home. On the way he got sick with malaria, and he had two dreams which seemed to indicate that
            he was going to be leader of a great army, but that to find out more he was to return to Assisi. He
            understood it was God who was calling him to serve Him, and not another man.
        </p>

        <Card className="float-left">
            <CardImg top src={sanDamianoCrucifix} />
            <CardBody><CardText>San Damiano Crucifix</CardText></CardBody>
        </Card>

        <p>
            Very gradually he began to discover what God wanted of him. To do this he began to pray. He would find a
            quiet place on his own, and God touched his heart and drew him strongly into a relationship with Him. One
            day he was passing a small chapel called San Damiano. He felt drawn to go in and pray. There he saw a very
            large crucifix, more like an icon of Jesus on the cross and he knelt down to pray. All of a sudden he was
            aware of a voice speaking to him.
        </p>

        <p>
            It called him tenderly by name:"Francis! Do you not see that my house is falling into ruin? Go and repair it
            for me!"
        </p>

        <p>He was amazed, but he replied: "Gladly I will do so, O Lord."</p>

        <p>
            He thought he was being asked to rebuild that chapel, which was indeed in ruins, but God had a wider picture
            in mind. He was being called to renew the very Church itself which was full of immorality, excessive wealth,
            sin and evil.
        </p>

        <Card className="float-right">
            <CardImg top src={theBible} />
            <CardBody><CardText>The Bible</CardText></CardBody>
        </Card>

        <p>
            This did not become evident to him for some time. First, he had to begin with himself and come to new way of
            living. His praying took him to Mass, where he heard passages from the Gospel read out. These gave him the
            guidance he needed and he was enthusiastic to follow the teachings of Jesus about having no money or
            unnecessary things. Above all he heard the invitation of Jesus: COME, FOLLOW ME! This kind of teaching freed
            him and filled him with joy. Soon other men joined him, and together they went about sharing the Good News
            of how Jesus loved people, and living the message he taught. All through his life Francis was tough on
            himself. He knew how easily he could slip into sin and so he used to fast a lot. He was kindness itself to
            others, especially to the poor, and would always give away his very clothes if he saw another in need. His
            enthusiasm for Jesus was infectious, and people flocked in great numbers to hear him. Then he would go off
            for days into the countryside to pray. On his many journeys and in the countryside he came into a close
            relationship with all of nature, especially animals and birds, who were not afraid of him and seemed to
            listen to his words. He felt very close to nature, and, for example, referred to his Brother Sun, Sister
            Moon, Mother Earth, Sister Water. He had been created by God, and so had they, and that is why they were all
            of one family.
        </p>

        <p>
            Two years before he died, as he was making a 40 days retreat in Mount La Verna in Tuscany, he had a vision
            of a six-winged seraph (an angel). In the middle of the wings was a crucified man. Francis was filled with
            great amazement and sweetness. When the seraph disappeared he saw that his hands and feet bore the marks of
            the Crucified Christ. He tried never to let anyone see this and he never spoke of it, but it gave him both
            great pain and a great sense of privilege.
        </p>

        <p>
            He died in his 44th year in 1226 in his favourite place, a little chapel 4 miles outside of Assisi, called
            Our Lady of the Angels, surrounded by his brothers who were lost without him. However, they carried on his
            spirit, and are today spreading the same good news all over the world.
        </p>
    </>
);
