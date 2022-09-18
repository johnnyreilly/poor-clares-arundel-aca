import * as React from 'react';
import { Card, CardImg } from 'reactstrap';
import shop from './images/shop.jpg';
import statues from './images/olivewood_statue_selection.jpg';

export const ourShopPath = '/our-shop';

export const OurShop: React.FC<React.PropsWithChildren<unknown>> = _props => (
    <>
        <h3>Our Shop</h3>

        <p>We have a small shop which you are very welcome to visit.</p>

        <Card>
            <CardImg src={shop} />
        </Card>

        <Card>
            <CardImg src={statues} />
        </Card>
    </>
);
