/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const Details = ({detail}) => {

    // eslint-disable-next-line react/prop-types
    const {name} = detail;
    // eslint-disable-next-line react/prop-types
    const {email} = detail;
    // eslint-disable-next-line no-unused-vars
    const {ShortDescription} = detail;
    // eslint-disable-next-line no-unused-vars
    const {country_Name} = detail;
    const {tourists_spot_name} = detail;
    // eslint-disable-next-line no-unused-vars
    const {photo} = detail;
    // eslint-disable-next-line no-unused-vars
    const {Seasonality} = detail;
    // eslint-disable-next-line no-unused-vars
    const {Average_cost} = detail;
    // eslint-disable-next-line no-unused-vars
    const {travelTime} = detail;
    // eslint-disable-next-line no-unused-vars
    const {tota} = detail;


    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={photo} className="d max-w-sm rounded-lg shadow-2xl h-[350px] w-[270px] lg:h-[400px] lg:w-[400px]" />
    <div>
      <h1 className="text-3xl bg-cover font-bold w-24">{country_Name}</h1>
      <p className="py-6 ">{tourists_spot_name}</p>
      <h3>Segment Name: {ShortDescription}</h3>
      <h3>Area:{Seasonality} sq ft </h3>
    
     <h1>Fascilities: <br /> {travelTime}</h1>
     <h3>Status:{tota}</h3>
     <h2>Price:{Average_cost}</h2>
    </div>
  </div>
</div>
    );
};

export default Details;