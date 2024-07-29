import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://telegram.ncesk8.com">
            Chat with us
          </Link>
        </div>
        <br />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://facebook.ncesk8.com">
            Join Our Facebook Group
          </Link>
        </div>
        <br />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://instagram.ncesk8.com">
            Follow Us On Instagram
          </Link>
        </div>
        <br />
        <section className={styles.features} style={{ marginLeft: "auto", marginRight: "auto" }}>
          <div className="container" >
            <video autoPlay={true} loop={true} style={{ maxWidth: "50vw", maxHeight: "85vh" }}><source src="/img/video.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
          </div>
        </section>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
