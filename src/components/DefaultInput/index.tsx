type DefaultInputProps = {
  //type: 'text' | 'number' | 'search'; //criar types para ficar mais seguro
  id: string;
  labelText?: string; //? para informar que pode ou não inseir, não é obrigatório
} & React.ComponentProps<'input'>;

import styles from './styles.module.css';

export function DefaultInput({
  type,
  labelText,
  id,
  ...rest //adicionando como propriedade todos os opicionais
}: DefaultInputProps) {
  return (
    <>
      {/* if ternario verdadeiro ou falso */}
      {/* labelText ? <label htmlFor={id}>{labelText}</label> : '' */}
      {/* condição se verdadeiro faça */}
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={styles.defaultinput} id={id} type={type} {...rest} />
    </>
  );
}
