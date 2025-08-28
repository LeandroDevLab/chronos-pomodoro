import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';
import { Heading } from './components/Heading';
import { useState } from 'react';

export function App() {
  const [numero, setNumero] = useState(0);

  function handleClick() {
    //Entendendo a diferença de useState com prevState e sem
    setNumero(prevState => prevState + 1);
    setNumero(prevState => prevState + 1);
    setNumero(prevState => prevState + 1); // retorna 3
    //setNumero(numero + 1);
    //setNumero(numero + 1);
    //setNumero(numero + 1); // retorna 1
  }

  return (
    // o React Fragment me permite adicionar vários elementos irmãos, pois sem ele seriam todos "pais",
    //pode ser com ou sem o nome Fragment
    <>
      <Container>
        <Heading>Número: {`${numero}`}</Heading>
        <DefaultButton icon='Aumentar' onClick={handleClick} />
      </Container>

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
              labelText={numero.toString()} // converter para string
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
            <DefaultButton icon={<PlayCircleIcon />} color='green' />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}

// export { App };
// export default App; //permite chamar de qualquer nome no import
