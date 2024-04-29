import AboutUs from "../../About/AboutUs";
import Residential from "../../Residential/Residential";

import Testimonials from "../../Testimonials/Testimonials";
import Banner from "../Banner/Banner";
import Login from "../Login/Login";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Residential></Residential>
           <AboutUs></AboutUs>
           <Testimonials></Testimonials>
         
           <Login></Login>
        </div>
    );
};

export default Home;