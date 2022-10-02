import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import house from './images/house.jpg';
// import lightForTheWorldSmall from './images/light-for-the-world-small.jpg';
// import oComeEmmanuelSmall from './images/o-come-emmanuel-small.jpg';
import styles from './index.module.css';
// import type { User } from '../interfaces'
// import useSwr from 'swr'
import Link from 'next/link'
import Script from 'next/script';

// const fetcher = (url: string) => fetch(url).then((res) => res.json())


// https://schema.org/CatholicChurch
const catholicChurchStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'CatholicChurch',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Crossbush, Arundel',
    postalCode: 'BN18 9PJ',
    streetAddress: 'Convent of Poor Clares',
  },
  email: 'arundel.poorclares@gmail.com',
  hasMap: 'https://goo.gl/maps/RYAL6WvbkAadDrTF9',
  telephone: '+441903882536',
  name: 'Convent of Poor Clares',
  description:
    'We are sisters, who share prayer, work, laughter and struggles, and live according to the Form of Life drawn up by St Clare of Assisi in 1253.',
  image: house.src,
};


export default function Index() {
  // const { data, error } = useSwr<User[]>('/api/users', fetcher)

  // if (error) return <div>Failed to load users</div>
  // if (!data) return <div>Loading...</div>

  return (
    <>
      {/* <script type="application/ld+json">{JSON.stringify(catholicChurchStructuredData)}</script> */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catholicChurchStructuredData) }}
      />
      <div className="text-center">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header className="masthead mb-auto">
            <div className="inner">
              <h2 className="masthead-brand">Welcome to the Poor Clares of Arundel</h2>
            </div>
          </header>

          <main role="main" className="inner cover">
            {/* {new Date().getMonth() !== 11 ? (
                            <Link to="/light-for-the-world" title="We made an album...">
                                <Image
                                    id="light-of-the-world"
                                    src={lightForTheWorldSmall}
                                    alt="We made an album..."
                                    className="img-fluid img-rounded"
                                />
                            </Link>
                        ) : (
                            <Link to="/light-for-the-world" title="We made a Christmas song...">
                                <Image
                                    id="o-come-emmanuel"
                                    src={oComeEmmanuelSmall}
                                    alt="We made an album..."
                                    className="img-fluid img-rounded"
                                />
                            </Link>
                        )} */}

            <Link href="/us" title="Learn more about us...">
              <Image
                id="house"
                src={house}
                alt="Click here to enter..."
                className={`img-fluid img-rounded ${styles.house}`}
              />
            </Link>
            <p className="lead">
              We are sisters, who share prayer, work, laughter and struggles,
              <br />
              and live according to the Form of Life drawn up by St Clare of Assisi in 1253.
            </p>
            <p className="lead">
              <Link href="/us">Learn more about us...</Link>
            </p>
          </main>

          <footer className={`mastfoot mt-auto ${styles.footer}`}>
            <div className="inner">
              <p>
                © Community of Poor Clares, Arundel 2014-{new Date().getFullYear()}
                <br /> Convent of Poor Clares, Crossbush, Arundel, BN18 9PJ
              </p>
              <p>
                <a href="mailto:arundel.poorclares@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} /> arundel.poorclares@gmail.com
                </a>{' '}
                <a href="https://www.facebook.com/poorclaresarundel">
                  <FontAwesomeIcon icon={faFacebook} /> Facebook
                </a>
              </p>
            </div>
          </footer>
        </div>
      </div>
      {/* <ul>
        {data.map((user) => (
          <li key={user.id}>
            <Link href="/user/[id]" as={`/user/${user.id}`}>
              {`User ${user.id}`}
            </Link>
          </li>
        ))}
      </ul> */}
    </>
  )
}

/*
<script type="application/ld+json">{&quot;@context&quot;:&quot;https://schema.org&quot;,&quot;@type&quot;:&quot;CatholicChurch&quot;,&quot;address&quot;:{&quot;@type&quot;:&quot;PostalAddress&quot;,&quot;addressLocality&quot;:&quot;Crossbush, Arundel&quot;,&quot;postalCode&quot;:&quot;BN18 9PJ&quot;,&quot;streetAddress&quot;:&quot;Convent of Poor Clares&quot;},&quot;email&quot;:&quot;arundel.poorclares@gmail.com&quot;,&quot;hasMap&quot;:&quot;https://goo.gl/maps/RYAL6WvbkAadDrTF9&quot;,&quot;telephone&quot;:&quot;+441903882536&quot;,&quot;name&quot;:&quot;Convent of Poor Clares&quot;,&quot;description&quot;:&quot;We are sisters, who share prayer, work, laughter and struggles, and live according to the Form of Life drawn up by St Clare of Assisi in 1253.&quot;,&quot;image&quot;:&quot;/_next/static/media/house.56c94a4c.jpg&quot;}</script>
<script type="application/ld+json">{"@context":"https://schema.org","@type":"CatholicChurch","address":{"@type":"PostalAddress","addressLocality":"Crossbush, Arundel","postalCode":"BN18 9PJ","streetAddress":"Convent of Poor Clares"},"email":"arundel.poorclares@gmail.com","hasMap":"https://goo.gl/maps/RYAL6WvbkAadDrTF9","telephone":"+441903882536","name":"Convent of Poor Clares","description":"We are sisters, who share prayer, work, laughter and struggles, and live according to the Form of Life drawn up by St Clare of Assisi in 1253.","image":"/_next/static/media/house.56c94a4c.jpg"}</script>
*/