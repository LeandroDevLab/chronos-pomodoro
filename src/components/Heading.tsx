import styles from './Heading.module.css';

export function Heading() {
  return (
    <>
      <h1 className={styles.heading}>Olá Mundo!</h1>
      <h1 className={`${styles.cyan} ${styles.heading}`}>
        Olá Mundo novamente!
      </h1>
      ;
    </>
  );
}
