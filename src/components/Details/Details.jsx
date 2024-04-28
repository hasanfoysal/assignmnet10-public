/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const Details = ({detail}) => {

    // eslint-disable-next-line react/prop-types
    const {image} = detail;
    // eslint-disable-next-line react/prop-types
    const {estate_title} = detail;
    // eslint-disable-next-line no-unused-vars
    const {id} = detail;
    // eslint-disable-next-line no-unused-vars
    const {segment_name} = detail;
    const {description} = detail;
    // eslint-disable-next-line no-unused-vars
    const {price} = detail;
    // eslint-disable-next-line no-unused-vars
    const {status} = detail;
    // eslint-disable-next-line no-unused-vars
    const {area} = detail;
    // eslint-disable-next-line no-unused-vars
    const {locations} = detail;
    // eslint-disable-next-line no-unused-vars
    const {facilities} = detail;


    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="max-w-sm rounded-lg shadow-2xl h-[350px] w-[270px] lg:h-[400px] lg:w-[400px]" />
    <div>
      <h1 className="text-3xl font-bold w-24">{estate_title}</h1>
      <p className="py-6 ">{description}</p>
      <h3>Segment Name: {segment_name}</h3>
      <h3>Area:{area} sq ft </h3>
    
     <h1>Fascilities: <br /> {facilities}</h1>
     <h3>Status:{status}</h3>
     <h2>Price:{price}</h2>
    </div>
  </div>
</div>
    );
};

export default Details;