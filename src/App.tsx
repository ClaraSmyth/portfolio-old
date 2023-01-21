import { Home, Projects, About } from './components';
import background from './assets/stacked-waves-haikei.svg';

function App() {
  return (
    <div
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="App"
    >
      <Home />
      <Projects />
      <About />
    </div>
  );
}

export default App;
