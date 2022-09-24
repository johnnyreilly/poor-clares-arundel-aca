import * as React from 'react';

export const addressesPath = '/misc-addresses';

export const Addresses: React.FC<React.PropsWithChildren<unknown>> = _props => (
    <>
        <h3>Addresses of Poor Clare convents in the English Association</h3>

        <p>Please address all correspondence to the Mother Abbess.  For men, try <a href="/MiscLinks">the Friars</a></p>

        <h4>Arkley</h4>
        <address>
            <strong>Poor Clare Monastery</strong><br />
            102 Galley Lane<br />
            Arkley<br />
            Barnet<br />
            Herts<br />
            EN5 4AN
        </address>

        <h4>Arundel</h4>
        <address>
            <strong>Convent of Poor Clares</strong><br />
            Crossbush<br />
            Arundel<br />
            West Sussex<br />
            BN18 9PJ
        </address>

        <h4>Freeland (Anglican)</h4>
        <address>
            <strong>St Mary’s Convent</strong><br />
            Freeland<br />
            Witney<br />
            Oxon<br />
            OX8 8AJ
        </address>

        <h4>Hereford</h4>
        <address>
            <strong>The Poor Clare Monastery</strong><br />
            Much Birch<br />
            Hereford<br />
            HR2 8PS
        </address>

        <h4>Hollington</h4>
        <address>
            <strong>Poor Clare Community</strong><br />
            22 Upper Church Road<br />
            St Leonards-on-Sea<br />
            East Sussex TN37 7AS
        </address>

        <h4>Humbie</h4>
        <address>
            <strong>Mount Alvernia</strong><br />
            2 Humbie Mains<br />
            Humbie<br />
            East Lothian<br />
            EH36 5PW<br />
            Scotland
        </address>

        <h4>York</h4>
        <address>
            <strong>Poor Clares Monastery</strong><br />
            155 Main Street<br />
            Askham Bryan<br />
            York<br />
            YO23 3QS
        </address>
    </>
);
