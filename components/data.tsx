import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";
import Image from "next/image";

const benefitOne = {
  title: "Calidad de nuestros servicios",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "Mantenimiento Correctivo en Planta.",
      desc: "",
      icon: <Image className='px-4 items-center align-middle justify-center' width={24} height={24} src="/img/icons/mantain.png" alt="Mantenimiento Correctivo en Planta." />,
    },
    {
      title: "Revisión de Flota en Sala de Baterías.",
      desc: "",
      icon: <Image className='px-4 items-center align-middle justify-center' width={24} height={24} src="/img/icons/battery.png" alt="Revisión de Flota en Sala de Baterías." />,
    },
    {
      title: "Servicio Preventivo.",
      desc: "",
      icon: <Image className='px-4 items-center align-middle justify-center' width={24} height={24} src="/img/icons/service.png" alt="Servicio Preventivo." />,
    },
    {
      title: "Testing Inteligente.",
      desc: "",
      icon: <Image className='px-4 items-center align-middle justify-center' width={24} height={24} src="/img/icons/testing.png" alt="Testing Inteligente." />,
    },
  ],
};

const benefitTwo = {
  title: "Calidad de nuestros Productos",
  desc: "",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Ficha Anderson 50 A 175 A 350 A",
      desc: "",
      icon: <Image className='px-4 items-center align-middle justify-center' width={24} height={24} src="/img/icons/cables.png" alt="Ficha Anderson 50 A 175 A 350 A" />,
    },
    {
      title: "Ficha Rema 80 A 160 A 320 A",
      desc: "",
      icon: <Image className='px-4 items-center align-middle justify-center' width={24} height={24} src="/img/icons/cables.png" alt="Ficha Rema 80 A 160 A 320 A" />,
    },
    {
      title: "Cables Extraflexibles",
      desc: "",
      icon: <Image className='px-4 items-center align-middle justify-center' width={24} height={24} src="/img/icons/cables.png" alt="Cables Extraflexibles" />,
    },
    {
      title: "Cargadores 12V 24V 36V 48V",
      desc: "",
      icon: <Image className='px-4 items-center align-middle justify-center' width={24} height={24} src="/img/icons/charger.png" alt="Cargadores 12V 24V 36V 48V" />,
    },
    {
      title: "Alquiler:",
      desc: "Autoelevadores, Triciclos, Zorras, Transpalett y Apiladores",
      icon: <Image className='px-4 items-center align-middle justify-center' width={24} height={24} src="/img/icons/rent.png" alt="Autoelevadores, Triciclos, Zorras, Transpalett y Apiladores" />,
    },
  ],
};

export { benefitOne, benefitTwo };
