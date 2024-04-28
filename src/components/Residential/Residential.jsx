import { useEffect, useState } from "react";
import Resident from "../Resident/Resident";

const Residential = () => {
    const [Resis, setResis] = useState([]);
    useEffect( () =>{
        fetch('Residential.json')
        .then(res => res.json())
        .then(data => setResis(data));

    },[])
    return (
        <div className=" lg:my-12 my-5 lg:mx-12 mx-5" data-aos="fade-up" data-aos-duration='1000'>
            <h1 className="text-4xl text-center py-1 font-semibold">Our Residential Area</h1>
            <h2 className="text-2xl text-center py-1 text-orange-500 font-semibold">Best Choices</h2>
            <h3 className="text-3xl text-center  text-sky-800">Popular Residencies</h3>
            <div className="grid lg:grid-cols-3 gap-4  mt-5 ">
                {
                    Resis.map(Resi => <Resident key={Resi.id} Resi={Resi}></Resident> )
                }
            </div>

        </div>
    );
};

export default Residential;