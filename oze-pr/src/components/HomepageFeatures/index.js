import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Systemy fotowoltaiczne',
    description: (
      <>
        Projektowanie instalacji PV, analiza zasobów słonecznych,
        dobór komponentów i symulacja produkcji energii.
      </>
    ),
    link: '/docs/photovoltaic-systems',
  },
  {
    title: 'Systemy solarne termiczne',
    description: (
      <>
        Projektowanie instalacji solarnych, analiza zapotrzebowania na ciepło,
        dobór kolektorów i symulacja pracy systemu.
      </>
    ),
    link: '/docs/solar-thermal-systems',
  },
  {
    title: 'Systemy pomp ciepła',
    description: (
      <>
        Projektowanie instalacji gruntowych, analiza zasobów geotermalnych,
        dobór pomp ciepła i symulacja pracy systemu.
      </>
    ),
    link: '/docs/heat-pump-systems',
  },
  {
    title: 'Energetyka wiatrowa',
    description: (
      <>
        Projektowanie farm wiatrowych, analiza zasobów wiatrowych,
        dobór turbin i optymalizacja rozmieszczenia.
      </>
    ),
    link: '/docs/wind',
  },
];

function Feature({title, description, link}) {
  return (
    <div className={clsx('col col--3')}>
      <Link to={link} className={styles.featureCard}>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
