import { BsFuelPumpFill } from "react-icons/bs";
import { FaOilCan, FaPlus, FaTemperatureHigh } from "react-icons/fa";
import { PiEngineFill } from "react-icons/pi";

import cabecote from "@/assets/cabecote.svg";
import freio from "@/assets/freio.svg";
import amortecedor from "@/assets/amortecedor.svg";

export default [
    {
        icon: <BsFuelPumpFill />,
        label: "Injeção Eletrônica"
    },
    {
        icon: <FaTemperatureHigh />,
        label: "Arrefecimento"
    },
    {
        icon: <FaOilCan />,
        label: "Troca de Óleo"
    },
    {
        icon: <PiEngineFill />,
        label: "Motor"
    },
    {
        icon: <img src={cabecote} alt="Cabeçote" />,
        label: "Cabeçote"
    },
    {
        icon: <img src={freio} alt="Freio" />,
        label: "Freio"
    },
    {
        icon: <img src={amortecedor} alt="Suspensão" />,
        label: "Suspensão"
    },
    {
        icon: <FaPlus />,
        label: "e mais!"
    },
]