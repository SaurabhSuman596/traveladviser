import { Stack } from '@mui/system';
import Header from './components/Header';
import Map from './components/Map';
import Card from './components/Card';
import './components/globalComp.css';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <div className="App">
      <Header />
      <Stack
        direction={{ xs: 'column-reverse', sm: 'row' }}
        spacing={2}
        justifyContent="space-between"
        p={2}
      >
        <div className="cardBox">
          <Dropdown />
          <Card />
        </div>

        <Map />
      </Stack>
    </div>
  );
}

export default App;
