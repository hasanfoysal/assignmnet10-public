/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Resident = ({Resi}) => {
    const {image} = Resi;
    const {estate_title} = Resi;
    const {description} = Resi;
    return (
        <div className="card card-compact w-72 md:w-80 lg:w-[500px] mx-auto  bg-base-100 shadow-xl max-w-xs transition duration-300 ease-in-out hover:scale-110" >
        <figure><img src={image} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title text-3xl text-sky-800" >{estate_title}</h2>
          <p className="text-gray-500">{description}</p>
          <div className="card-actions justify-end">
         <Link to='/viewdetails'><button className="btn bg-sky-400 text-white">View Details</button></Link> 
          </div>
        </div>
      </div>
    );
};

export default Resident;