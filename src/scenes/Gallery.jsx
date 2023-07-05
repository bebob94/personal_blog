import LineGradient from "../components/LineGradient";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import image from "../assets/sa-perda-de-sa-pippia.jpg";
import image1 from "../assets/Sarrabus.jpg";
import image2 from "../assets/Capo-Ferrato.jpg";
import image3 from "../assets/Feraxi.jpg";
import image4 from "../assets/cala-Biriola.jpg";
import image5 from "../assets/Canyon-Cala-Biriola.jpg";
import image6 from "../assets/sa-fossa-de-su-para.jpg";
import image7 from "../assets/su-fossu-de-su-para.jpg";
import image8 from "../assets/SA-Buddidorgia.jpg";
import image9 from "../assets/Brecca.jpg";
import image10 from "../assets/Castello-di-Quirra.jpg";
import image11 from "../assets/Quirra.jpg";
import image12 from "../assets/quirra2.jpg";
import image13 from "../assets/torre-dei-10-cavalli.jpg";
import image14 from "../assets/Monte Narba.jpg";

const Gallery = ({ language }) => {
  const slides = [
    {
      title1: "Sa perda de sa pippia",
      title2: "Sa perda de sa pippia",
      description1:
        "Hill located above Muravera, the wind blowing in the small cave on the mountain imitates the voice of a child.",
      description2:
        "Collina situata sopra Muravera, il vento che soffia nella piccola grotta del monte imita la voce di una bambina.",
      link: image,
    },
    {
      title1: "Sarrabus",
      title2: "Sarrabus",
      description1:
        "View of Sarrabus from one of the highest points in Muravera.",
      description2:
        "Vista del Sarrabus da una delle punte più alte di Muravera.",
      link: image1,
    },
    {
      title1: "Capoferrato Tower",
      title2: "Torre Capoferrato",
      description1: "Famous watchtower located in Capoferrato (Feraxi).",
      description2:
        "Famosa torre d'avvistamento situata a Capoferrato (Feraxi).",
      link: image2,
    },
    {
      title1: "Capoferrato Tower",
      title2: "Torre Capoferrato",
      description1: "View from the interior of the watchtower.",
      description2: "Vista dall'interno della torre d'avvistamento.",
      link: image3,
    },
    {
      title1: "Cala Biriola",
      title2: "Cala Biriola",
      description1:
        "Famous cove in the Arbatax area, accessible only by sea or through a medium-to-high difficulty trekking route.",
      description2:
        "Famosa cala in zona Arbatax raggiungibile solo via mare o attraverso un trakking di medio-alto livello.",
      link: image4,
    },
    {
      title1: "Canyon Cala Biriola",
      title2: "Canyon Cala Biriola",
      description1: "Path to reach Cala Biriola.",
      description2: "Percorso per raggiungere Cala Biriola.",
      link: image5,
    },
    {
      title1: "Sa fossa de su para",
      title2: "Sa fossa de su para",
      description1: "Famous waterfall located in the Quirra area.",
      description2: "Famosa cascata situata in zona Quirra.",
      link: image6,
    },
    {
      title1: "Sa fossa de su para",
      title2: "Sa fossa de su para",
      description1: "Path and aerial view of the previous waterfall.",
      description2: "Percorso e vista dall'alto della cascata precedente.",
      link: image7,
    },
    {
      title1: "Sa Buddidorgia",
      title2: "Sa Buddidorgia",
      description1: "Natural pools and waterfalls near Sa fossa de su para.",
      description2: "Piscine e cascate naturali vicino a sa fossa de su para.",
      link: image8,
    },
    {
      title1: "Brecca Sanvito Caves",
      title2: "Grotte di Brecca",
      description1: "Famous caves of Brecca Sanvito.",
      description2: "Famose grotte di Brecca Sanvito.",
      link: image9,
    },
    {
      title1: "Quirra Castle Ruins",
      title2: "Castello di Quirra",
      description1: "Ruins of an ancient and famous castle in the Quirra area.",
      description2: "Ruderi di antico e famoso castello nella zona di Quirra.",
      link: image10,
    },
    {
      title1: "Quirra Castle Ruins",
      title2: "Castello di Quirra",
      description1: "View from the interior of Quirra's Castle.",
      description2: "Vista dall'interno del castello di Quirra.",
      link: image11,
    },
    {
      title1: "Quirra Castle Ruins",
      title2: "Castello di Quirra",
      description1: "View from the exterior of Quirra's Castle.",
      description2: "Vista dall'esterno del castello di Quirra.",
      link: image12,
    },
    {
      title1: "Tower of the 10 Horses",
      title2: "Torre dei 10 cavalli",
      description1: "Famous defensive tower located in the Muravera area.",
      description2: "Famose Torre difensiva situata in zona Muravera.",
      link: image13,
    },
    {
      title1: "Monte Narba Mines and Ruins",
      title2: "Miniere e ruderi Monte Narba",
      description1: "Ancient mines located in the Sanvito area.",
      description2: "Antiche Miniere situate in zona Sanvito.",
      link: image14,
    },
  ];

  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    if (swiper) {
      swiper.autoplay.start();
    }
  }, []);

  return (
    <section id={language === true ? "gallery" : "galleria"} className="pt-24 ">
      {/* HEADING */}
      <motion.div
        className="md:w-3/5 mx-auto text-center "
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
          {language === true ? "Gallery" : "Galleria"}
        </p>
        <div className="flex justify-center mt-5">
          <LineGradient width=" w-3/5 " />
        </div>
        <h3 className="font-playfair text-center text-2xl mt-2">
          {language === true
            ? "Explore Sardinia: a treasure of adventures and culture beyon the sea."
            : "Esplorare la Sardegna: un tesoro di avventure e cultura oltre il mare."}
        </h3>
        <p className="mt-5 text-base font-serif">
          {language === true
            ? "In my gallery, I want to showcase the authentic soul of the island, emphasizing that it goes far beyond the beautiful beaches. Through my hiking adventures, I seek to introduce the beauty and cultural richness of my beloved island - majestic mountains, breathtaking views, and ancient archaeological sites. I hope that my photos and descriptions convey the beauty and cultural richness of this beloved land, inspiring others to discover its diversity and immerse themselves in its millennia-old history."
            : "Nella mia gallery, desidero mostrare l'anima autentica dell'isola, sottolineando che va ben oltre le splendide spiagge. attraverso le mie avventure escursionistiche, cerco di far conoscere la bellezza e la ricchezza culturale della mia amata isola, montagne maestose, viste mozzafiato e siti archeologici antichi. Spero che le mie foto e descrizioni trasmettono la bellezza e la ricchezza culturale di questa amata terra, ispirando altri a scoprire la sua diversità e immergersi nella sua storia millenaria."}
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <Swiper
        ref={swiperRef}
        centeredSlides
        grabCursor={true}
        slidesPerView={window.innerWidth < 800 ? 1 : 3}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mt-16 rounded-3xl"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.link}
              alt={language === true ? slide.title1 : slide.title2}
              className="rounded-3xl h-100 w-100"
            />
            <div className="flex justify-center items-center font-playfair text-center mt-4  flex-wrap">
              <h3 className="text-3xl mb-4 w-11/12">
                {language === true ? slide.title1 : slide.title2}
              </h3>
              <p className="text-1xl">
                {language === true ? slide.description1 : slide.description2}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
