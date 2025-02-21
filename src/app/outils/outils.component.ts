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
      name: 'Copilot AI',
      iconUrl: 'https://registry.npmmirror.com/@lobehub/icons-static-png/1.22.0/files/light/githubcopilot.png',
      description: 'Un assistant de code dans un IDE',
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
      iconUrl: 'https://www.svgrepo.com/show/303231/docker-logo.svg',
      description: 'Plateforme de conteneurisation',
      category: 'ai'
    },
    {
      name: 'Git',
      iconUrl: 'https://www.svgrepo.com/show/535422/git-merge.svg',
      description: 'Version control system',
      category: 'ai'
    },{
      name: 'Figma',
      iconUrl: 'https://raw.githubusercontent.com/SAWARATSUKI/KawaiiLogos/refs/heads/main/Figma/Figma.png',
      description: 'Outils de design, wireframe et de prototype.',
      category: 'ai'
    },{
      name: 'IDE Intelliji',
      iconUrl: 'https://raw.githubusercontent.com/SAWARATSUKI/KawaiiLogos/refs/heads/main/IntelliJ%20IDEA/IntelliJ%20IDEA.png',
      description: 'Un des meilleurs IDE',
      category: 'ai'
    },{
      name: 'Github',
      iconUrl: 'https://raw.githubusercontent.com/SAWARATSUKI/KawaiiLogos/refs/heads/main/GitHub/GitHub.png',
      description: 'Outil de version control',
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
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
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
    },

    // Backend
    {
      name: 'Laravel',
      iconUrl: 'https://raw.githubusercontent.com/SAWARATSUKI/KawaiiLogos/refs/heads/main/Laravel/LaravelTransparent.png',
      description: 'PHP web framework',
      category: 'backend'
    },
    {
      name: 'Java Spring',
      iconUrl: 'https://www.svgrepo.com/show/452234/java.svg',
      description: 'Enterprise Java framework',
      category: 'backend'
    },
    {
      name: 'Python',
      iconUrl: 'https://www.svgrepo.com/show/452091/python.svg',
      description: 'Versatile programming language',
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
