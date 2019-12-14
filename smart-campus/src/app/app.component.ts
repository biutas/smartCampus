import { Component, OnInit } from '@angular/core';
import { api } from './app.service';
import * as moment from 'moment';
import 'moment/locale/pt-br';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private api:api) { 
    moment().locale('PT-BR')
  }
  title = 'smart-campus';
  courses: any[] = []
  computers: any[] = []
  menu: any[] = []
  today = moment()
  hours: any[] = [{'hour':8},{'hour':9},{'hour':10},{'hour':11},{'hour':12},{'hour':13},{'hour':14},{'hour':15},{'hour':16},{'hour':17},{'hour':18},{'hour':19},{'hour':20},{'hour':21},{'hour':22},{'hour':22},{'hour':22},{'hour':22},]
  tab = 'salas'

  ngOnInit(){ 
    this.search()
  }

  search(){
    let start_time = moment(this.today).hour(0).minute(0).seconds(0).unix()
    let end_time = moment(this.today).hour(23).minute(59).seconds(0).unix()
    this.api.getCourses(start_time, end_time).subscribe(courses => {
      let coursesList = JSON.parse(JSON.stringify(courses))
      coursesList.map(course => {        
          this.api.getCourseSchedule(start_time, end_time, course.name, course.period).subscribe(schedule =>{
            let scheduleList = JSON.parse(JSON.stringify(schedule))
            
            scheduleList.map(schedule => {
              schedule.start = Number(moment(schedule.start_time*1000).format('m')) * 10
              schedule.end = Number(moment(schedule.end_time*1000).format('m')) * 10
            })
            
            course.schedule = scheduleList
          })
      })
      this.courses = coursesList
    })
  }

  setDay(operator){
    this.today = moment(this.today).add(operator,'day')  
    this.search()
  }

  setTab(tab){
    this.tab = tab
    if(tab == 'pesquisa'){
      this.getResearchRoom()
    }else if(tab == 'menu'){
      this.getMenu()
    }
  }

  getResearchRoom(){
    this.api.getResearchRoom().subscribe(retorno => {
      this.computers = JSON.parse(JSON.stringify(retorno))
    })
  }
  
  getMenu(){
    this.api.getMenu().subscribe(retorno => {
      this.menu = JSON.parse(JSON.stringify(retorno))
    })
  }
}

