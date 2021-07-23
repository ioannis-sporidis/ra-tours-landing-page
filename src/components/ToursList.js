import Tour from './Tour';

const ToursList = props => {
  return (
    <section>
      <div className='title'>
        <h2>Our tours</h2>
      </div>
      <div className='underline'></div>
      <div>
        {props.tours.map(tour => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default ToursList;
