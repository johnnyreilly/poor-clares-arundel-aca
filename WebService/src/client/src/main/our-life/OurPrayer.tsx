import * as React from 'react';
import { Link } from 'react-router-dom';
import prayerOur1 from './images/prayerOur1.jpg';
import prayerOur2 from './images/prayerOur2.webp';
import prayerOur3 from './images/prayerOur3.webp';
import { prayerRequestsPath } from '../PrayerRequests';

export const ourPrayerPath = '/our-prayer';

export const OurPrayer: React.FC<React.PropsWithChildren<unknown>> = _props => (
    <>
        <h3>Our Prayer</h3>
        <img className="float-right img-thumbnail img-space-right-and-bottom" src={prayerOur2} alt="Helen sitting in the cemetary" />

        <p>Our life of prayer falls into three natural parts. These are:</p>

        <p>
            The Prayer of the Church, which is sometimes called the Divine Office and which punctuates our day with
            hymns, psalms and spiritual canticles, as St Paul recommended.
        </p>

        <p>
            Our personal prayer time alone with God. There are two hours set aside for this each day though our hope is
            that our whole day can be filled with prayer.
        </p>

        <p>
            Our specific intercession for the needs of the Church, of our friends and those who contact us asking us to
            support them with our prayer. This takes place specifically at Morning and Evening Prayer and at many
            private moments throughout the day.
        </p>

        <h3>Our usual timetable</h3>
        <img className="float-right img-thumbnail img-space-right-and-bottom" src={prayerOur3} alt="ikon of Clare washing the sisters feet" />

        <ul>
            <li>5.30 Rise. A quick breakfast followed by time for personal prayer, reading, study until 7.30</li>

            <li>7.30 Morning Prayer, the Prayer of Praise to God followed by Spiritual reading.</li>

            <li>
                8.30 Holy Mass  (Mondays and Wednesdays, other days usually a Liturgy of the Word) followed by the Office of the Passion (A short Prayer written by Francis of Assisi) and
                then work until 11.50
            </li>

            <li>
                12 Noon The Office of Readings – a time of prayer composed of some psalms and two readings, one from
                Scripture and one from a Christian teacher or saint. These nourish our spirits for the day.
            </li>

            <li>12.30 Dinner; followed by a short Office, then some free time until 2.15</li>

            <li>
                2.15 back to work with a tea break at 3.30 and a short prayer together in the refectory at 4.00 to
                sanctify our work
            </li>

            <li>5.50 Evening Prayer</li>

            <li>6.30 Supper followed by an hour of personal prayer time until 8 pm.</li>

            <li>8.00 Compline or Night Prayer, which closes the day.</li>
        </ul>

        <p>
            Wednesday evening and Thursday morning there is no Office celebrated in public, the sisters have a ‘hermit’
            space, each praying alone.
        </p>

        <h3>Holy Mass</h3>

        <p>Weekday Mass is usually at 8.30am (Mondays and Wednesdays). Vigil Mass for Sunday is at 6.00pm Saturday preceded by Evening Prayer at 5.15pm.</p>

        <h4>Other forms of prayer</h4>

        <p>Sunday afternoons we usually have Exposition of the Blessed Sacrament at 4.30pm.</p>

        <p>
            Christian Meditation (John Main) group: Tuesday evenings, c.7pm - 8.30pm.
            <br />
            Each meeting includes a short (taped) talk and 30 minutes of silent centering prayer. All are welcome, from
            any prayer tradition. There are usually 10 - 15 people each week.
        </p>

        <p>
            Taize style prayer meeting: last Friday of each month (except December), c.7.15pm – 8.30pm. All are welcome.
        </p>

        <img className="float-right img-thumbnail img-space-right-and-bottom" src={prayerOur1} alt="" />
        <h3>Prayer Requests</h3>

        <p>If you would like to ask the community to pray for a special intention <Link to={prayerRequestsPath}>mail us a prayer request</Link>.</p>

        <p>Although you may only receive a standardised reply, you can be confident that we will indeed pray.</p>
    </>
);
