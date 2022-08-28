import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Jumbotron } from 'reactstrap';
import communityAtPrayer from './images/Page2CommunityAtPrayer.jpg';
import prayingInChapel from './images/praying_in_chapel.jpg';
import coffeeTime from './images/coffee_time.jpg';
import librarian from './images/librarian.jpg';
import vegTeam from './images/veg_team.jpg';
import providenceGroup from './images/graca_and_yohanna.jpg';
import './Us.css';

const items = [
    {
        src: communityAtPrayer,
        caption: 'Called to a life of prayer'
    },
    {
        src: prayingInChapel,
        caption: 'we seek to live the Gospel'
    },
    {
        src: coffeeTime,
        caption: 'in and for'
    },
    {
        src: librarian,
        caption: 'our world of today.'
    },
    {
        src: vegTeam,
        caption: 'We share our lives'
    },
    {
        src: providenceGroup,
        caption: 'and all that we do.'
    }
];

export const usPath = '/us';

type Props = RouteComponentProps<{}>;

const defaultState = { activeIndex: 0 };

export class Us extends React.Component<Props, typeof defaultState> {
    animating = false;

    state = defaultState;

    onExiting = () => {
        this.animating = true;
    };

    onExited = () => {
        this.animating = false;
    };

    next = () => {
        if (this.animating) {
            return;
        }
        this.setState(prevState => {
            const nextIndex = prevState.activeIndex === items.length - 1 ? 0 : prevState.activeIndex + 1;
            return { activeIndex: nextIndex };
        });
    };

    previous = () => {
        if (this.animating) {
            return;
        }
        this.setState(prevState => {
            const nextIndex = prevState.activeIndex === 0 ? items.length - 1 : prevState.activeIndex - 1;
            return { activeIndex: nextIndex };
        });
    };

    goToIndex = (newIndex: number) => {
        if (this.animating) {
            return;
        }
        this.setState(() => ({ activeIndex: newIndex }));
    };

    render() {
        const { activeIndex } = this.state;

        const slides = items.map(item => {
            return (
                <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.src}>
                    <img src={item.src} alt={item.caption} />
                    <CarouselCaption captionText={''} captionHeader={item.caption} />
                </CarouselItem>
            );
        });

        return (
            <div className="row">
                <div className="col-lg-6 col-md-5 col-sm-3 col-xs-12">
                    <Jumbotron>
                        <h1 className="display-4">About Us</h1>
                        <p className="lead">
                            Called to a life of prayer we seek to live the Gospel in and for our world of today. We
                            share our lives and all that we do.
                        </p>
                        <hr className="my-2" />
                        <p>We are the Poor Clares of Arundel.</p>
                        <p className="lead">
                            <a className="btn btn-primary" href="http://youtu.be/u_RlaYfJGbc">
                                See a slideshow of us here...
                            </a>
                        </p>
                    </Jumbotron>
                </div>
                <div className="col-lg-6 col-md-7 col-sm-9 col-xs-12 carousel-container">
                    <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                    </Carousel>
                </div>
            </div>
        );
    }
}
