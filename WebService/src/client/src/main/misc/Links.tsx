import * as React from 'react';

export const linksPath = '/misc-links';

export const Links: React.FC<React.PropsWithChildren<unknown>> = _props => (
    <>
        <h3>Links</h3>

        <p>Below is a list of links to some of our fellow organisations:</p>

        <h4>Prayer</h4>
        <p>
            <a href="http://www.sacredspace.ie" target="_blank" rel="noopener noreferrer">
                www.sacredspace.ie
            </a>
        </p>
        <p>
            <a href="http://www.prayingeachday.org" target="_blank" rel="noopener noreferrer">
                www.prayingeachday.org
            </a>
        </p>

        <h4>Poor Clares</h4>
        <p>
            <a href="http://www.poorclaresedinburgh.org" target="_blank" rel="noopener noreferrer">
                Humbie
            </a>
        </p>

        <h4>Franciscan Men</h4>
        <p>
            <a href="http://www.ofm.org" target="_blank" rel="noopener noreferrer">
                Order of Friars Minor
            </a>
        </p>
        <p>
            <a href="http://www.ofmcap.org" target="_blank" rel="noopener noreferrer">
                Order of Friars Minor Capuchins
            </a>
        </p>
        <p>
            <a href="http://www.ciofs.org" target="_blank" rel="noopener noreferrer">
                Secular Franciscan Order
            </a>
        </p>

        <h4>Anglican Franciscans</h4>
        <p>
            <a href="http://www.franciscans.org.uk" target="_blank" rel="noopener noreferrer">
                www.franciscans.org.uk
            </a>
        </p>

        <h4>Vocations</h4>
        <p>
            <a href="http://www.ukvocation.org" target="_blank" rel="noopener noreferrer">
                www.ukvocation.org
            </a>
        </p>

        {/* <h4>Icons</h4>
        <p>
            <a href="http://www.sanctiangeli.org" target="_blank" rel="noopener noreferrer">
                www.sanctiangeli.org
            </a>
        </p> */}
    </>
);
