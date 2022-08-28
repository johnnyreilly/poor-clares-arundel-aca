import * as React from 'react';
import { Card, CardImg } from 'reactstrap';
import tiggers1 from './images/Tiggers1.jpg';
import tiggers2 from './images/Tiggers2.jpg';
import tiggers3 from './images/Tiggers3.jpg';
import tiggers4 from './images/Tiggers4.jpg';

export const photoGalleryPath = '/photo-gallery';

export const PhotoGallery: React.FC<React.PropsWithChildren<unknown>> = _props => (
    <>
        <h3>Photo Gallery of the Tigger Team</h3>

        <p>
            Just as much present to us during the making of this Documentary were the camera and sound teams – Sandi,
            Elizabeth, Rebecca, Mel and Helen. Sandi, Elizabeth and Rebecca had, in fact, stayed in our Enclosure before
            the filming started in order to get the feel of our life, and they immediately fitted in very well. While
            they were here they became known as the ‘Tiggers’, the diminutive form of the Company – Tiger Aspect
            Productions. We miss them and are always pleased to see them when they visit. Here are some pictures of them
            at work:
        </p>

        <Card className="float-left">
            <CardImg top src={tiggers1} style={{ maxWidth: '500px' }} />
        </Card>

        <Card className="float-left">
            <CardImg top src={tiggers2} style={{ maxWidth: '500px' }} />
        </Card>

        <Card className="float-left">
            <CardImg top src={tiggers3} style={{ maxWidth: '500px' }} />
        </Card>

        <Card className="float-left">
            <CardImg top src={tiggers4} style={{ maxWidth: '500px' }} />
        </Card>
    </>
);
