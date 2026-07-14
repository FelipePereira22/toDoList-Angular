import { Component, signal, computed } from '@angular/core';
import { DefaultList } from './list.interface';

import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';


@Component({
  selector: 'app-to-do-list',
  imports: [ReactiveFormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {

    listToDo = signal<DefaultList[]>([
    { id: 1, title: 'Estudar angular', category: 'Estudos', status: false },
    { id: 2, title: 'Enviar planilha',category: 'Trabalho',status: false,},
    { id: 3, title: 'Varrer quarto', category: 'Casa', status: false },
  ]);

  conclude(receivedId: number) {
  this.listToDo.update((lista) =>
    lista.map((item) =>
      item.id === receivedId ? { ...item, status: !item.status } : item
    )
  );
}

  delete(receivedID: number) {
    this.listToDo.set(
      this.listToDo().filter((itemDelete) => itemDelete.id != receivedID),
    );
  }

  progressList = computed(() => {
    const lista = this.listToDo();
    const total = lista.length;
    const concludeList = lista.filter((item) => item.status).length;

    return `${concludeList} de ${total} concluídas.`;
  });

  newForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    category: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
  });

  addTask() {
    if (this.newForm.invalid) return;

    const newObj = {
      id: Date.now(),
      title: this.newForm.value.title!,
      category: this.newForm.value.category!,
      status: false,
    };

    this.listToDo.update((currentList) => [...currentList, newObj]);
    this.newForm.reset();
  }
}
