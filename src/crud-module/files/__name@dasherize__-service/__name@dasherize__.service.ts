import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/abstract/abstract-service/crud-service/crud.service';
import { <%= classify(name) %> } from '../<%=dasherize(name)%>-model/<%=dasherize(name)%>';
import { HttpClient } from '@angular/common/http';
import { CONSTANT_URL } from 'src/app/constant/constant-rest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>Service extends CrudService<<%= classify(name) %>> {

  constructor(http: HttpClient) {
    super(http, CONSTANT_URL.<%= name.toUpperCase() %>);
  }
  getAllWithoutPermission(): Observable<any>{
    return this.http.get(CONSTANT_URL.BASE_URL + CONSTANT_URL.<%= name.toUpperCase() %> + 'noprofile');
  }
}

// TODO: É necessário criar a constante no arquivo de constantes
// TODO: Também ainda é necessário incluir no arquivo de rotas