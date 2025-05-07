import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'My Workflow',
    description: (
      <>
        This doc follows my personal avatar setup workflow, focusing on getting avatars from Booth.pm 
        into VRChat quickly and easily using VCC, Alcom, Modular Avatar, and Poiyomi.
      </>
    ),
  },
  {
    title: 'Step-by-Step Process',
    description: (
      <>
        Clear instructions from importing Booth avatars to finalizing them for upload to VRChat.
      </>
    ),
  },
  {
    title: 'Customize as You Go',
    description: (
      <>
        Once comfortable, explore advanced customization like adding toggles, outfits, and more.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
