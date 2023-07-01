import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import image from "../assets/redux.png";
import image1 from "../assets/eclipse.png";
import image2 from "../assets/login&register.png";
import image3 from "../assets/postgreSql.png";
import image4 from "../assets/react-Typescript.png";

const Gallery = () => {
  const slides = [image, image1, image2, image3, image4];

  return (
    <section id="gallery" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-2/5 mx-auto text-center "
        initial="hidden"
        whileInView="visible"
        viewport={{ root: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          Gallery
        </p>
        <div className="flex justify-center mt-5">
          <LineGradient width=" w-3/5 " />
        </div>
        <p className="mt-10">
          Welcome to the My Gallery section! Here you can take a look at the
          codes of my projects. This humble gallery represents my commitment to
          improving my skills and my passion for software development. I hope
          these images can inspire you and showcase my ongoing dedication to
          progress as a developer. Thank you for the opportunity to share my
          work with you.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <Swiper
        centeredSlides
        slidesPerView={3}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false, // Mostra o nasconde le ombre delle diapositive
        }}
        modules={[EffectCoverflow]}
        className="mt-16 rounded-3xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide}
              alt={`Person ${index + 1}`}
              className="rounded-3xl h-100 w-100"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
