import { Routes } from '@angular/router';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { SimpleDatatableExampleComponent } from './components/simple-datatable-example/simple-datatable-example.component';
import { ComponentOutputExampleComponent } from './components/component-output-example/component-output-example.component';
import { EpersonTemplateDrivenFormExampleComponent } from './components/eperson-template-driven-form-example/eperson-template-driven-form-example.component';
import { EpersonReactiveFormExampleComponent } from './components/eperson-reactive-form-example/eperson-reactive-form-example.component';
import { HttpClientExampleComponent } from './components/http-client-example/http-client-example.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';

export const routes: Routes = [
    {path: 'event-bind-example', component:EventBindExampleComponent},
    {path: 'component-input-example', component:ComponentInputExampleComponent},
    {path: '', component:WelcomeComponent},
    {path: 'for-directive-example', component:ForDirectiveExampleComponent},
    {path: 'simple-datatable-example', component:SimpleDatatableExampleComponent},
    {path: 'component-output-example', component:ComponentOutputExampleComponent},
    {path: 'template-driven-form', component: EpersonTemplateDrivenFormExampleComponent},
    {path: 'reactive-form-example', component: EpersonReactiveFormExampleComponent},
    {path: 'http-client-example', component: HttpClientExampleComponent},
    {path:'user-registration', component: UserRegistrationComponent}
];
