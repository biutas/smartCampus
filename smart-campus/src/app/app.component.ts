import { Component, OnInit } from '@angular/core';
import { api } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {

  constructor(private api:api) { 

  }
  title = 'smart-campus';
  salas: any[] = []

  ngOnInit(){
    this.api.getRooms().subscribe(salas => {
      this.salas = JSON.parse(JSON.stringify(salas))
      console.log(this.salas)
    })
  }
}

