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
    DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Container from 'reactstrap/lib/Container';
import './Menu.css';
import { whyPath } from './Why';
import { angelaPath } from './seekers/Angela';
import { debiPath } from './seekers/Debi';
import { ionaPath } from './seekers/Iona';
import { vikPath } from './seekers/Vik';
import { producersCommentsPath } from './production-team/ProducersComments';
import { photoGalleryPath } from './production-team/PhotoGallery';
import { guidedPrayerPath } from './GuidedPrayer';

interface IProps {
    conventRootPath: string;
}

const initialState = {
    isOpen: false
};

export class Menu extends React.Component<IProps, typeof initialState> {
    state = initialState;

    toggle = () =>
        this.setState(() => ({
            isOpen: !this.state.isOpen
        }));

    render() {
        const { conventRootPath } = this.props;
        return (
            <>
                <div className="header-image header-image-the-convent" />

                <Navbar dark className="bg-primary" expand="md">
                    <Container>
                        <Link to={conventRootPath} className="navbar-brand">The Convent</Link>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <Link className="nav-link" to={`${conventRootPath}${whyPath}`}>
                                        Why
                                    </Link>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Seekers
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <Link to={`${conventRootPath}${angelaPath}`}>Angela</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={`${conventRootPath}${debiPath}`}>Debi</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={`${conventRootPath}${ionaPath}`}>Iona</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={`${conventRootPath}${vikPath}`}>Vik</Link>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Production Team
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <Link to={`${conventRootPath}${producersCommentsPath}`}>Producer's Comments</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={`${conventRootPath}${photoGalleryPath}`}>Photo Gallery</Link>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <Link className="nav-link" to={`${conventRootPath}${guidedPrayerPath}`}>
                                        Guided Prayer
                                    </Link>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link className="nav-link" to="/">
                                        Back to main site
                                    </Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}
