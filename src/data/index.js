import theme from "../theme";
import * as _fa from 'react-icons/fa';
import React from "react";

import CheckroomIcon from '@mui/icons-material/Checkroom';
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import PrintIcon from "@mui/icons-material/Print";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CampaignIcon from "@mui/icons-material/Campaign";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";


export const footerData = {
  entreprise: {
    title: "LV SPA",
    subtitles: [
      {
        title: "Tarifs",
        path: "/tarifs",
      },
      {
        title: "A propos de nous",
        path: "/a-propos",
      },

      {
        title: "Mentions Légales",
        path: "/mentions",
      },
    ],
  },

  prestations: {
    title: "Nos soins",
    subtitles: [
      {
        id: 1,
        title: "Mannicure",
        image: "/travaux.jpg",
        details:
          "Vos projets deconstruction méritent un partenaire fiable et efficace. Petits ou grands travaux de construction de bâtiments, de rénovation, de génie Civil, des routes, ou d’ouvrages d’art. Nous ne faisons aucun compromis sur la qualité. Consol360 est spécialisée dans la construction, l'analyse de défauts, la recherche de pannes,...",
      },
      {
        id: 2,
        title: "Epilation laser",
        image: "/travaux.jpg",
        details:
          "Vos projets deconstruction méritent un partenaire fiable et efficace. Petits ou grands travaux de construction de bâtiments, de rénovation, de génie Civil, des routes, ou d’ouvrages d’art. Nous ne faisons aucun compromis sur la qualité. Consol360 est spécialisée dans la construction, l'analyse de défauts, la recherche de pannes,...",
      },
      {
        id: 3,
        title: "Soins de visage",
        image: "/nettoyage.jpg",
        details:
          "Consol360 nettoie, entretien, désinsectise, dératise et s'occupe des immondices de vos bureaux, maison, grande surface,...",
      },
    ],
  },
  communnity: {
    title: "Contact",
    socials: [
      {
        name: "Facebook",
        link: "https://www.facebook.com/100091073385092/",
        icon: React.createElement(_fa.FaFacebook, { style: { color: theme.palette.primary.main } }),
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/motukapp",
        icon: React.createElement(_fa.FaInstagram, { style: { color: theme.palette.primary.main } }),
      },
      {
        name: "Tiktok",
        link: "https://www.tiktok.com/@motukapp",
        icon: React.createElement(_fa.FaTiktok, { style: { color: theme.palette.primary.main } }),
      },
      {
        name: "Twitter",
        link: "https://x.com/motukapp",
        icon: React.createElement(_fa.FaTwitter, { style: { color: theme.palette.primary.main } }),
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/@motukapp",
        icon: React.createElement(_fa.FaLinkedin, { style: { color: theme.palette.primary.main } }),
      },
    ],
  },
};

export const informations = [
  {
    title: "A propos de nous",
    href: "/a-propos",
  },
  {
    title: "Trucs & astuces",
    href: "/blog",
  },
  {
    title: "Mentions légales",
    href: "/mentions",
  },

  {
    title: "Politique de confidentialité",
    href: "/cgu",
  },

  // {
  //   title: "Conditions générales d'utilisation",
  //   href: "/cgu",
  // },
];

export const services = [
  {
    title: "Infographie",
    description:
      "Création de visuels professionnels, logos, affiches, flyers et identités graphiques pour valoriser votre image de marque.",
    icon: <DesignServicesIcon fontSize="large" />,
    color: "#ff0f7b",
  },

  {
    title: "Impression numérique & offset",
    description:
      "Impression haute qualité de flyers, brochures, affiches, dépliants et supports marketing pour tous vos besoins professionnels.",
    icon: <PrintIcon fontSize="large" />,
    color: "#f89b29",
  },

  {
    title: "Impression photo & déco",
    description:
      "Impression photo HD sur différents supports pour décoration intérieure, événements, cadres et cadeaux personnalisés.",
    icon: <PhotoCameraIcon fontSize="large" />,
    color: "#00c6ff",
  },

  {
    title: "Impression grand format",
    description:
      "Conception et impression de bâches, roll-up, panneaux publicitaires et supports grand format pour maximiser votre visibilité.",
    icon: <ViewSidebarIcon fontSize="large" />,
    color: "#7b61ff",
  },

  {
    title: "Agendas & calendriers",
    description:
      "Création d’agendas et calendriers personnalisés pour entreprises, campagnes promotionnelles et cadeaux corporate.",
    icon: <CalendarMonthIcon fontSize="large" />,
    color: "#00b894",
  },

  {
    title: "Sérigraphie & Broderie",
    description:
      "Personnalisation textile par sérigraphie et broderie sur t-shirts, polos, casquettes, uniformes et vêtements professionnels.",
    icon: <CheckroomIcon fontSize="large" />,
    color: "#e17055",
  },

  {
    title: "Support publicitaire",
    description:
      "Production de supports publicitaires impactants : kakemonos, PLV, enseignes, stickers et outils de communication visuelle.",
    icon: <CampaignIcon fontSize="large" />,
    color: "#6c5ce7",
  },

  {
    title: "Papeterie",
    description:
      "Impression de cartes de visite, enveloppes, blocs-notes, facturiers et documents administratifs personnalisés.",
    icon: <BusinessCenterIcon fontSize="large" />,
    color: "#0984e3",
  },

  {
    title: "Confection d'objets publicitaires & décoratifs résine epoxy",
    description:
      "Fabrication d’objets personnalisés en résine epoxy pour cadeaux d’entreprise, décoration et branding événementiel.",
    icon: <AutoAwesomeIcon fontSize="large" />,
    color: "#fdcb6e",
  },

  {
    title: "Branding véhicule",
    description:
      "Habillage et marquage publicitaire de véhicules pour renforcer la visibilité de votre entreprise en mobilité.",
    icon: <DirectionsCarFilledIcon fontSize="large" />,
    color: "#d63031",
  },
];