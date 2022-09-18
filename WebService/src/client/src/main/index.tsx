import * as React from 'react';
import { Container } from 'reactstrap';
import { Route, RouteComponentProps, Switch, Redirect } from 'react-router-dom';
import { Menu } from './Menu';
import { Us, usPath } from './Us';
import { OurPrayer, ourPrayerPath } from './our-life/OurPrayer';
import { OurWork, ourWorkPath } from './our-life/OurWork';
import { OurShop, ourShopPath } from './our-life/OurShop';
import { SisterAnn, sisterAnnPath } from './community/SisterAnn';
import { SisterClareAgnes, sisterClareAgnesPath } from './community/SisterClareAgnes';
import { SisterClareRuva, sisterClareRuvaPath } from './community/SisterClareRuva';
import { SisterGabriel, sisterGabrielPath } from './community/SisterGabriel';
import { SisterGraca, sisterGracaPath } from './community/SisterGraca';
import { SisterJoseph, sisterJosephPath } from './community/SisterJoseph';
import { SisterMaria, sisterMariaPath } from './community/SisterMaria';
import { Interviews, interviewsPath } from './community/Interviews';
import { Arundel, arundelPath } from './community/Arundel';
import { ClaresStory, claresStoryPath } from './beginnings/ClaresStory';
import { ClaresThoughts, claresThoughtsPath } from './beginnings/ClaresThoughts';
import { ClaresPrayers, claresPrayersPath } from './beginnings/ClaresPrayers';
import { FrancisLife, francisLifePath } from './beginnings/FrancisLife';
import { FrancisThoughts, francisThoughtsPath } from './beginnings/FrancisThoughts';
import { FrancisPrayers, francisPrayersPath } from './beginnings/FrancisPrayers';
import { Events, eventsPath } from './Events';
import { FAQs, faqsPath } from './misc/FAQs';
import { Links, linksPath } from './misc/Links';
import { Glossary, glossaryPath } from './misc/Glossary';
import { Addresses, addressesPath } from './misc/Addresses';
import { Vocation, vocationPath } from './community/Vocation';
import { Kenya, kenyaPath } from './community/Kenya';
import { PrayerRequests, prayerRequestsPath } from './PrayerRequests';
import { LightForTheWorld, lightForTheWorldPath } from './LightForTheWorld';

type Props = RouteComponentProps<{}>;

const Main: React.FC<React.PropsWithChildren<Props>> = props => (
    <>
        <Menu location={props.location.pathname} />
        <Container>
            <Switch>
                <Route path={usPath} component={Us} />
                <Route path={ourPrayerPath} component={OurPrayer} />
                <Route path={ourWorkPath} component={OurWork} />
                <Route path={ourShopPath} component={OurShop} />
                <Route path={sisterAnnPath} component={SisterAnn} />
                <Route path={sisterClareAgnesPath} component={SisterClareAgnes} />
                <Route path={sisterClareRuvaPath} component={SisterClareRuva} />
                <Route path={sisterGabrielPath} component={SisterGabriel} />
                <Route path={sisterGracaPath} component={SisterGraca} />
                <Route path={sisterJosephPath} component={SisterJoseph} />
                <Route path={sisterMariaPath} component={SisterMaria} />
                <Route path={vocationPath} component={Vocation} />
                <Route path={interviewsPath} component={Interviews} />
                <Route path={arundelPath} component={Arundel} />
                <Route path={kenyaPath} component={Kenya} />
                <Route path={claresStoryPath} component={ClaresStory} />
                <Route path={claresThoughtsPath} component={ClaresThoughts} />
                <Route path={claresPrayersPath} component={ClaresPrayers} />
                <Route path={francisLifePath} component={FrancisLife} />
                <Route path={francisThoughtsPath} component={FrancisThoughts} />
                <Route path={francisPrayersPath} component={FrancisPrayers} />
                <Route path={eventsPath} component={Events} />
                <Route path={faqsPath} component={FAQs} />
                <Route path={linksPath} component={Links} />
                <Route path={glossaryPath} component={Glossary} />
                <Route path={addressesPath} component={Addresses} />
                <Route path={prayerRequestsPath} component={PrayerRequests} />
                <Route path={lightForTheWorldPath} component={LightForTheWorld} />
                <Redirect to="/" />
            </Switch>
        </Container>
    </>
);

export default Main;
