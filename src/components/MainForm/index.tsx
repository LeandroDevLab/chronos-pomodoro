import styles from './styles.module.css';

import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';

export function MainForm() {
  // Tudo que faço no navegador tem um evento, tentar pegar esse evento no
  // colocando a função em arrow fuction dentro do tsx para ver qual o nome
  // do evento
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Deu Certo!');
  }
  return (
    <>
      <form onSubmit={handleCreateNewTask} className={styles.form} action='#'>
        <div className={styles.formRow}>
          <DefaultInput
            id='meuInput'
            type='text'
            labelText='task'
            title='TITULO'
            placeholder='Digite tarefa'
          />
        </div>

        <div className={styles.formRow}>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className={styles.formRow}>
          <Cycles />
        </div>

        <div className={styles.formRow}>
          <DefaultButton icon={<PlayCircleIcon />} color='green' />
        </div>
      </form>
    </>
  );
}
