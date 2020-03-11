import { Component, OnInit } from '@angular/core';
import { <%=classify(name)%> } from '../<%=dasherize(name)%>-model/<%=dasherize(name)%>';
import { <%=classify(name)%>Service } from '../<%=dasherize(name)%>-service/<%=dasherize(name)%>.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractListComponent } from 'src/app/abstract/abstract-component/abstract-list';
import { AbstractFormComponent } from 'src/app/abstract/abstract-component/abstract-form';
import { FormControl, Validators, NgModel } from '@angular/forms';

@Component({
  selector: 'app-<%=dasherize(name)%>-form',
  templateUrl: './<%=dasherize(name)%>-form.component.html',
  styleUrls: ['./<%=dasherize(name)%>-form.component.css']
})
export class <%=classify(name)%>FormComponent extends AbstractFormComponent<<%=classify(name)%>, <%=classify(name)%>Service> implements OnInit {

  constructor(
    service: <%=classify(name)%>Service,
    router: Router,
    activatedRoute: ActivatedRoute,
    dialog: MatDialog,
    snack: MatSnackBar
  ) {
    super(service, <%=classify(name)%>, router, activatedRoute, dialog, snack);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}

