import { UserAgent, parse } from "next-useragent";

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

//import dynamic from "next/dynamic";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return {
    props: {
      uaString: context.req.headers["user-agent"],
    },
  };
};
interface IHomeProps {
  uaString: string;
}
export default function Home(props: IHomeProps) {
  let ua: UserAgent;
  if (props.uaString) {
    ua = parse(props.uaString);
  } else {
    ua = parse(window.navigator.userAgent);
  }
  const checkWhatsappURL = () => {
    if (ua && ua.isDesktop) {
      return "https://web.whatsapp.com/send?phone=5491151653820";
    }
    if (ua && ua.isAndroid) {
      return "intent://send?phone=5491151653820&text=Bienvenido%20a%20Preventcor%20Industrial#Intent;package=com.whatsapp;scheme=whatsapp;end&phone=5491151653820";
    }
    if (ua && ua.isIos) {
      return "whatsapp://send?phone=your-number-here&text=Bienvenido%20a%20Preventcor%20Industrial";
    }
    return "https://web.whatsapp.com/send?phone=5491151653820";
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
        pretitle="Nextly Benefits"
        title=" Why should you use this landing page"
        align="center"
      >
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
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
