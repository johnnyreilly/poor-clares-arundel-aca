import * as React from 'react';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';
import sanDamianoCrucifix from './images/SanDamianoCrucifix.jpg';
import francisAndClare from './images/FrancisAndClare.jpg';
import francisCutsClaresHair from './images/FrancisCutsClaresHair.jpg';
import stClare from './images/StClare.jpg';
import churchSanDamiano from './images/ChurchSanDamiano.jpg';

export const claresStoryPath = '/beginnings-clares-story';

export const ClaresStory: React.FC<React.PropsWithChildren<unknown>> = _props => (
    <>
        <Card className="float-left">
            <CardImg top src={sanDamianoCrucifix} />
        </Card>

        <h3>The Story of Clare</h3>

        <p>This is the Cross in our chapel.</p>

        <p>It is a replica of the one that Saint Francis heard speak to him in Assisi in 1206.</p>

        <p>It was in Saint Clare’s Convent all her lifetime. She was a friend and contemporary of Francis.</p>

        <p>Together they founded the Poor Clares.</p>

        <Card className="float-right">
            <CardImg top src={francisAndClare} />
            <CardBody>St Clare, St Francis</CardBody>
        </Card>

        <p>
            “Most High Glorious God, enlighten the darkness of my heart and give me Lord a correct faith, a certain
            hope, a perfect love, sense and knowledge so that I may carry out your holy and true command.”
        </p>

        <p>Prayer of St Francis before the Crucifix</p>

        <p>
            The life of a Poor Clare Sister is rooted in the love God the Father showed her when his Son, Jesus, was
            born into our human family.
        </p>

        <p>
            St Francis of Assisi discovered this love as he was praying in front of the San Damiano Crucifix. From then
            on he became free from all the things that had been false in his life, free to become himself, and above
            all, free to give himself to Jesus, who had given himself totally for him.
        </p>

        <p>
            He did not keep this treasure to himself, but with great joy and fire he spoke about the Good News of
            Christ’s love with everyone he met.
        </p>

        <h3>Enter Clare di Offeduccio di Faverone</h3>

        <Card className="float-right">
            <CardImg top src={francisCutsClaresHair} />
            <CardBody>Francis cuts Clares hair</CardBody>
        </Card>

        <p>
            One of those who heard Francis speaking in the Cathedral of Assisi was a young noble girl of about 16 called
            Clare. She had already received the faith from the teaching and example of her mother, and had begun to live
            the Christian life as well as she knew how, by praying and helping the poor. But to hear Francis was
            something else altogether! She longed to talk with him, and eventually they met secretly and Francis
            instructed her in the ways of the gospel with such freshness and fire that all she wanted was to give
            herself to Christ as Francis had done – in love and in poverty.
        </p>

        <p>
            On the night of Palm Sunday 1212 she fled to join Francis and his brothers in the chapel of St Mary of the
            Angels. There Francis cut off her hair as a sign of her commitment and received her promise of obedience.
            After some uncertainty, she went to live at San Damiano, outside Assisi, and was soon joined by other young
            women from all levels of society. To the end of her life she considered her community to be one group with
            the Friars Minor.
        </p>

        <p>
            She was the first woman to write a Rule for other women. It was so broad and wise that it still works well
            today. She died in 1253 and was proclaimed a saint in 1255.
        </p>

        <Card className="float-left">
            <CardImg src={stClare} />
            <CardBody>
                <CardText>St Clare</CardText>
            </CardBody>
        </Card>

        <p>
            What was new in Clare’s vision? It was the idea of exchange. Everything she and her sisters made or grew
            they gave to others, and others in turn gave to the sisters. In this way they really shared the lives and
            poverty of those around them. This idea came to both Francis and Clare from the way that Jesus Christ shared
            our human life, and lived in poverty too. They felt that the fewer things they had the more room they had
            for God in their hearts.
        </p>

        <p>
            She had many struggles with the Church about wanting to be totally poor and dependent on God. The Pope and
            bishops did not want her to be the original and determined figure that she was.
        </p>

        <p>This is the tiny church of San Damiano. Built before the year 1000, St Francis restored it in 1206.</p>

        <Card className="float-right">
            <CardImg src={churchSanDamiano} />
            <CardBody>
                <CardText>The Church of San Damiano</CardText>
            </CardBody>
        </Card>

        <p>
            It was in this chapel, when he was 24 years old, that St Francis heard a voice from the Crucifix calling him
            to “Rebuild my Church.”
        </p>

        <p>
            It was here in 1212 that St Francis led Clare to begin the Order of the “Poor Ladies”. Clare remained there
            for 42 years, loving Christ in poverty and following in his footsteps. There were times when as many as 50
            sisters joined Clare’s way of life.
        </p>
    </>
);
