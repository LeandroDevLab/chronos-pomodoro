import { TimerIcon } from 'lucide-react';

import './styles/theme.css';
import './styles/global.css';

import { Fragment } from 'react/jsx-runtime';
import { Heading } from './components/Heading';

export function App() {
  console.log('Oi');

  return (
    // o React Fragment me permite adicionar vários elementos irmãos, pois sem ele seriam todos "pais",
    //pode ser com ou sem o nome Fragment
    <Fragment>
      <Heading>
        Olá Leandro
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>Vai funcionar com um HTML normal, mas com o poder bombadão do JS.</p>
    </Fragment>
  );
}

// export { App };
// export default App; //permite chamar de qualquer nome no import
