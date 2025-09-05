import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from 'src/app/todo';
interface Task {
  itemName: '';
  itemDueDate: string;
  itemPriority: string;
  itemCategory: string;
}

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
  standalone: false,
})
export class AddNewTaskPage implements OnInit {
  categories = ['work', 'personal', 'office'];

  taskName: string = '';
  taskDate: string = '';
  taskPriority: string = '';
  taskCategory: string = '';

  taskObject!: Task;

  constructor(public modalCtrl: ModalController, public todo: TodoService) {}

  ngOnInit() {}

  async dismiss(data?: any) {
    await this.modalCtrl.dismiss(data);
  }

  selectedCategory(index: number) {
    this.taskCategory = this.categories[index];
  }

  async AddTask() {
    this.taskObject = {
      itemName: this.taskName,
      itemDueDate: this.taskDate,
      itemPriority: this.taskPriority,
      itemCategory: this.taskCategory,
    };

    console.log(this.taskObject);

    let uid = this.taskName + this.taskDate;
    if (uid) {
      await this.todo.addTask(uid, this.taskObject);
    } else {
      console.log('cant save emoty task');
    }

    this.dismiss(this.taskObject);
  }
}

