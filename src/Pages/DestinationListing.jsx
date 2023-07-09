import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import { NavLink, useParams } from 'react-router-dom';

const DestinationListing = () => {
  const { AppState } = useContext(AppContext);
  const { continent, country } = useParams();
  const [currentCountry, setCurrentCountry] = useState();

  useEffect(() => {
    setCurrentCountry(
      AppState.continents
        .find((cont) => cont.id.toString() === continent)
        .countries.find((count) => count.id.toString() === country)
    );
  }, []);

  return (
    <div className='text-center'>
      <h2 className='text-info'>
        Top Countries in {currentCountry && currentCountry.name} for your next
        holiday.
      </h2>
      <div className='row py-5'>
        {currentCountry &&
          currentCountry.destinations.map((destination) => (
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
export default DestinationListing;
