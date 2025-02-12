import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AiService {
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${environment.openAiApiKey}`,
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  processText(input: string) {
    return this.http.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-4',
      messages: [{ role: 'system', content: 'Extract structured tasks from user input.' },
      { role: 'user', content: input }],
      max_tokens: 150
    }, { headers: this.headers });
  }
}

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AiService {

//   constructor() { }
// }
