import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab2Page } from './tab2.page';
import { TaskInterface } from '../interfaces/tasks.interface';

const sampleTask: TaskInterface = {
  user: {
    "__type": "Pointer",
    "className": "_User",
    "objectId": "pnD9XLYwGS"
  },
  title: 'Sample Task',
  description: 'This is a sample task created on button click',
  priority: 1,
  status: 'pending'
};

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
