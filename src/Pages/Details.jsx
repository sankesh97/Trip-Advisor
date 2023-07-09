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
      <h2 className='text-info'>{currentDestination.name}</h2>
      <div className='row py-5'>
        {currentDestination && (
          <>
            <div className='col-4'>
              <img src={currentDestination.image} className='img-fluid' />
            </div>
            <div className='col-8 text-start'>
              <p>
                <span className='text-info'>Description:</span>{' '}
                {currentDestination.description}
              </p>
              <p>
                <span className='text-info'>Ratings:</span>{' '}
                {currentDestination.ratings}
              </p>
              <p>
                <span className='text-info'>Reviews:</span>{' '}
                {currentDestination.reviews}
              </p>
              <p>
                <span className='text-info'>Location:</span>{' '}
                {currentDestination.location}
              </p>
              <p>
                <span className='text-info'>Opening Hours:</span>{' '}
                {currentDestination.openingHours}
              </p>
              <p>
                <span className='text-info'>Ticket Price:</span>{' '}
                {currentDestination.ticketPrice}
              </p>
              <a href={currentDestination.website} className='text-danger'>
                Website
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Details;
