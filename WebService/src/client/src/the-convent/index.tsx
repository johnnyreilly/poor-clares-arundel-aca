import * as React from 'react';
import { Container } from 'reactstrap';
import { Route, RouteComponentProps, Switch, Redirect } from 'react-router-dom';
import { Menu } from './Menu';
import { Home, homePath } from './Home';
import { Why, whyPath } from './Why';
import { Angela, angelaPath } from './seekers/Angela';
import { Debi, debiPath } from './seekers/Debi';
import { Iona, ionaPath } from './seekers/Iona';
import { Vik, vikPath } from './seekers/Vik';
import { ProducerComments, producersCommentsPath } from './production-team/ProducersComments';
import { PhotoGallery, photoGalleryPath } from './production-team/PhotoGallery';
import { GuidedPrayer, guidedPrayerPath } from './GuidedPrayer';

type Props = RouteComponentProps<{}>;

export default class TheConvent extends React.Component<Props> {
    public render() {
        const conventRootPath = this.props.match.path;
        return (
            <>
                <Menu conventRootPath={conventRootPath} />
                <Container>
                    <Switch>
                        <Route path={`${conventRootPath}${homePath}`} component={Home} />
                        <Route path={`${conventRootPath}${whyPath}`} component={Why} />
                        <Route path={`${conventRootPath}${angelaPath}`} component={Angela} />
                        <Route path={`${conventRootPath}${debiPath}`} component={Debi} />
                        <Route path={`${conventRootPath}${ionaPath}`} component={Iona} />
                        <Route path={`${conventRootPath}${vikPath}`} component={Vik} />
                        <Route path={`${conventRootPath}${producersCommentsPath}`} component={ProducerComments} />
                        <Route path={`${conventRootPath}${photoGalleryPath}`} component={PhotoGallery} />
                        <Route path={`${conventRootPath}${guidedPrayerPath}`} component={GuidedPrayer} />
                        <Redirect to={`${conventRootPath}${homePath}`} />
                    </Switch>
                </Container>
            </>
        );
    }
}
