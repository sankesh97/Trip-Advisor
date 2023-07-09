import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { NavLink } from 'react-router-dom';

const ContinentsListing = () => {
  const { AppState } = useContext(AppContext);
  return (
    <div className='text-center'>
      <h1>Welcome to Trip Advisor</h1>
      <h2 className='text-info'>Top Continents for your next holiday.</h2>
      <div className='row py-5'>
        {AppState &&
          AppState.continents.map((continents) => (
            <div key={continents.id} className='col'>
              <NavLink to={`/${continents.id}`}>
                <div
                  className='card d-flex flex-column justify-content-end p-5 text-white'
                  style={{
                    backgroundImage: `url('${continents.image}')`,
                    backgroundSize: 'cover',
                    height: '300px',
                  }}
                >
                  <i className='bi bi-geo-alt-fill'></i> {continents.name}
                </div>
              </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
};
export default ContinentsListing;
