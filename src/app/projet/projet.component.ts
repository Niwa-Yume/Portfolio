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
      image: "../../assets/logo noctinium nouveau.png",
      link: "https://noctinium.com",
      description: "Plateforme web dynamique avec gestion de base de données avancée."
    },
    {
      title: "Portfolio HTML CSS",
      date: "2023",
      tags: ["HTML", "CSS"],
      image: "../../assets/projet/portefolio-html-css.png",
      link: "https://niwa-yume.github.io/Portefolio_HTML_CSS/",
      description: "Portfolio personnel réalisé avec des technologies web classiques."
    },
    {
      title: "Portefolio TailwindCSS",
      date: "2023",
      tags: ["HTML", "CSS", "TailwindCSS"],
      image: "../../assets/projet/portefolio-tailwindcss.png",
      link: "https://niwa-yume.github.io/Portefolio-tailwindcss/",
      description: "Portfolio moderne et responsive utilisant Tailwind CSS."
    },
    {
      title: "Bot telegram",
      date: "2023",
      tags: ["Python", "Telegram"],
      image: "../../assets/projet/bot telegram.jpg",
      link: "https://github.com/Niwa-Yume/Geneva-bot",
      description: "Bot Telegram personnalisé avec des fonctionnalités avancées."
    },
    {
      title: "Club des bergers belges",
      date: "2023",
      tags: ["WordPress"],
      image: "../../assets/projet/berger-belge.png",
      link: "https://bergerbelgegeneve.ch/",
      description: "Site web pour le club des bergers belges de Genève."
    },
    {
      title: "Scoubi dog maitre chien",
      date: "2024",
      tags: ["WordPress"],
      image: "../../assets/projet/scoubi fog.png",
      link: "https://scoubi-dog.ch/",
      description: "Site web pour un service de dressage canin."
    },
    {
      title: "Petit Onion",
      date: "2024",
      tags: ["TailwindCSS", "Laravel", "JavaScript", "PHP", "MySQL"],
      image: "../../assets/projet/petit-onion.png",
      link: "https://www.petitonion.com",
      description: "Application web complète avec une stack technologique moderne."
    },
    {
      title: "App météo API + BOT AI",
      date: "2024",
      tags: ["API", "Python", "Telegram"],
      image: "../../assets/projet/app-meteo.png",
      link: "https://niwa-yume.github.io/premiere-app-meteo/",
      description: "Application météo intelligente avec intégration d'API et bot Telegram."
    }
  ];

  // Méthode pour ouvrir le lien du projet
  openProjectLink(link: string) {
    window.open(link, '_blank');
  }
}
