import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map, tap } from 'rxjs/operators';
import { TaskInterface } from '../interfaces/tasks.interface';

@Injectable({
  providedIn: 'root'
})
export class ParseService {
  private headers = new HttpHeaders({
    'X-Parse-Application-Id': environment.parseAppId,
    'X-Parse-REST-API-Key': environment.parseRESTApiKey,
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  // Get all tasks
  getTasks(): Observable<TaskInterface[]> {
    return this.http.get<{ results: TaskInterface[] }>(`${environment.parseServerUrl}classes/Task`, { headers: this.headers })
      .pipe(
        map(response => response.results),
        tap(tasks => console.log('Fetched tasks:', tasks))
      );
  }

  // Create a new task
  createTask(task: TaskInterface): Observable<TaskInterface> {
    return this.http.post<TaskInterface>(`${environment.parseServerUrl}classes/Task`, task, { headers: this.headers })
      .pipe(
        tap(newTask => console.log('Task created:', newTask))
      );
  }

  // Update an existing task
  updateTask(taskId: string, task: Partial<TaskInterface>): Observable<TaskInterface> {
    return this.http.put<TaskInterface>(`${environment.parseServerUrl}classes/Task/${taskId}`, task, { headers: this.headers })
      .pipe(
        tap(updatedTask => console.log('Task updated:', updatedTask))
      );
  }

  // Delete a task
  deleteTask(taskId: string): Observable<void> {
    return this.http.delete<void>(`${environment.parseServerUrl}classes/Task/${taskId}`, { headers: this.headers })
      .pipe(
        tap(() => console.log('Deleted task:', taskId))
      );
  }

  // Process text with AI before creating a task
  processTextWithAI(inputText: string): Observable<string> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${environment.openAiApiKey}`,
      'Content-Type': 'application/json'
    });

    return this.http.post<{ choices: { text: string }[] }>(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: `Extract task details from this text: "${inputText}"`,
        max_tokens: 150
      },
      { headers }
    ).pipe(
      map(response => response.choices[0].text.trim()),
      tap(response => console.log('AI Processed Task:', response))
    );
  }
}

/*
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class ParseService {
  private headers = new HttpHeaders({
    'X-Parse-Application-Id': environment.parseAppId,
    'X-Parse-REST-API-Key': environment.parseRESTApiKey,
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any[]> {
    return this.http.get<{ results: any[] }>(`${environment.parseServerUrl}classes/Task`, { headers: this.headers })
      .pipe(
        map(response => response.results), // Extract results array
        tap(tasks => console.log('Tasks:', tasks))
      );
  }

  createTask(task: any): Observable<any> {
    return this.http.post(`${environment.parseServerUrl}classes/Task`, task, { headers: this.headers });
  }

  updateTask(taskId: string, task: any): Observable<any> {
    return this.http.put(`${environment.parseServerUrl}classes/Task/${taskId}`, task, { headers: this.headers });
  }

  deleteTask(taskId: string): Observable<void> {
    console.log('Deleting task:', taskId);
    return this.http.delete<void>(`${environment.parseServerUrl}classes/Task/${taskId}`, { headers: this.headers });
  }

  processTextWithAI(input: string): Observable<string> {
    const openAIHeaders = new HttpHeaders({
      'Authorization': `Bearer ${environment.openAiApiKey}`,
      'Content-Type': 'application/json'
    });

    return this.http.post<any>('https://api.openai.com/v1/completions', {
      model: 'text-davinci-003',
      prompt: `Extract task details from this text: "${input}"`,
      max_tokens: 150
    }, { headers: openAIHeaders }).pipe(
      map(response => response.choices[0].text.trim())
    );
  }

  async getTasks1(): Promise<any[]> {
    const Task = Parse.Object.extend('Task');
    const query = new Parse.Query(Task);
    try {
      const results = await query.find();
      return results.map(task => ({
        id: task.id,
        ...task.toJSON()
      }));
    } catch (error) {
      console.error('Error retrieving tasks:', error);
      return [];
    }
  }

  async createTask1(task: { title: string; description?: string }) {
    const Task = Parse.Object.extend('Task');
    const newTask = new Task();
    newTask.set('title', task.title);
    newTask.set('description', task.description || '');

    try {
      await newTask.save();
      console.log('Task created successfully');
    } catch (error) {
      console.error('Error creating task:', error);
    }
  }
}

*/


/*
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParseService {

  private headers = new HttpHeaders({
    'X-Parse-Application-Id': environment.parseAppId,
    'X-Parse-REST-API-Key': environment.parseRESTApiKey,
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get(`${environment.parseServerUrl}classes/Task`, { headers: this.headers });
  }

  createTask(task: any) {
    return this.http.post(`${environment.parseServerUrl}classes/Task`, task, { headers: this.headers });
  }

  updateTask(taskId: string, task: any) {
    return this.http.put(`${environment.parseServerUrl}classes/Task/${taskId}`, task, { headers: this.headers });
  }

  deleteTask(taskId: string) {
    return this.http.delete(`${environment.parseServerUrl}classes/Task/${taskId}`, { headers: this.headers });
  }
}
*/
