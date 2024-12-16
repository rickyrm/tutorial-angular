import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProyectComponent } from './proyect/proyect.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { DataComponent } from './data/data.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { ServiciossComponent } from './servicioss/servicioss.component';

export const routes: Routes = [
    
    { path: '', component: HomeComponent },
    { path: 'proyecto', component: ProyectComponent},
    { path: 'componentes', component: ComponentesComponent},
    { path: 'data', component: DataComponent},
    { path: 'directiva', component: DirectivasComponent},
    { path: 'navegacion', component: NavegacionComponent},
    { path: 'servicioss', component: ServiciossComponent}
    

];
