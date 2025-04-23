import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';

interface Experience {
  entreprise: string;
  periode: string;
  titre: string;
  description: string;
  details: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedExperience: Experience | null = null;
  showModal = false;

  experiences: Experience[] = [
    {
      entreprise: 'Rolex',
      periode: 'Stage en tant que développeur - 6 mois',
      titre: 'Développeur chargé de projet',
      description: 'Stage chez Rolex pendant 6 mois, où j\'ai travaillé sur un projet web sur la protection de la marque et géré la propriété intellectuelle.',
      details: 'Durant cette expérience, j\'ai :\n- Développé une application web complète\n- Géré la propriété intellectuelle\n- Travaillé en équipe avec différents services\n- Utilisé Angular, TypeScript et Node.js'
    },
    {
      entreprise: 'Noctinium',
      periode: 'sep 2022 - Aujourd\'hui',
      titre: 'Fondateur',
      description: 'Projet personnel où j\'organise des événements et une plateforme pour référencer les événements de la ville de Genève',
      details: 'En tant que fondateur :\n- Développement de la plateforme web\n- Gestion des partenariats\n- Organisation d\'événements\n- Marketing digital'
    },
    {
      entreprise: 'Infomaniak',
      periode: 'Novembre 2023 - Décembre 2023',
      titre: 'Support technique 1 et 2 Spécialiste Ksuite',
      description: 'Première expérience dans le monde de la tech. J\'ai pu mettre un premier pied dedans et me plonger sur d\'autres aspects que je n\'avais jamais pu faire avant.',
      details: 'Responsabilités :\n- Support technique niveau 1 et 2\n- Spécialisation Ksuite\n- Résolution de problèmes clients\n- Gestion des incidents'
    },
    {
      entreprise: 'Flow Bank',
      periode: 'Janvier 2023 - Mars 2023',
      titre: 'Sales Trader',
      description: 'J\'ai pu apprendre à gérer des clients et à comprendre les besoins de chacun. J\'ai pu aussi apprendre à gérer des situations de stress et à être réactif.',
      details: 'Compétences développées :\n- Gestion de la relation client\n- Trading et marchés financiers\n- Gestion du stress\n- Communication professionnelle'
    }
  ];

  openModal(experience: Experience): void {
    this.selectedExperience = experience;
    this.showModal = true;
    document.body.classList.add('modal-open');
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedExperience = null;
    document.body.classList.remove('modal-open');
  }
  getExperienceDetails(): string[] {
    return this.selectedExperience?.details?.split('\n') ?? [];
  }
}
