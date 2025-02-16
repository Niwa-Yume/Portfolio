import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjetComponent} from "./projet/projet.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projet', component: ProjetComponent },
  { path: '**', redirectTo: '' }
];
