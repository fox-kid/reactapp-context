import { FontColorContextProvider } from './context/FontColorContext';

import RainbowBox from './components/RainbowBox';
import FontSizeText from './components/FontSizeText';
import './App.css';

const App = () => {
  return (
    <FontColorContextProvider>
      <main className='container'>
        <RainbowBox />
        <FontSizeText />
      </main>
    </FontColorContextProvider>
  );
}

export default App;
