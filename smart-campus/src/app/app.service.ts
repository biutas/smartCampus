import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class api {
  constructor(private http: HttpClient) { }
  
  getRooms(){
    return this.http.post('/api/getRooms',
    {})
  }

}

