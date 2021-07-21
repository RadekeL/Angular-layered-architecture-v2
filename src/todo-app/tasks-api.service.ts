import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task.interface';
// import { Task } from

@Injectable({
  providedIn: 'root'
})
export class TasksApiService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get tasks
   */
  public getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(
      `https://jsonplaceholder.typicode.com/todos`
    );
  }
}
