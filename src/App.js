import BasicStateManagement from './components/BasicStateManagement';
import FunctionalStateManagement from './components/FunctionalStateManagement';
import FunctionalVsBasicStateManagement from './components/FunctionalVsBasicStateManagement';
import ArrayStateManagement from './components/ArrayStateManagement';

function App() {
  return (
    <div>
      <BasicStateManagement></BasicStateManagement>
      <FunctionalStateManagement></FunctionalStateManagement>
      <FunctionalVsBasicStateManagement></FunctionalVsBasicStateManagement>
      <ArrayStateManagement></ArrayStateManagement>
    </div>
  );
}

export default App;
