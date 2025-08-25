import { TimerIcon, Dumbbell } from 'lucide-react';

import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Container } from './components/Container';

export function App() {
  console.log('Oi');

  return (
    // o React Fragment me permite adicionar vários elementos irmãos, pois sem ele seriam todos "pais",
    //pode ser com ou sem o nome Fragment
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <section>MENU</section>
      </Container>

      <Container>
        <section>FORM</section>
      </Container>

      <Container>
        <section>FOOTER</section>
      </Container>

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
