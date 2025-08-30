import styles from './styles.module.css';

import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useState } from 'react';

export function MainForm() {
  const [taskName, setTaskName] = useState('');

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Deu Certo!', taskName);
  }

  /* function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.target;
    console.log(e)
    }) 
  }*/

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
            value={taskName}
            onChange={e => {
              //console.log(e.target.value); // o target é o próprio input
              setTaskName(e.target.value); // vai setar todo o conteúdo digitado para o taskName
            }}
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
