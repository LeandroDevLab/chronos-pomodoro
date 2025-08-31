import styles from './styles.module.css';

import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import type { TaskModel } from '../../models/TaskModel';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  //CICLOS
  const nextCycle = getNextCycle(state.currentCycle);
  //console.log(nextCycle); // já deixa engatilhado o nextCycle pela função do getNextCycle, que já foi chamado antes de 'submeter'

  //Tipo do ciclo
  const nextCycleType = getNextCycleType(nextCycle);

  //Submit
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 1,
      type: nextCycleType,
    };

    //duration em segundos
    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config }, //só para garantir que estou passando tudo de TaskStateModel
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining, //conferir
        formattedSecondsRemaining: '00:00', //fazer em função a parte
        tasks: [...prevState.tasks, newTask], // espalhando o array anterior e adicionando a newTask
      };
    });
  }

  return (
    <>
      <form onSubmit={handleCreateNewTask} className={styles.form} action=''>
        <div className={styles.formRow}>
          <DefaultInput
            id='meuInput'
            type='text'
            labelText='task'
            title='TITULO'
            placeholder='Digite tarefa'
            ref={taskNameInput}
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
