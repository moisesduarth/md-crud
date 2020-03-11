import { Component, OnInit } from '@angular/core';
import { AbstractListComponent } from 'src/app/abstract/abstract-component/abstract-list';
import { <%= classify(name) %> } from '../<%=dasherize(name)%>-model/<%=dasherize(name)%>';
import { <%= classify(name) %>Service } from '../<%=dasherize(name)%>-service/<%=dasherize(name)%>.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-<%=dasherize(name)%>',
  templateUrl: './<%=dasherize(name)%>-list.component.html',
  styleUrls: ['./<%=dasherize(name)%>-list.component.css']
})
export class <%= classify(name) %>ListComponent extends AbstractListComponent<<%= classify(name) %>, <%= classify(name) %>Service> {

  constructor(service: <%= classify(name) %>Service, activatedRoute: ActivatedRoute, router: Router, dialog: MatDialog, snack: MatSnackBar) {
    super(service, router, <%= classify(name) %>, activatedRoute, dialog, snack);
  }

}
