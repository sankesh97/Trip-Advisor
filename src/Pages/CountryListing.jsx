import { useContext, useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const CountryListing = () => {
  const { AppState } = useContext(AppContext);
  const { continent } = useParams();
  const [currentContinent, setCurrentContinent] = useState();

  useEffect(() => {
    setCurrentContinent(
      AppState.continents.find((cont) => cont.id.toString() === continent)
    );
  }, []);

  return (
    <div className='text-center'>
      <h2 className='text-info'>
        Top Countries in {currentContinent && currentContinent.name} for your
        next holiday.
      </h2>
      <div className='row py-5'>
        {currentContinent &&
          currentContinent.countries.map((countries) => (
            <div key={countries.id} className='col'>
              <NavLink to={`/${continent}/${countries.id}`}>
                <div
                  className='card d-flex flex-column justify-content-end p-5 text-white'
                  style={{
                    backgroundImage: `url('${countries.image}')`,
                    backgroundSize: 'cover',
                    height: '300px',
                  }}
                >
                  <i className='bi bi-geo-alt-fill'></i> {countries.name}
                </div>
              </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
};
export default CountryListing;
