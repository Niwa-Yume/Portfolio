import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Technology {
  name: string;
  iconUrl: string;
  description: string;
  category: 'ai' | 'frontend' | 'backend';
}

@Component({
  selector: 'app-outils',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './outils.component.html',
  styleUrl: './outils.component.css'
})
export class OutilsComponent implements OnInit {
  // Données des technologies
  technologies: Technology[] = [
    // AI & Tools
    {
      name: 'Node.JS',
      iconUrl: 'https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Node.js/Node.js.png',
      description: 'un environnement d’exécution single-thread, open-source et multi-plateforme',
      category: 'ai'
    },
    {
      name: 'GPT',
      iconUrl: 'https://www.svgrepo.com/show/306500/openai.svg',
      description: 'GPT, Claude, et bien d\'autre modèle',
      category: 'ai'
    },
    {
      name: 'Docker',
      iconUrl: 'https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/Docker/DockerLogo.png',
      description: 'Plateforme de conteneurisation',
      category: 'ai'
    },
    {
      name: 'GitLab',
      iconUrl: 'https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/GitLab/GitLab.png',
      description: 'Version control',
      category: 'ai'
    },{
      name: 'Figma',
      iconUrl: 'https://raw.githubusercontent.com/murimurikyu/CuteVtubingThing/main/Figma.png',
      description: 'Outils de design, wireframe et de prototype.',
      category: 'ai'
    },{
      name: 'IDE Intelliji',
      iconUrl: 'https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/IntelliJIDEA/IntellijLogo.png',
      description: 'Un des meilleurs IDE',
      category: 'ai'
    },{
      name: 'Github',
      iconUrl: 'https://raw.githubusercontent.com/murimurikyu/CuteVtubingThing/main/GitHub.png',
      description: 'Outil de version control',
      category: 'ai'
    },
    {
      name: 'Buns',
      iconUrl: 'https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/Bun/BunLogo.png',
      description: 'Gestionnaire de paquet pour Node.js',
      category: 'ai'
    },

    // Frontend
    {
      name: 'Tailwind CSS',
      iconUrl: 'https://raw.githubusercontent.com/SAWARATSUKI/KawaiiLogos/refs/heads/main/tailwind%20css/Tailwindcss.png',
      description: 'Utility-first CSS framework',
      category: 'frontend'
    },
    {
      name: 'Vue.js',
      iconUrl: 'https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Vue/Vue.png',
      description: 'Progressive JavaScript framework',
      category: 'frontend'
    },
    {
      name: 'Angular',
      iconUrl: 'https://raw.githubusercontent.com/SAWARATSUKI/KawaiiLogos/refs/heads/main/Angular/Angular.png',
      description: 'Mon tout premier Framework, fait par Google',
      category: 'frontend'
    },
    {
      name: 'TypeScript',
      iconUrl: 'https://raw.githubusercontent.com/SAWARATSUKI/KawaiiLogos/refs/heads/main/TypeScript/TypeScript.png',
      description: 'Typed JavaScript superset',
      category: 'frontend'
    },{
      name: 'Vite',
      iconUrl: 'https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Vite/Vite.png',
      description: 'Vite est un serveur de développement Web rapide qui peut servir des fichiers sur disque en tant que ressources statiques',
      category: 'frontend'
    },

    // Backend
    {
      name: 'Laravel',
      iconUrl: 'https://raw.githubusercontent.com/SAWARATSUKI/KawaiiLogos/refs/heads/main/Laravel/LaravelTransparent.png',
      description: 'PHP web framework',
      category: 'backend'
    },
    {
      name: 'JEE et Springboot',
      iconUrl: 'https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Java/Java.png',
      description: 'Enterprise Java framework',
      category: 'backend'
    },
    {
      name: 'Python',
      iconUrl: 'https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Python/Python.png',
      description: 'Script, bot et automatisation ',
      category: 'backend'
    }
  ];

  // Propriétés pour l'effet de typing
  displayText: string = '';
  fullText: string = 'Mes Technologies & Outils';

  // Catégories et filtrage
  categories: string[] = ['AI & Outils', 'Front-end', 'Back-end'];
  selectedCategory: string | null = null;
  filteredTechnologies: Technology[] = [];

  ngOnInit() {
    this.startTypingEffect();
    this.filteredTechnologies = this.technologies;
  }

  // Effet de typing
  startTypingEffect() {
    let index = 0;
    const typeText = () => {
      if (index < this.fullText.length) {
        this.displayText += this.fullText.charAt(index);
        index++;
        setTimeout(typeText, 100);
      }
    };
    typeText();
  }

  // Sélection de catégorie
  selectCategory(category: string) {
    this.selectedCategory = category;

    // Mapper la catégorie à la clé de filtrage
    const categoryMap: { [key: string]: 'ai' | 'frontend' | 'backend' } = {
      'AI & Outils': 'ai',
      'Front-end': 'frontend',
      'Back-end': 'backend'
    };

    // Filtrer les technologies
    this.filteredTechnologies = this.selectedCategory
      ? this.technologies.filter(tech => tech.category === categoryMap[category])
      : this.technologies;
  }
}
