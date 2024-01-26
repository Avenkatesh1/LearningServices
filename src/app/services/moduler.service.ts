import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModulerService implements OnInit{

  constructor(private http:HttpClient) { }
  getAlluser(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  ngOnInit(): void {
    
  }
}
