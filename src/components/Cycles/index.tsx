import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { randomNumber } from '../../utils/randomNumber';
import styles from './styles.module.css';

export function Cycles() {
  const { state } = useTaskContext();

  const cycleStep = Array.from({ length: state.currentCycle });

  const cycleDeescriptionMap = {
    workTime: 'foco',
    shortBreakTime: 'descanço curto',
    longBreakTime: 'descanço longo',
  };
  console.log(cycleStep);
  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>

      <div className={styles.cycleDots}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={`${nextCycleType}_${randomNumber()}`}
              className={`${styles.cycleBall} ${styles[nextCycleType]}`}
              aria-label={`Indicador de ciclo de ${cycleDeescriptionMap[nextCycleType]}`}
              title={`Indicador de ciclo de ${cycleDeescriptionMap[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
