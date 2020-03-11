import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { <%= classify(name) %>ListComponent } from './<%=dasherize(name)%>-list/<%=dasherize(name)%>-list.component';
import { <%= classify(name) %>FormComponent } from './<%=dasherize(name)%>-form/<%=dasherize(name)%>-form.component';

const routes: Routes = [
  {
    path: '',
    component: <%= classify(name) %>ListComponent
  },
  {
    path: 'new',
    component: <%= classify(name) %>FormComponent
  },
  {
    path: 'view/:id',
    component: <%= classify(name) %>FormComponent
  },
  {
    path: 'form/:id',
    component: <%= classify(name) %>FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class <%= classify(name) %>RoutingModule { }
