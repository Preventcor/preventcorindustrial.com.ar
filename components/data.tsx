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

const benefitOne = {
  title: "Calidad de nuestros servicios",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "Mantenimiento Correctivo en Planta.",
      desc: "",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Revisión de Flota en Sala de Baterías.",
      desc: "",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Servicio Preventivo.",
      desc: "",
      icon: <CursorClickIcon />,
    },
    {
      title: "Testing Inteligente.",
      desc: "",
      icon: <EmojiHappyIcon />,
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
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Ficha Rema 80 A 160 A 320 A",
      desc: "",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Cables Extraflexibles",
      desc: "",
      icon: <SunIcon />,
    },
    {
      title: "Cargadores 12V 24V 36V 48V",
      desc: "",
      icon: <SunIcon />,
    },
    {
      title: "Alquiler:",
      desc: "Autoelevadores, Triciclos, Zorras, Transpalett y Apiladores",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
