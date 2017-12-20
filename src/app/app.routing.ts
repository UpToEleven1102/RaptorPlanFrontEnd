import {RouterModule, Routes} from '@angular/router';
import { CreateProfileComponent } from './create-profile.component/create-profile.component';
import { ChooseSchoolComponent } from './choose-school.component/choose-school.component';
import { CreateAccountComponent } from './create-account.component/create-account.component';

const appRoute: Routes = ([
    {path: 'dashboard', component: CreateAccountComponent, children: [
        {path: '', component: ChooseSchoolComponent},
        {path: 'newaccount', component: CreateProfileComponent}
    ]},
    {path: '', pathMatch: 'full', redirectTo: 'dashboard'}
]);

export const routing = RouterModule.forRoot(appRoute);


