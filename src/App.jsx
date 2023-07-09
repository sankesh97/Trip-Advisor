import { Route, Routes } from 'react-router-dom';
import ContinentsListing from './Pages/ContinentsListing';
import CountryListing from './Pages/CountryListing';
import DestinationListing from './Pages/DestinationListing';
import Details from './Pages/Details';
import './App.css';

function App() {
  return (
    <div className='container p-5'>
      <Routes>
        <Route path='/' element={<ContinentsListing />} />
        <Route path='/:continent' element={<CountryListing />} />
        <Route path='/:continent/:country' element={<DestinationListing />} />
        <Route path='/:continent/:country/:destination' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
