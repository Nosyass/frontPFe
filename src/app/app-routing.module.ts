import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecapComponent } from './recap/recap.component';
import { DirecteurComponent } from './directeur/directeur.component'; 
import { RegpenaliteComponent } from './regpenalite/regpenalite.component'; 
import { EmpComponent } from './emp/emp.component';
import { EmpchercherComponent } from './empchercher/empchercher.component';
import { AgentdecComponent } from './agentdec/agentdec.component';
import { DeclarationComponent } from './declaration/declaration.component';
import { AgentpenaliteComponent } from "./agentpenalite/agentpenalite.component";
import { UserComponent } from "./user/user.component";
 


const routes: Routes = [
  {path:"recap", component: RecapComponent},
  {path:"directeur", component: DirecteurComponent},
  {path:"regpenalite", component: RegpenaliteComponent},
  {path:"emp", component: EmpComponent},
  {path:"empchercher", component: EmpchercherComponent},
  {path:"agentdec", component: AgentdecComponent},
  {path:"declaration",component: DeclarationComponent},
  {path:"agentpenalite",component: AgentpenaliteComponent},
  {path:"user",component: UserComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
