import styles from './styles.module.css';

type DefaultButtonProps = {
  icon: React.ReactNode; //qualquer tipo que react renderiza
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

export function DefaultButton({
  icon,
  color = 'green',
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.defaultbutton} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
