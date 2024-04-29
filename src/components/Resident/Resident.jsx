/* eslint-disable react/prop-types */
import Helmet from "helmet"
import { Link } from "react-router-dom";
import {Fade} from "react-awesome-reveal"


const Resident = ({Resi}) => {
    const {photo} = Resi;
    const {country_Name} = Resi;
    const {tourists_spot_name} = Resi;
    const {ShortDescription} = Resi;
    return (
 
        <div className="card card-compact w-72 md:w-80 lg:w-[500px] mx-auto  bg-base-100 shadow-xl max-w-xs transition duration-300 ease-in-out hover:scale-110" >
          <Helmet>resident</Helmet>
        <Fade direction="left">
        <figure><img className=" w-[300px] lg:w-[370px]" src={photo} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title text-3xl text-sky-800" >{country_Name}</h2>
          <h2 className="text-2xl text-orange-400">{tourists_spot_name}</h2>
          <p className="text-gray-500">{ShortDescription}</p>
          <div className="card-actions justify-end">
         <Link to='/viewdetails'><button className="btn bg-sky-400 text-white">View Details</button></Link> 
          </div>
        </div>
        </Fade>
      </div>
      
    );
};

export default Resident;