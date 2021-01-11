import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routing: ModuleWithProviders<any> = RouterModule.forChild([
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent, data: { state: 'login' } }
])