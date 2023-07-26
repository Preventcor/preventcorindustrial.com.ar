import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
import { brands, clients } from "../data/Brands";
import Carousel from "./Carousel";
import SectionTitle from "./sectionTitle";

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white">
            Somos Preventcor Industrial
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Empresa de servicios en prevención y corrección de Autoelevadores Eléctricos; nos especializamos en el mantenimiento de baterías, cargadores, componentes y repuestos dirigidos exclusivamente a maquinarias eléctricas cuya función sea carga. (Estibadora, Apliladores, Zorra con Torre y Transpaleteras).
            </p>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300"> Contamos con 10 años consecutivos en el mercado logístico lo que nos hace de valores en responsabilidad y gran compromiso en el rubro Industrial.</p>
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
      <SectionTitle
        pretitle="MISIÓN"
        title=""
        align="center"
      >
       Orientar el trabajo y el esfuerzo hacia la mejora continua, la búsqueda permanente de la excelencia en el servicio para obtener máximos niveles de satisfacción de nuestros clientes. 

      </SectionTitle>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-4xl text-center text-gray-700 dark:text-white">
          Marcas que nos confían sus <span className="text-indigo-600">Maquinas</span>
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <Carousel data={clients} />
          </div>
        </div>
      </Container>
    </>
  )
}
