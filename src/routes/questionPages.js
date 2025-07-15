// src/routes/questionPages.js
import discussionsData from "../data/discussions.json";
import amourData from "../data/amour.json";
import adoData from "../data/ado.json";
import resoudreData from "../data/resoudre.json";
import trashData from "../data/trash.json";
import entrepriseData from "../data/entreprise.json";
import croyancesData from "../data/croyances.json";
import financesData from "../data/finances.json";
import blaguesData from "../data/blagues.json";

import { RiSpeakFill } from "react-icons/ri";
import { FaHeart, FaReact, FaLightbulb, FaLaughSquint } from "react-icons/fa";
import { GiBilledCap, GiVomiting } from "react-icons/gi";
import { HiBuildingOffice } from "react-icons/hi2";
import { BiMoneyWithdraw } from "react-icons/bi";

export const questionPages = [
{
    path: "/discussions",
    label: "Discussions",
    data: discussionsData,
    icon: RiSpeakFill,
  },
  {
    path: "/amour",
    label: "Amour",
    data: amourData,
    icon: FaHeart,
  },
  {
    path: "/resoudre",
    label: "Résoudre",
    data: resoudreData,
    icon: FaReact,
  },
  {
    path: "/ado",
    label: "Ado",
    data: adoData,
    icon: GiBilledCap,
  },
  {
    path: "/trash",
    label: "Trash",
    data: trashData,
    icon: GiVomiting,
  },
{
    path: "/entreprise",
    label: "Entreprise",
    data: entrepriseData,
    icon: HiBuildingOffice,
  },
  {
    path: "/croyances",
    label: "Croyances",
    data: croyancesData,
    icon: FaLightbulb,
  },
  {
    path: "/finances",
    label: "Finances",
    data: financesData,
    icon: BiMoneyWithdraw,
  },
  {
    path: "/blagues",
    label: "Blagues nulles ach",
    data: blaguesData,
    icon: FaLaughSquint,
  },
];

