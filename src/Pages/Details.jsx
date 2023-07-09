import { useContext, useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const Details = () => {
  const { AppState } = useContext(AppContext);
  const { continent, country, destination } = useParams();
  const [currentDestination, setCurrentDestination] = useState();

  useEffect(() => {
    setCurrentDestination(
      AppState.continents
        .find((cont) => cont.id.toString() === continent)
        .countries.find((count) => count.id.toString() === country)
        .destinations.find((count) => count.id.toString() === destination)
    );
  }, []);

  return (
    <div className='text-center'>
      <h2 className='text-info'>
        Top Countries in {currentDestination && currentDestination.name} for
        your next holiday.
      </h2>
      <div className='row py-5'>
        {currentDestination &&
          currentDestination.destinations.map((destination) => (
            <div key={destination.id} className='col'>
              <NavLink to={`/${continent}/${country}/${destination.id}`}>
                <div
                  className='card d-flex flex-column justify-content-end p-5 text-white'
                  style={{
                    backgroundImage: `url('${destination.image}')`,
                    backgroundSize: 'cover',
                    height: '300px',
                  }}
                >
                  <i className='bi bi-geo-alt-fill'></i> {destination.name}
                </div>
              </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Details;
