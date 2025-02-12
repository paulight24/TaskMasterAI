import { Component } from '@angular/core';
import { SpeechService } from '../services/speech.service';
import { SharedModule } from '../shared/shared/shared.module';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [SharedModule],
})
export class TaskComponent {
  tasks: any[] = [];
  inputText: string = '';

  constructor(
    private speechService: SpeechService,
  ) { }

  ngOnInit() {
    this.loadTasks();
  }

  start() {
    this.speechService.speakText(this.inputText)
  }

  stop() {
    this.speechService.stop();
  }

  loadTasks() {
    // this.parseService.getTasks().subscribe(response => this.tasks = response['results']);
  }

  addTask() {
    if (this.inputText.trim()) {
      this.tasks.push({ title: this.inputText });
      this.inputText = ''; // Clear input field
    }
    // if (!this.inputText.trim()) return;

    // this.aiService.processText(this.inputText).subscribe(response => {
    //   const taskTitle = response['choices'][0]['message']['content'];
    //   this.parseService.createTask({ title: taskTitle }).subscribe(() => {
    //     this.tasks.push({ title: taskTitle });
    //     this.inputText = ''; // Clear input field
    //   });
    // });
  }

  async readTask(task: string) {
    console.log(`Reading task: ${task}`);
    await this.speechService.speakText(task);
  }

  async addTaskViaVoice() {
    // const spokenText = await this.speechService.startListening();
    // if (spokenText) {
    //   this.inputText = spokenText;
    //   this.addTask();
    // }
  }



  trackByFn(index: number, item: any) {
    return item.id;
  }

}

/*
import { Component, OnInit } from '@angular/core';
import { ParseService } from '../services/parse.service';
import { AiService } from '../services/ai.service';
import { SpeechService } from '../services/speech.service';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ExploreContainerComponent],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tasks: any[] = [];
  inputText: string = '';

  constructor(
    private parseService: ParseService,
    private aiService: AiService,
    private speechService: SpeechService
  ) { }

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.parseService.getTasks().subscribe(response => this.tasks = response['results']);
  }

  addTask() {
    if (!this.inputText.trim()) return;

    this.aiService.processText(this.inputText).subscribe(response => {
      const taskTitle = response['choices'][0]['message']['content'];
      this.parseService.createTask({ title: taskTitle }).subscribe(() => {
        this.tasks.push({ title: taskTitle });
        this.inputText = ''; // Clear input field
      });
    });
  }

  async addTaskViaVoice() {
    const spokenText = await this.speechService.startListening();
    if (spokenText) {
      this.inputText = spokenText;
      this.addTask();
    }
  }

  async readTask(task: string) {
    await this.speechService.speakText(task);
  }
}
*/


