import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskInterface } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css'],
})
export class TasksItemComponent implements OnInit {
  @Input() task: TaskInterface;
  @Output() onDeleteTask: EventEmitter<TaskInterface> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<TaskInterface> = new EventEmitter();

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: TaskInterface) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: TaskInterface) {
    this.onToggleReminder.emit(task);
  }
}
