
import { Fade } from "react-awesome-reveal";
import img1 from "../../assets/images (1).jpeg"
import img2 from "../../assets/images (2).jpeg"
import img3 from "../../assets/images (3).jpeg"
import Helmet from "helmet"
const Testimonials = () => {
    return (
      <section className="testimonials">
        <Helmet><title>reviews</title></Helmet>

        <Fade direction="right">
        <h2 className="text-3xl my-3 mb-3">What <span className="text-orange-500 text-4xl"> Our Travelers </span>Say</h2>
        <div className="testimonials-container">
          <Fade direction="right">
          <div className="testimonial">
            <p>"I was a little hesitant to book a solo trip, but your customer service was fantastic and put my mind at ease. The tour guides were knowledgeable and friendly, and I made some great new friends along the way. Thank you for an unforgettable experience!"</p>
            <div className="testimonial-info">
              <p>Rafin <img className="w-[50px] h-[50px] rounded-full" src={img1} alt="" /> </p>
              <span className="rating">5 stars</span>
            </div>
          </div>
          </Fade>
          <Fade direction="right">
          <div className="testimonial">
            <p>"I was a little hesitant to book a solo trip, but your customer service was fantastic and put my mind at ease. The tour guides were knowledgeable and friendly, and I made some great new friends along the way. Thank you for an unforgettable experience!"</p>
            <div className="testimonial-info">
              <p>Sifat<img className="w-[50px] h-[50px] rounded-full" src={img2} alt="" /></p>
              <span className="rating">4.5 stars</span>
            </div>
          </div>
          </Fade>
          <Fade direction="right">
          <div className="testimonial">
            <p>"I was a little hesitant to book a solo trip, but your customer service was fantastic and put my mind at ease. The tour guides were knowledgeable and friendly, and I made some great new friends along the way. Thank you for an unforgettable experience!"</p>
            <div className="testimonial-info">
              <p>Rifat<img className="w-[50px] h-[50px] rounded-full" src={img3} alt="" /></p>
              <span className="rating">4 stars</span>
            </div>
          </div>
          </Fade>
        </div>
       </Fade>
      </section>
    );
  };
  
  export default Testimonials;