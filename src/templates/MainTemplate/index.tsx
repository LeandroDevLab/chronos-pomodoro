import { Container } from '../../components/Container';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Logo';

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
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

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
}

// export { App };
// export default App; //permite chamar de qualquer nome no import
