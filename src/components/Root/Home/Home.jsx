import AboutUs from "../../About/AboutUs";
import Residential from "../../Residential/Residential";
import Helmet from "helmet"

import Testimonials from "../../Testimonials/Testimonials";
import Banner from "../Banner/Banner";
import Login from "../Login/Login";

const Home = () => {
    return (
        <div>
            <Helmet><title>home</title></Helmet>
           <Banner></Banner>
           <Residential></Residential>
           <AboutUs></AboutUs>
           <Testimonials></Testimonials>
         
           <Login></Login>
        </div>
    );
};

export default Home;