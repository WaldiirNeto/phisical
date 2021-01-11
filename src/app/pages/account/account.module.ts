import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { routing } from './account.routing';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [IonicModule, routing],
    exports: [],
    declarations: [LoginComponent],
    providers: [],
})
export class AccountModule { }
