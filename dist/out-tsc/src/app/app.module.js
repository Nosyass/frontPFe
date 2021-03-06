import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RecapComponent } from './recap/recap.component';
import { DirecteurComponent } from './directeur/directeur.component';
import { RegpenaliteComponent } from './regpenalite/regpenalite.component';
import { EmpComponent } from './emp/emp.component';
import { EmpchercherComponent } from './empchercher/empchercher.component';
import { AgentdecComponent } from './agentdec/agentdec.component';
import { DeclarationComponent } from './declaration/declaration.component';
import { AgentpenaliteComponent } from './agentpenalite/agentpenalite.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                MenuComponent,
                RecapComponent,
                DirecteurComponent,
                RegpenaliteComponent,
                EmpComponent,
                EmpchercherComponent,
                AgentdecComponent,
                DeclarationComponent,
                AgentpenaliteComponent,
                UserComponent,
            ],
            imports: [
                HttpClientModule,
                BrowserModule,
                FormsModule,
                AppRoutingModule
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map