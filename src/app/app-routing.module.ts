import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailComponent } from './film/film-detail/film-detail.component';
import { FilmsPageComponent } from './film/films-page/films-page.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  // redirection quand l'utilisateur arrive sur le chemin /
  { path: "", redirectTo: "films", pathMatch: "full" },
  {
    path: "films", children: [
      { path: "", component: FilmsPageComponent, pathMatch: "full" },
      { path: ":id", component: FilmDetailComponent, pathMatch: "full" },
    ]
  },
    // Wildcard pour afficher un composant en cas de non existance de la page
    { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
