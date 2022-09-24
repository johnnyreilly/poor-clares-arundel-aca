import * as React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    // NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Container from 'reactstrap/lib/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
// import lifeInAConvent from '../static/Stylist_Life_in_a_convent.pdf';
import communityFoundationsHollington from '../static/communityFoundationsHollington.pdf';
import tripAroundGuestHouse from '../static/tripAroundGuestHouse.pdf';
import communityTripAroundHouse from '../static/communityTripAroundHouse.pdf';
import './Menu.css';
import { ourPrayerPath } from './our-life/OurPrayer';
import { ourShopPath } from './our-life/OurShop';
import { ourWorkPath } from './our-life/OurWork';
import { sisterAnnPath } from './community/SisterAnn';
import { sisterClareAgnesPath } from './community/SisterClareAgnes';
import { sisterClareRuvaPath } from './community/SisterClareRuva';
import { sisterGabrielPath } from './community/SisterGabriel';
import { sisterGracaPath } from './community/SisterGraca';
import { sisterJosephPath } from './community/SisterJoseph';
import { sisterMariaPath } from './community/SisterMaria';
import { interviewsPath } from './community/Interviews';
import { arundelPath } from './community/Arundel';
import { claresStoryPath } from './beginnings/ClaresStory';
import { claresThoughtsPath } from './beginnings/ClaresThoughts';
import { claresPrayersPath } from './beginnings/ClaresPrayers';
import { francisLifePath } from './beginnings/FrancisLife';
import { francisThoughtsPath } from './beginnings/FrancisThoughts';
import { francisPrayersPath } from './beginnings/FrancisPrayers';
import { eventsPath } from './Events';
import { faqsPath } from './misc/FAQs';
import { linksPath } from './misc/Links';
import { glossaryPath } from './misc/Glossary';
import { addressesPath } from './misc/Addresses';
import { vocationPath } from './community/Vocation';
import { kenyaPath } from './community/Kenya';
import { prayerRequestsPath } from './PrayerRequests';
// import { usPath } from './Us';
import { lightForTheWorldPath } from './LightForTheWorld';
import { homePath } from '../the-convent/Home';

// const theConventPath = 'the-convent';

const initialState = {
    isOpen: false
};

type Props = { location: string; } 

export class Menu extends React.Component<Props, typeof initialState> {
    state = initialState;

    componentDidUpdate(prevProps: Props) {
        if (this.props.location !== prevProps.location) {
            this.setState(() => ({
                isOpen: false
            }));
        }
      }

    toggle = () =>
        this.setState(() => ({
            isOpen: !this.state.isOpen
        }));

    render() {
        return (
            <>
                <div className="header-image header-image-main" />

                <Navbar dark className="bg-primary" expand="md">
                    <Container>
                        <Link className="navbar-brand" to={homePath}>Poor Clares</Link>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Our Life
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <Link to={ourPrayerPath}>Our prayer</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={ourWorkPath}>Our work</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={ourShopPath}>Our shop</Link>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <a href={tripAroundGuestHouse}>Trip around the guesthouse</a>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <a href={communityTripAroundHouse}>Trip around the house</a>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Community
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem header>Sister's stories</DropdownItem>
                                        <DropdownItem>
                                            <Link to={sisterAnnPath}>Sister Ann</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={sisterClareAgnesPath}>Sister Clare Agnes</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={sisterClareRuvaPath}>Sister Clare Ruva</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={sisterGabrielPath}>Sister Gabriel</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={sisterGracaPath}>Sister Graça</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={sisterJosephPath}>Sister Joseph</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={sisterMariaPath}>Sister Maria</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={interviewsPath}>Interviews with Sisters</Link>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <Link to={arundelPath}>Arundel Community</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={vocationPath}>Vocation</Link>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem header>Foundations</DropdownItem>
                                        <DropdownItem>
                                            <Link to={kenyaPath}>Kenya</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <a href={communityFoundationsHollington}>Hollington</a>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Beginnings
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <Link to={claresStoryPath}>Clares Story</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={claresThoughtsPath}>Clares Thoughts</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={claresPrayersPath}>Clares Prayers</Link>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <Link to={francisLifePath}>Francis Life</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={francisThoughtsPath}>Francis Thoughts</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={francisPrayersPath}>Francis Prayers</Link>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <Link className="nav-link" to={eventsPath}>
                                        Events
                                    </Link>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Misc
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <Link to={faqsPath}>FAQs</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={linksPath}>Links</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={glossaryPath}>Glossary</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={addressesPath}>Addresses</Link>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <Link className="nav-link" to={prayerRequestsPath}>
                                        Prayer Requests
                                    </Link>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                {/* <NavLink href={lifeInAConvent} title="The Stylist magazine wrote an article about us.">
                                    The Stylist
                                </NavLink>
                                <NavItem>
                                    <Link
                                        className="nav-link"
                                        to={theConventPath}
                                        title="The BBC made a television programme about us."
                                    >
                                        The Convent
                                    </Link>
                                </NavItem> */}
                                <NavItem>
                                    <Link
                                        className="nav-link"
                                        to={lightForTheWorldPath}
                                        title="We made an album..."
                                    >
                                        Light for the World
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <a className="nav-link" href="https://youtu.be/URlqwrgphRc">
                                        The Convent
                                    </a>
                                </NavItem>
                                <NavItem>
                                    <a className="nav-link" href="https://www.facebook.com/poorclaresarundel">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}
