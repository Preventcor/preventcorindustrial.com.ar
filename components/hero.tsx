import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
import { brands, clients } from "../data/Brands";
import Carousel from "./Carousel";

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Preventcor Industrial
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Nos dedicamos al mantenimiento y prevención de Autoelevadores
              eléctricos, enfocándonos puntualmente en baterías traccionarias y
              cargadores. Así también contamos con el más variado servicio de
              comercialización en baterías nacionales e importadas, equipos
              reacondicionados con garantía y la más extensa variedad de
              repuestos como: Fichas conectores, cables extraflex, conos
              borneras, separadores, placas P+N, y alquiler de equipos
              eléctricos
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Nuestros <span className="text-indigo-600">clientes</span>
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <Carousel data={clients} />
          </div>
        </div>
      </Container>
    </>
  )
}
