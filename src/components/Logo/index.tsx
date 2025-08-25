import { TimerIcon } from 'lucide-react';

import styles from './styles.module.css';

type LogoProps = {
  children: React.ReactNode;
};

export function Logo({ children }: LogoProps) {
  return (
    <>
      <div className={styles.logo}>
        <a className={styles.logoLink} href='#'>
          <TimerIcon className={styles.icon} />
          <span>{children}</span>
        </a>
      </div>
    </>
  );
}
