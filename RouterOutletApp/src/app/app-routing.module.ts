import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { CeroComponent } from './cero/cero.component';
import { UnoComponent } from './uno/uno.component';
import { DosComponent } from './dos/dos.component';

const routes: Routes = [
	{ path: "login", component:LoginComponent },
	{ path: "recuperar", component:RecuperarComponent },
	{ path: "cero", component:CeroComponent },
	{ path: "uno", component:UnoComponent },
	{ path: "dos", component:DosComponent },
	{ path: "uno", component:UnoComponent, outlet: "modal" },
	{ path: "dos", component:DosComponent, outlet: "modal" },
	{ path: "", redirectTo: "cero", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true } ) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
