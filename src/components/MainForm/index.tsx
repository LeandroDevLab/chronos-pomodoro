import styles from './styles.module.css';

import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import type { TaskModel } from '../../models/TaskModel';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

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
      duration: state.config[nextCycleType],
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
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining), //fazer em função a parte
        tasks: [...prevState.tasks, newTask], // espalhando o array anterior e adicionando a newTask
      };
    });
  }

  function handleInterruptTask(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault(); // uma forma de prevenir que o botão não submeta, mesmo que o React tente

    setState(prevState => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00', //fazer em função a parte
        tasks: prevState.tasks.map(task => {
          if (prevState.activeTask && prevState.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
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
            disabled={!!state.activeTask}
          />
        </div>

        <div className={styles.formRow}>
          <p>Próximo intervalo é de: </p>
        </div>

        {state.currentCycle > 0 && (
          <div className={styles.formRow}>
            <Cycles />
          </div>
        )}

        <div className={styles.formRow}>
          {/* 
          Outra forma de evitar submeter mesmo com type='button'
          -> usar duas condições separadas 
          !state.activeTask && ... e !!state.activeTask && ...*/}
          {!state.activeTask && (
            <DefaultButton
              aria-label='Iniciar nova tarefa'
              title='Iniciar nova tareta'
              type='submit'
              icon={<PlayCircleIcon />}
              color='green'
              key='button_submit_task' // ou usar key='React entender que são diferentes'
            />
          )}

          {!!state.activeTask && (
            <DefaultButton
              aria-label='Iniciar nova tarefa'
              title='Iniciar nova tareta'
              type='button'
              icon={<StopCircleIcon />}
              color='red'
              key='button_button_task' // ou usar key='React entender que são diferentes'
              onClick={handleInterruptTask}
            />
          )}
        </div>
      </form>
    </>
  );
}
