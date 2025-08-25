import styles from './Heading.module.css';

export function Heading(props) {
  console.log(props);
  return (
    <>
      <h1 className={styles.heading}>{props.children}</h1>;
      <p>
        `o atributo 1 é {props.attr} e o atributo 2 é {props.attr2}`
      </p>
    </>
  );
}
