import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient, HttpParams, HttpHeaders} from '@angular/common/http'
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Injectable({
  providedIn: 'root'
})
export class EmployeurService {

  constructor(private http:HttpClient) { }

  public findAll():Observable<any>{
    return  this.http.get("http://localhost:8888/employeur/liste");
}

}
