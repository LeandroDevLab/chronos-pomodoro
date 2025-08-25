import styles from './styles.module.css';

type ContainerProps = {
  children: React.ReactNode;
};

import { Fragment } from 'react/jsx-runtime';

export function Container({ children }: ContainerProps) {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
      </div>
    </Fragment>
  );
}
