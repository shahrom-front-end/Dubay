import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "./assets/Logo.svg";
import logo1 from "./assets/Rectangle 14.svg";
import oi from "./assets/01.svg";
import iz from "./assets/02.svg";
import is from "./assets/03.svg";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import foto1 from "./assets/foto1.svg";
import foto2 from "./assets/foto2.svg";
import foto3 from "./assets/foto3.png";
import foto4 from "./assets/foto4.png";
import IconNavbar from "./components/Burger";
import Switcher from "./components/Switcher";
import vidio from "./assets/video section.svg";
import dom from "./assets/placeholder.svg";
import dom1 from "./assets/dom1.svg";
import hover from "./assets/Hover.svg";
import hover1 from "./assets/hover1.svg";
import hover2 from "./assets/hover2.svg";
import odam1 from "./assets/odam1.svg";
import odam2 from "./assets/odam2.svg";
import vergul from './assets/vergul.svg'
import Acordion from "./components/Acordion";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="bg-[#272727] dark:bg-white py-[10px] overflow-hidden">
        <div className=" w-[90%] m-auto flex justify-between items-center">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <ul className="text-white  flex gap-10 sm:hidden lg:flex">
              <li className="dark:text-[black]">Buy</li>
              <li className="dark:text-[black]">Blog</li>
              <li className="dark:text-[black]">About</li>
              <li className="dark:text-[black]">Contact</li>
            </ul>
          </div>
          <div className="flex gap-5 items-center">
            <button className="sm:hidden md:flex py-[7px] px-[10px] bg-[#FCD54C]">
              Book a consultation
            </button>
            <div className="flex items-center gap-3 text-[white] sm:hidden md:flex">
              <p className="dark:text-[black]">En</p>
              <p className="dark:text-[black]">Ru</p>
            </div>
            <p className="sm:hidden md:flex text-white dark:text-[black] ">
              +7 (212) 674-25-10
            </p>
            <div className="sm:flex lg:hidden">
              <IconNavbar />
            </div>
            <Switcher />
          </div>
        </div>
        <br />
        <div className="pt-[20px] bg w-[90%] m-auto mb-[100px] ">
          <div className="flex items-center sm:w-[100%] md:w-[80%] m-auto">
            <img src={logo1} alt="" />
            <div className="my-[200px] m-auto">
              <h1 className="relative right-[7%] md:text-[85px] lg:text-[85px] xl:text-[100px] sm:text-[40px] font-[700] text-[#ffffff] ">
                Welcome home <span className="text-[#FCD54C]">To</span> luxury
              </h1>
              <p className="text-[white] text-[20px] font-[700] ">
                Book a consultation
              </p>
            </div>
          </div>
          <div className="flex justify-end items-end">
            <div className="bg-[#272727] dark:bg-[white] flex justify-between p-[20px] lg:w-[60%] md:w-[80%] sm:w-[100%] flex-wrap">
              <div className="flex sm:w-[80%] sm:mb-[20px] sm:m-auto md:w-[30%] gap-3 ">
                <img src={oi} alt="" />
                <div>
                  <p className="text-white dark:text-[black]">
                    Lorem Ipsum Dolorem apset
                  </p>
                </div>
              </div>
              <div className="flex sm:w-[80%] sm:mb-[20px] sm:m-auto md:w-[30%] gap-3">
                <img src={iz} alt="" />
                <div>
                  <p className="text-white dark:text-[black]">
                    Lorem Ipsum Dolorem apset
                  </p>
                </div>
              </div>
              <div className="flex sm:w-[80%] sm:mb-[20px] sm:m-auto md:w-[30%] gap-3 ">
                <img src={is} alt="" />
                <div>
                  <p className="text-white dark:text-[black]">
                    Lorem Ipsum Dolorem apset
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-[90%] m-auto">
          <div>
            <h3 className="text-[#FFF] dark:text-[black]">Latest projects</h3>
          </div>
          <ul className="text-white flex gap-10">
            <li className="dark:text-[black]">All</li>
            <li className="dark:text-[black]">Building</li>
            <li className="dark:text-[black]">Interior</li>
            <li className="dark:text-[black]">View all projects</li>
          </ul>
        </div>
        <br />
        <br />
        <br />
        <div  data-aos="flip-down" data-aos-duration="2000">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={foto1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foto4} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div>
          <div className="md:w-[50%] sm:w-[80%] lg:w-[579px] m-auto mt-[50px]">
            <p
               data-aos="fade-right"
              data-aos-duration="2000"
              className="text-[#FCD54C] text-[18px] not-italic font-semibold "
            >
              Our expertise
            </p>{" "}
            <br />
            <h1
              data-aos="fade-right"
              data-aos-duration="2000"
              className="text-[#E8E8E8]  font-bold md:text-[40px] sm:text-[30px] lg:text-[50px] not-italic dark:text-[#111827]"
            >
              "The best apartment in Dubai" we will find your dream
            </h1>{" "}
            <br />
            <p
              data-aos="fade-left"
              data-aos-duration="2000"
              className="text-[#E8E8E8] text-[18px] not-italic font-normal  sm:text-[15px] dark:text-[#111827]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse nibh massa, euismod ut libero id, blandit posuere
              augue. Morbi porta volutpat diam egestas ultrices. Phasellus
              tempus fringilla neque, nec viverra orci tristique vel. In
              efficitur vehicula magna, varius pellentesque nisl vehicula vel.
              Aenean vel sem ac elit commodo finibus in nec massa. Nulla
              facilisi. Nulla vestibulum venenatis sollicitudin. Etiam auctor
              mollis justo eu tincidunt. Aliquam varius varius tortor. Cras id
              venenatis sem. Quisque ut risus ex. Sed et tempor massa. Praesent
              ac eros hendrerit, congue justo ac, molestie urna. Fusce nec neque
              vitae dolor dapibus elementum. Maecenas nec orci quis sem
              condimentum dapibus varius a lorem. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>{" "}
        </div>
        <br />
        <br />
        <br />
        <div className="cont" data-aos="zoom-in" data-aos-duration="3000">
          <img src={vidio} alt="" />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="cont">
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="lg:w-[700px] lg:m-auto"
          >
            <p className="text-[30px]  lg:m-auto text-white dark:text-black">
              “Don’t limit yourself. Many people limit themselves to what they
              think they can do. You can go as far as your mind lets you. What
              you believe, remember, you can achieve.”
              <span className="text-[#FCD54C]">— Mary Kay Ash</span>{" "}
            </p>
          </div>
          <br />
          <br />
          <br />
          <div className="lg:flex lg:justify-around gap-10">
            <div
              data-aos="flip-left"
              data-aos-duration="1300"
              className="lg:w-[543px]"
            >
              <img src={dom} alt="" />
              <br />
              <p className="text-white dark:text-black text-[18px] font-bold">
                Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis.
                Pellentesque augue elit, rutrum sit amet commodo vel, porta quis
                purus. Nullam faucibus, odio eu bibendum auctor, eros dolor
                aliquet purus, sit amet pellentesque neque est id tortor. In
                egestas, erat a dapibus dapibus, mi augue ornare lorem, nec
                pretium ligula purus nec tellus. Aenean a scelerisque nisi.
                Nullam pretium fermentum nunc, feugiat placerat urna rutrum
                eget. Nullam mattis justo consequat risus. Donec imperdiet enim
                id efficitur pharetra. Nam sollicitudin at est eget auctor. Ut
                sed ante quis nulla tincidunt auctor. Quisque accumsan pretium
                tincidunt. Etiam viverra ultrices est vitae suscipit.
                Pellentesque elementum purus non nisl pharetra consequat. Nunc
                in venenatis orci.
              </p>
            </div>
            <br />
            <br />
            <div
              data-aos="flip-right"
              data-aos-duration="1300"
              className="lg:w-[543px]"
            >
              <img src={dom1} alt="" />
              <br />
              <p className="text-white dark:text-black text-[18px] font-bold">
                Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis.
                Pellentesque augue elit, rutrum sit amet commodo vel, porta quis
                purus. Nullam faucibus, odio eu bibendum auctor, eros dolor
                aliquet purus, sit amet pellentesque neque est id tortor. In
                egestas, erat a dapibus dapibus, mi augue ornare lorem, nec
                pretium ligula purus nec tellus. Aenean a scelerisque nisi.
                Nullam pretium fermentum nunc, feugiat placerat urna rutrum
                eget. Nullam mattis justo consequat risus. Donec imperdiet enim
                id efficitur pharetra. Nam sollicitudin at est eget auctor. Ut
                sed ante quis nulla tincidunt auctor. Quisque accumsan pretium
                tincidunt. Etiam viverra ultrices est vitae suscipit.
                Pellentesque elementum purus non nisl pharetra consequat. Nunc
                in venenatis orci.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />

        <section className="sec2">
          <div className="cont">
            <div className="ded">
              <br />
              <p  data-aos="zoom-in" data-aos-duration="3000"  className="text-[18px] text-center">
                Do you have any questions?
              </p>
              <h1  data-aos="zoom-in" data-aos-duration="3000" className="lg:text-[120px] sm:text-[60px] font-bold text-center">
                Contact us
              </h1>
              <div className="flex justify-center items-center">
                <input
                  className="lg:w-[20%]  p-[17px]"
                  type="text"
                  placeholder="Enter your mail"
                />
                <button className="lg:w-10%]  bg-[black] text-white p-[17px]">
                  Send
                </button>
              </div>
              <br />
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <section>
          <div className="cont">
            <div className="">
              <h1 className="text-[60px] text-center text-white dark:text-[black] font-bold">
                Useful articles
              </h1>
              {/* <p className="text-[18px] text-[gray] lg:mt-[30px]">View all articles</p> */}
            </div>
            <br />
            <br />
            <div className="xl:grid xl:grid-cols-3 xl:gap-10 lg:grid lg:grid-cols-2 lg:gap-10 sm:grid sm:grid-cols-1 sm:gap-10">
              <img data-aos="fade-down" data-aos-duration="2000"  className="sm:m-auto " src={hover1} alt="" />
              <img data-aos="fade-up" data-aos-duration="2000" className="sm:m-auto " src={hover} alt="" />
              <img data-aos="fade-down" data-aos-duration="2000" className="sm:m-auto " src={hover2} alt="" />
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <div
           data-aos="flip-up"
          data-aos-duration="2000"
          className="w-[90%] m-auto my-[50px]"
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination]}
            className="swiper"
          >
            <SwiperSlide>
              <div className=" w-[70%] m-auto border-2 border-[#FCD54C] p-[20px] bg-[#272727] dark:bg-[white]">
                <div className="flex justify-between items-center">
                  <div>
                    <img className="rounded-[50%]" src={odam1} alt="" />
                  </div>
                  <div>
                    <img src={vergul} alt="" />
                  </div>
                </div>
                <h3 className="text-[white] text-[20px] font-[700]">Paul</h3>
                <p className="text-[#929292] text-[16px] font-[400]">
                  Owner in Paul.com
                </p>
                <p className="text-[#929292] text-[16px] font-[400]">
                  Projects for many large domestic and foreign corporations,
                  enterprises in many elds such as nance, banking, F&B,
                  education, communication.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[70%] m-auto border-2 border-[#FCD54C] p-[20px] bg-[#272727] dark:bg-[white]">
                <div className="flex justify-between items-center">
                  <div>
                    <img className="rounded-[50%]" src={odam2} alt="" />
                  </div>
                  <div>
                    <img src={vergul} alt="" />
                  </div>
                </div>
                <h3 className="text-[white] text-[20px] font-[700]">Paul</h3>
                <p className="text-[#929292] text-[16px] font-[400]">
                  Owner in Paul.com
                </p>
                <p className="text-[#929292] text-[16px] font-[400]">
                  Projects for many large domestic and foreign corporations,
                  enterprises in many elds such as nance, banking, F&B,
                  education, communication.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[70%] m-auto border-2 border-[#FCD54C] p-[20px] bg-[#272727] dark:bg-[white]">
                <div className="flex justify-between items-center">
                  <div>
                    <img className="rounded-[50%]" src={odam1} alt="" />
                  </div>
                  <div>
                    <img src={vergul} alt="" />
                  </div>
                </div>
                <h3 className="text-[white] text-[20px] font-[700]">Paul</h3>
                <p className="text-[#929292] text-[16px] font-[400]">
                  Owner in Paul.com
                </p>
                <p className="text-[#929292] text-[16px] font-[400]">
                  Projects for many large domestic and foreign corporations,
                  enterprises in many elds such as nance, banking, F&B,
                  education, communication.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[70%] m-auto border-2 border-[#FCD54C] p-[20px] bg-[#272727] dark:bg-[white]">
                <div className="flex justify-between items-center">
                  <div>
                    <img className="rounded-[50%]" src={odam2} alt="" />
                  </div>
                  <div>
                    <img src={vergul} alt="" />
                  </div>
                </div>
                <h3 className="text-[white] text-[20px] font-[700]">Paul</h3>
                <p className="text-[#929292] text-[16px] font-[400]">
                  Owner in Paul.com
                </p>
                <p className="text-[#929292] text-[16px] font-[400]">
                  Projects for many large domestic and foreign corporations,
                  enterprises in many elds such as nance, banking, F&B,
                  education, communication.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[70%] m-auto border-2 border-[#FCD54C] p-[20px] bg-[#272727] dark:bg-[white]">
                <div className="flex justify-between items-center">
                  <div>
                    <img className="rounded-[50%]" src={odam1} alt="" />
                  </div>
                  <div>
                    <img src={vergul} alt="" />
                  </div>
                </div>
                <h3 className="text-[white] text-[20px] font-[700]">Paul</h3>
                <p className="text-[#929292] text-[16px] font-[400]">
                  Owner in Paul.com
                </p>
                <p className="text-[#929292] text-[16px] font-[400]">
                  Projects for many large domestic and foreign corporations,
                  enterprises in many elds such as nance, banking, F&B,
                  education, communication.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[70%] m-auto border-2 border-[#FCD54C] p-[20px] bg-[#272727] dark:bg-[white]">
                <div className="flex justify-between items-center">
                  <div>
                    <img className="rounded-[50%]" src={odam2} alt="" />
                  </div>
                  <div>
                    <img src={vergul} alt="" />
                  </div>
                </div>
                <h3 className="text-[white] text-[20px] font-[700]">Paul</h3>
                <p className="text-[#929292] text-[16px] font-[400]">
                  Owner in Paul.com
                </p>
                <p className="text-[#929292] text-[16px] font-[400]">
                  Projects for many large domestic and foreign corporations,
                  enterprises in many elds such as nance, banking, F&B,
                  education, communication.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <br />
        <br />
        <br />
        <br />
        <Acordion />
        <br />
        <br />
        <br />
        <section>
          <div className="cont">
            <div>
              <img className="m-auto" src={logo} alt="" />
            </div><br /><br />

            <div data-aos="zoom-in-down" data-aos-duration="2000" className="xl:grid xl:grid-cols-5 xl:gap-[50px] lg:grid lg:grid-cols-3 lg:gap-[60px] sm:grid sm:grid-cols-2 sm:gap-2">
              <div  className="">
                <p className="text-white dark:text-black font-bold">Buy</p>
                <br />
                <p className="text-[gray]">Apartment in Dubai</p>
                <p className="text-[gray]">House in Dubai</p>
                <p className="text-[gray]">Apartments in Dubai</p>
                <p className="text-[gray]">Loft in Dubai</p>
                <p className="text-[gray]">Penthouse in Dubai</p>
                <p className="text-[gray]">Villa in Dubai</p>
              </div>

              <div  className="">
                <p className="text-white dark:text-black font-bold">Services</p>
                <br />
                <p className="text-[gray]">Property management in Dubai, UAE</p>
                <p className="text-[gray]">Sell ​​property in Dubai, UAE</p>
                <p className="text-[gray]">Rent property in Dubai, UAE</p>
                <p className="text-[gray]">Investments in Dubai, UAE</p>
                <p className="text-[gray]">Real estate for cryptocurrency in Dubai</p>
                <p className="text-[gray]">Moving to Dubai, UAE</p>
              </div>

              <div  className="">
                <p className="text-white dark:text-black font-bold">Information</p>
                <br />
                <p className="text-[gray]">Video</p>
                <p className="text-[gray]">Podcasts</p>
                <p className="text-[gray]">Laws</p>
                <p className="text-[gray]">Questions and answers</p>
                <p className="text-[gray]">Books</p>
                <p className="text-[gray]">Articles</p>
              </div>

              <div  className="">
                <p className="text-white dark:text-black font-bold">About company</p>
                <br />
                <p className="text-[gray]">Jobs </p>
                <p className="text-[gray]">Story</p>
                <p className="text-[gray]">Licenses</p>
                <p className="text-[gray]">Why are we</p>
                <p className="text-[gray]">Real estate agency</p>
              </div>

              <div   className="">
                <p className="text-white dark:text-black font-bold">Contact</p>
                <br />
                <p className="text-[gray]">964 Worthington Drive Dubai, UAE</p>
                <p className="text-[gray]">dubairealty@mail.com</p><br /><br />
                <button className="bg-[#FCD54C] p-[15px]">Book a consultation</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
