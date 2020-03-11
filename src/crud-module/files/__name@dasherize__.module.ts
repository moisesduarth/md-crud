import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { <%= classify(name) %>ListComponent } from './<%=dasherize(name)%>-list/<%=dasherize(name)%>-list.component';
import { MatInputModule } from '@angular/material';
import { AbstractModule } from 'src/app/abstract/abstract.module';
import { NavigationModule } from 'src/app/component/navigation/navigation.module';
import { ToolsModule } from 'src/app/component/tools/tools.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { <%= classify(name) %>RoutingModule } from './<%=dasherize(name)%>-routing.module';
// import { <%= classify(name) %>DetailComponent } from './<%=dasherize(name)%>-detail/<%=dasherize(name)%>-detail.component';
import { <%= classify(name) %>FormComponent } from './<%=dasherize(name)%>-form/<%=dasherize(name)%>-form.component';

@NgModule({
  declarations: [<%= classify(name) %>FormComponent, <%= classify(name) %>ListComponent],
  imports: [
    CommonModule,
    MatInputModule,
    <%= classify(name) %>RoutingModule,
    AbstractModule,
    NavigationModule,
    FormsModule,
    ReactiveFormsModule,
    ToolsModule
  ]
})
export class <%= classify(name) %>Module { }