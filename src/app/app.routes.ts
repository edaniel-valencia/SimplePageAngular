import { Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { ServiceComponent } from './page/service/service.component';
import { PricingComponent } from './page/pricing/pricing.component';
import { ContactComponent } from './page/contact/contact.component';
import { HomeComponent } from './page/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeDComponent } from './dashboard/home/home.component';
import { CrudComponent } from './dashboard/crud/crud.component';
import { ConsultaComponent } from './consulta/consulta.component';

export const routes: Routes = [


    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'service', component: ServiceComponent},
    {path: 'price', component: PricingComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'consulta', component: ConsultaComponent},
    
    {path: 'dashboard', 
        component: DashboardComponent,
        children: [
            {path: '', component: HomeDComponent},
            {path: 'crud', component: CrudComponent},
            {path: '**', redirectTo: '/dashboard', pathMatch: 'full'} 
        ]
    },

];
