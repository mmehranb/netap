import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { AboutComponent } from './about/about.component';
import { AgentsComponent } from './agents/agents.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { ServcoComponent } from './permissions/servco/servco.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'about',
      component: AboutComponent,
    },
    {
      path: 'agents',
      component: AgentsComponent,
    },
    {
      path: 'contact-us',
      component: ContactUsComponent,
    },
    { path: 'portfolios', component: PortfoliosComponent },
    {
      path: 'permissions',
      children: [
        {
          path: '',
          component: PermissionsComponent,
        },
        {
          path: 'servco',
          component: ServcoComponent,
        },
      ],
    },
    {
      path: '',
      component: HomeComponent,
    },
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
