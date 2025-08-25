import { TimerIcon } from 'lucide-react';

import style from './Logo.module.css';

export function Logo() {
  return (
    <>
      <div className={style.logo}>
        <TimerIcon className={style.icon} />
        <h1>Chronos</h1>
      </div>
    </>
  );
}
