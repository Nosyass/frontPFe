import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient, HttpParams, HttpHeaders} from '@angular/common/http'
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Injectable({
  providedIn: 'root'
})
export class DeclarationService {
  private httpparams=new HttpParams();
 
  private headers = new HttpHeaders().set('Content-Type', 'application/json')
  private options = {headers: this.headers};
 
  constructor(private http:HttpClient) { }

  public findAll():Observable<any>{
    return  this.http.get("http://localhost:8888/ds/liste");
  }

  public findByCriteria(cleEmp:string,cleExp:string):Observable<any>{
  //  this.myParams.set("cleEmp",cleEmp);
  this.httpparams.set("cleEmp",cleEmp);
  //this.headers.append('')
    return  this.http.get("http://localhost:8888/ds/find"+"?cleEmp="+cleEmp+"&cleExp="+cleExp);
  }
}
