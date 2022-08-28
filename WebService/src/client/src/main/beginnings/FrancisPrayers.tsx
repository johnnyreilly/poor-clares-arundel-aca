import * as React from 'react';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';
import statue from './images/Statue.jpg';

export const francisPrayersPath = '/beginnings-francis-prayers';

export const FrancisPrayers: React.FC<React.PropsWithChildren<unknown>> = _props => (
    <>
        <Card className="float-right">
            <CardImg top src={statue} />
            <CardBody><CardText>St Francis the Poor Man of God</CardText></CardBody>
        </Card>

        <h3>St Francis of Assisi – His Prayers</h3>

        <h4>A Praising Prayer - Letter to the Entire Order</h4>

        <p>
            Almighty, eternal, just and merciful God grant us in our frailty the grace to do for you alone what we know
            you want us to do and always to desire what pleases you. Thus, inwardly cleansed, interiorly enlightened and
            inflamed by the fire of the Holy Spirit may we be able to follow in the footprints of your beloved Son, our
            Lord Jesus Christ. And, by your grace alone, may we make our way to you, Most High, who live and rule in
            perfect Trinity and simple Unity, and are glorified God all-powerful for ever and ever. Amen.
        </p>

        <h4>Prayer to realize the goodness of God</h4>

        <p>
            All powerful, most holy, most high and supreme God; all good, supreme good, totally good, You who alone are
            good, may we give you all praise, all glory, all thanks, all honour, all blessing and all good things. So be
            it, so be it, Amen.
        </p>

        <h4>Francis’ image of God - Parchment given to Brother Leo.</h4>

        <p>
            You are, O Lord our God, the only God.
            <br />
            How holy you are.
            <br />
            There is no one else who works such wonders.
            <br />
            You are strong, mighty,
            <br />
            above all and all powerful.
        </p>

        <p>
            You are the Father so holy,
            <br />
            King of heaven and king of earth. <br />
            You are three and you are one, GOD. You are good: each good and the greatest good.
            <br />
            The only God, the true God.
        </p>

        <p>
            You are love and charity
            <br />
            Wisdom and humility,
            <br />
            Patience and beauty,
            <br />
            Peace and safety.
        </p>

        <p>
            You are quietness, you are joy,
            <br />
            You are our hope and our gladness.
            <br />
            You are justice and judgment
            <br />
            You are our heart’s desire.
        </p>

        <p>
            You - our gentleness and our Protector,
            <br />
            Our Guardian and our defender,
            <br />
            Our Refuge and our strength.
        </p>

        <p>
            You, you are our faith, our hope and our charity,
            <br />
            Our great tenderness – you are unlimited goodness,
            <br />
            Vast and wonderful.
            <br />O Lord, O my God, Almighty and merciful, O Saviour.
        </p>

        <h4>Encouragement to give oneself to God</h4>

        <p>
            Look at the humility of God! and pour out your hearts before him. Humble yourselves, as well, that you may
            be exalted by him. Therefore Hold back nothing of yourselves for yourselves So that He who gives himself
            totally to you may receive you totally.
        </p>
    </>
);
