import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  date: string;
  tags: string[];
  image: string;
  link: string;
  description?: string;
}

@Component({
  selector: 'app-projet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.css'
})
export class ProjetComponent {
  projects: Project[] = [
    {
      title: "Noctinium",
      date: "2023",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      image: "/image projet/noctinium.png",
      link: "https://noctinium.com",
      description: "Plateforme web dynamique avec gestion de base de données avancée."
    },
    {
      title: "Bot de web crawling et de web scraping",
      date: "2023",
      tags: ["Python", "Scrapy"],
      image: "/image projet/web scrapping.png",
      link: "https://github.com/Niwa-Yume/Bot-scrapy",
      description: "Outil automatisé de collecte et d'extraction de données web."
    },
    {
      title: "Portfolio HTML CSS",
      date: "2023",
      tags: ["HTML", "CSS"],
      image: "/image projet/portefolio-html-css.png",
      link: "https://niwa-yume.github.io/Portefolio_HTML_CSS/",
      description: "Portfolio personnel réalisé avec des technologies web classiques."
    },
    {
      title: "Portefolio TailwindCSS",
      date: "2023",
      tags: ["HTML", "CSS", "TailwindCSS"],
      image: "/image projet/portefolio-tailwindcss.png",
      link: "https://niwa-yume.github.io/Portefolio-tailwindcss/",
      description: "Portfolio moderne et responsive utilisant Tailwind CSS."
    },
    {
      title: "Bot telegram",
      date: "2023",
      tags: ["Python", "Telegram"],
      image: "/image projet/bot telegram.jpg",
      link: "https://github.com/Niwa-Yume/Geneva-bot",
      description: "Bot Telegram personnalisé avec des fonctionnalités avancées."
    },
    {
      title: "Club des bergers belges",
      date: "2023",
      tags: ["WordPress"],
      image: "/image projet/berger-belge.png",
      link: "https://bergerbelgegeneve.ch/",
      description: "Site web pour le club des bergers belges de Genève."
    },
    {
      title: "Scoubi dog maitre chien",
      date: "2024",
      tags: ["WordPress"],
      image: "/image projet/scoubi fog.png",
      link: "https://scoubi-dog.ch/",
      description: "Site web pour un service de dressage canin."
    },
    {
      title: "Petit Onion",
      date: "2024",
      tags: ["TailwindCSS", "Laravel", "JavaScript", "PHP", "MySQL"],
      image: "/image projet/petit-onion.png",
      link: "https://www.petitonion.com",
      description: "Application web complète avec une stack technologique moderne."
    },
    {
      title: "App météo API + BOT AI",
      date: "2024",
      tags: ["API", "Python", "Telegram"],
      image: "/image projet/app-meteo.png",
      link: "https://niwa-yume.github.io/premiere-app-meteo/",
      description: "Application météo intelligente avec intégration d'API et bot Telegram."
    },
    {
      title: "Chalet Hirdondelle",
      date: "2024",
      tags: ["HTML", "CSS", "TailwindCSS", "JavaScript"],
      image: "/image projet/chalet.png",
      link: "https://chalet-hirondelle.vercel.app/",
      description: "Site web vitrine pour un chalet de location."
    },
    {
      title: "Belle vu cap martin",
      date: "2024",
      tags: ["HTML", "CSS", "TailwindCSS", "JavaScript"],
      image: "/image projet/bellevue.png",
      link: "https://bellevue-cap-martin.vercel.app/",
      description: "Site web présentant une vue panoramique exceptionnelle."
    }
  ];

  // Méthode pour ouvrir le lien du projet
  openProjectLink(link: string) {
    window.open(link, '_blank');
  }
}
