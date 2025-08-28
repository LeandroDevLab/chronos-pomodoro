import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';

export function App() {
  console.log('Oi');

  return (
    // o React Fragment me permite adicionar vários elementos irmãos, pois sem ele seriam todos "pais",
    //pode ser com ou sem o nome Fragment
    <>
      <Container>
        <Logo>Chronos</Logo>
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action='#'>
          <div className='formRow'>
            <DefaultInput
              id='meuInput'
              type='text'
              labelText='task'
              title='TITULO'
              placeholder='Digite tarefa'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}

// export { App };
// export default App; //permite chamar de qualquer nome no import
