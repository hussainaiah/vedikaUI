import { Observable,} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { SecurityModel } from '../models/security.model';

@Injectable({
  providedIn: 'root'
})
export class OwnerloginService {

constructor(private _http: HttpClient) { }
 
baseUrl = 'http://localhost:8057/api/login/verification?mobileNumber=%2B'; 

addmobileNumber(mobileNumber:SecurityModel): Observable<SecurityModel> {
  
return this._http.post<SecurityModel>(this.baseUrl, mobileNumber, {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
})
            

}
}