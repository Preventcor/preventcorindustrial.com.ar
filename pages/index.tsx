import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import Image from "next/image";
import useMobileDetect from "../hooks/useIsMobile";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

interface IHomeProps {}
export default function Home(props: IHomeProps) {
  const { isDesktop, isAndroid, isIos } = useMobileDetect();
  const checkWhatsappURL = () => {
    if (isAndroid()) {
      return "whatsapp://app?phone=5491151653820";
    }
    if (isIos()) {
      return "whatsapp://send?phone=5491151653820&text=Tengo%20una%20consulta%20sobre%20sus%20productos%20y/o%20servicios";
    }
    if (isDesktop()) {
      return "https://web.whatsapp.com/send?phone=5491151653820";
    } else {
      return "whatsapp://send?phone=5491151653820&text=Tengo%20una%20consulta%20sobre%20sus%20productos%20y/o%20servicios";
    }
  };
  return (
    <>
      <Head>
        <title>Preventcor Industrial</title>
        <meta
          name="description"
          content="Preventcor Industrial se dedica al mantenimiento, prevención y
          corrección de vuestras baterías para Autoelevadores. Asi también,
          nuestro más variado servicio de comercialización en diferentes casos,
          sean baterías reacondicionadas con garantía propia, como así también,
          equipos nuevos CERO horas uso."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Servicios en Preventcor Industrial"
        title="¿Por que deberias usas nuestros servicios?"
        align="center"
      >
        Nuestros servicios para Autoelevadores son de primera calidad e incluyen
        mantenimiento, prevención y corrección de baterías, asi como tambien la
        comercialización de baterias reacondicionadas y nuevas, nuestros mas de
        +100 clientes se encuentran satisfechos con nuestros servicios.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Video de nuestros servicios"
        title="En este video demostramos el la calidad y garantia del trabajo que realizamos."
      />
      <Video />
      <SectionTitle
        pretitle="Testimonios"
        title="Opiniones de nuestros clientes"
      >
        Nuestros clientes se encuentran satisfechos con la calidad y garantia
        del servicio que ofrecemos.
      </SectionTitle>
      <Testimonials />
      <SectionTitle
        pretitle="FAQ"
        title="Preguntas frecuentes de nuestros clientes"
      ></SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <div className="fixed bottom-10 right-10 w-16 h-16">
        <a href={checkWhatsappURL()} target="_blank" rel="noreferrer">
          <Image
            src="/img/whatsapp.png"
            alt="Preventcor Industrial Logo"
            width="384"
            height="384"
            className="w-96"
          />
        </a>
      </div>
    </>
  );
}
