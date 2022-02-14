import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Client';

  // Link to our api, pointing to localhost
  API = 'http://localhost:3000';

  // Declare empty list of tasks
  tasks: any[] = [];

  constructor(private http: HttpClient) {}

  // Angular 2 Life Cycle event when component has been initialized
  ngOnInit() {
    this.getAllTasks();
  }

  // Add one task to the API
  addTasks(task: string, description: string) {
    this.http.post(`${this.API}/tasks`, {task, description})
      .subscribe((data: any) => {
        this.getAllTasks();
      }, (error: any) => {console.log(error);});
  }

  // Get all task from the API
  getAllTasks() {
    this.http.get(`${this.API}/tasks`)
      .subscribe((task : any )=> {
        console.log(task)
        this.tasks = task
      }, (error: any) => {console.log(error);});
  }
}