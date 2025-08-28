import styles from './styles.module.css';

export function Cycles() {
  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>

      <div className={styles.cycleDots}>
        <span className={`${styles.cycleBall} ${styles.workTime}`}></span>
        <span className={`${styles.cycleBall} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cycleBall} ${styles.workTime}`}></span>
        <span className={`${styles.cycleBall} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cycleBall} ${styles.workTime}`}></span>
        <span className={`${styles.cycleBall} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cycleBall} ${styles.workTime}`}></span>
        <span className={`${styles.cycleBall} ${styles.longBreakTime}`}></span>
      </div>
    </div>
  );
}
