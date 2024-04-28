import travel from '../../../assets/travel.png'
import travel2 from '../../../assets/travel2.avif'
import travel4 from '../../../assets/travel4.avif'
import travel3 from '../../../assets/travel3.avif'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import CountUp from "react-countup";
const Banner = () => {
    return (
        <div >
            <div className="border-t bg-black text-white border-base-300"></div>
            <div className="border-t bg-black text-white border-base-300"></div>
          
<div className="carousel w-full rounded-b-3xl">
  <div id="slide1" className="carousel-item relative w-full ">
  <div className="hero min-h-screen bg-black">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={travel} className=" w-[290px] mr-4 h-[300px] rounded-t-full  lg:ml-24 rounded-lg shadow-3xl lg:h-[500px] lg:w-[500px]"   data-aos="fade-left"
     data-aos-easing="linear"
     data-aos-duration="1500"/>
    <div className="mr-4 ">
      <h1 className="lg:text-5xl text-2xl font-bold m-6 text-yellow-50"  data-aos="fade-right"
     data-aos-duration="2000"><h1 className='lg:text-4xl text-2xl'>TIME TO</h1><h2 className='text-3xl lg:text-5xl'>TRAVEL!</h2></h1>
      <p className="py-4 pb-8 text-zinc-300 mx-4" data-aos="fade-up-right"
     data-aos-duration="2500">Find a variety of places that suit you very easilty 
Forget <br /> all difficulties in finding a residence for you</p>
<div className="lg:flexCenter stats flex-row w-[290px] lg:w-full ">
            <div className="flexColCenter stat ">
            <span  className="text-3xl">
                <CountUp start={100} end={130} duration={7} /> <span span className="text-amber-500 text-3xl">+</span>
              </span>
              <span className="secondaryText">Premium Places</span>
            </div>

            <div className="flexColCenter stat">
            <span className="text-3xl">
                <CountUp start={1950} end={2000} duration={6} /> <span className="text-amber-500 text-3xl">+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
            <span  className="text-3xl">
                <CountUp end={28} duration={5} /> <span className="text-orange-500 text-3xl" >+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>

    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 left-52  lg:right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className="hero min-h-screen bg-black">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={travel3} className="lg:ml-24 rounded-lg shadow-3xl rounded-t-full lg:h-[500px] lg:w-[500px] w-[290px] mr-4 h-[300px]"   data-aos="fade-up-left"
     data-aos-easing="linear"
     data-aos-duration="1500"/>
    <div className="mr-4 " data-aos="fade-up-right"
     data-aos-duration="2000">
      <h1 className="lg:text-5xl text-2xl font-bold m-6 text-yellow-50"><h1 className='lg:text-4xl text-2xl'>TIME TO</h1><h2 className='text-3xl lg:text-5xl'>TRAVEL!</h2></h1>
      <p className="py-4 pb-8 text-zinc-300 mx-4">Find a variety of places that suit you very easilty 
Forget <br /> all difficulties in finding a residence for you</p>
<div className="lg:flexCenter stats flex-row w-[290px] lg:w-full ">
            <div className="flexColCenter stat ">
            <span  className="text-3xl">
                <CountUp start={100} end={130} duration={5} /> <span span className="text-amber-500 text-3xl">+</span>
              </span>
              <span className="secondaryText">Premium Places</span>
            </div>

            <div className="flexColCenter stat">
            <span className="text-3xl">
                <CountUp start={1950} end={2000} duration={4} /> <span className="text-amber-500 text-3xl">+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
            <span  className="text-3xl">
                <CountUp end={28} duration={3} /> <span className="text-amber-500 text-3xl" >+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>

    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 lg:right-5 left-52 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className="hero min-h-screen bg-black">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={travel2}className="  lg:ml-24 rounded-lg shadow-3xl rounded-t-full lg:h-[500px] lg:w-[500px] w-[290px] mr-4 h-[300px]"   data-aos="fade-up-left"
     data-aos-easing="linear"
     data-aos-duration="1500"/>
    <div className="mr-4 " data-aos="fade-up-right"
     data-aos-duration="2000">
      <h1 className="lg:text-5xl text-2xl font-bold m-6 text-yellow-50"><h1 className='lg:text-4xl text-2xl'>TIME TO</h1><h2 className='text-3xl lg:text-5xl'>TRAVEL!</h2></h1>
      <p className="py-4 pb-8 text-zinc-300 mx-4">Find a variety of places that suit you very easilty 
Forget <br /> all difficulties in finding a residence for you</p>
<div className="lg:flexCenter stats flex-row w-[290px] lg:w-full ">
            <div className="flexColCenter stat ">
            <span  className="text-3xl">
                <CountUp start={100} end={130} duration={5} /> <span span className="text-amber-500 text-3xl">+</span>
              </span>
              <span className="secondaryText">Premium Places</span>
            </div>

            <div className="flexColCenter stat">
            <span className="text-3xl">
                <CountUp start={1950} end={2000} duration={4} /> <span className="text-amber-500 text-3xl">+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
            <span  className="text-3xl">
                <CountUp end={28} duration={3} /> <span className="text-amber-500 text-3xl" >+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>

    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 lg:right-5 left-52 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <div className="hero min-h-screen bg-black">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={travel4} className=" lg:ml-24 rounded-lg shadow-3xl rounded-t-full lg:h-[500px] lg:w-[500px] w-[290px] mr-4 h-[300px]"   data-aos="fade-up-left"
     data-aos-easing="linear"
     data-aos-duration="1500"/>
    <div className="mr-4 " data-aos="fade-up-right"
     data-aos-duration="2000">
      <h1 className="lg:text-5xl text-2xl font-bold m-6 text-yellow-50"><h1 className='lg:text-4xl text-2xl'>TIME TO</h1><h2 className='text-3xl lg:text-5xl'>TRAVEL!</h2>
</h1>
      <p className="py-4 pb-8 text-zinc-300 mx-4">Find a variety of places that suit you very easilty 
Forget <br /> all difficulties in finding a residence for you</p>
<div className="lg:flexCenter stats flex-row w-[290px] lg:w-full">
            <div className="flexColCenter stat ">
            <span  className="text-3xl">
                <CountUp start={100} end={130} duration={5} /> <span span className="text-amber-500 text-3xl">+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>

            <div className="flexColCenter stat">
            <span className="text-3xl">
                <CountUp start={1950} end={2000} duration={4} /> <span className="text-amber-500 text-3xl">+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
            <span  className="text-3xl">
                <CountUp end={28} duration={3} /> <span className="text-amber-500 text-3xl" >+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>

    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 lg:right-5 left-52 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

        </div>
        
    );
};

export default Banner;