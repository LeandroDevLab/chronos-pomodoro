import { TimerIcon, Dumbbell } from 'lucide-react';

import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/Heading';

export function App() {
  console.log('Oi');

  return (
    // o React Fragment me permite adicionar vários elementos irmãos, pois sem ele seriam todos "pais",
    //pode ser com ou sem o nome Fragment
    <>
      <div className='container'>
        <div className='content'>
          <section>LOGO</section>
        </div>
      </div>

      <div className='container'>
        <div className='content'>
          <section>MENU</section>
        </div>
      </div>

      <div className='container'>
        <div className='content'>
          <section>FORM</section>
        </div>
      </div>

      <div className='container'>
        <div className='content'>
          <section>FOOTER</section>
        </div>
      </div>

      <Heading>
        Olá Leandro
        <button>
          <TimerIcon />
          <Dumbbell />
        </button>
      </Heading>
    </>
  );
}

// export { App };
// export default App; //permite chamar de qualquer nome no import
