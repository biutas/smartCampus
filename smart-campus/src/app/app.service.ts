import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class api {
  constructor(private http: HttpClient) { }
  
  getCourses(start_time, end_time){
    return this.http.post('/api/getCourses',
    {
      start_time: start_time,
      end_time: end_time
    })
  }

  getCourseSchedule(start_time, end_time, course, period){
    return this.http.post('/api/getCourseSchedule',
    {
      start_time: start_time,
      end_time: end_time,
      course: course,
      period: period
    })
  }

  getResearchRoom(){
    return this.http.get('https://researchroom-backend.herokuapp.com/computers')
  }

  

}

