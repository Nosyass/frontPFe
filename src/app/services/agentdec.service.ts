import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient, HttpParams, HttpHeaders} from '@angular/common/http'
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Injectable({
  providedIn: 'root'
})
export class AgentdecService {
  private httpparams=new HttpParams();
 
  private headers = new HttpHeaders().set('Content-Type', 'application/json')
  private options = {headers: this.headers};
 
  constructor(private http:HttpClient) { }

  public findAll():Observable<any>{
    return  this.http.get("http://localhost:8888/assure/liste");
}




  public findByCriteria(employeur:string):Observable<any>{
  //  this.myParams.set("employeur",employeur);
  this.httpparams.set("employeur",employeur);
  //this.headers.append('')
    return  this.http.get("http://localhost:8888/assure/find"+"?employeur="+employeur);
  }
}
