import { Component, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task: any;

  constructor(private taskService: TaskService) { }

  markAsComplete(): void {
    this.task.completed = true;
    this.taskService.updateTask(this.task).subscribe();
  }

  deleteTask(): void {
    this.taskService.deleteTask(this.task.id).subscribe();
  }
}
