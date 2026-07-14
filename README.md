# 📝 Lista de Tarefas Reativa | Angular

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

Uma aplicação web moderna para gerenciamento de tarefa desenvolvida com foco nas arquiteturas e ferramentas mais recentes do **Angular**. O projeto abandona abordagens antigas para adotar gerenciamento de estado baseado em **Signals** e validação com **Reactive Forms**.

---

## ✨ Funcionalidades

* **Criação de Tarefas:** Adição inteligente de tarefas divididas por Título e Categoria.
* **Validação em Tempo Real:** Botão de envio desabilitado automaticamente até que o formulário cumpra as regras de validação (máximo de 20 caracteres e campos obrigatórios).
* **Gestão de Estado Reativa:** Conclusão, desmarcação e exclusão de tarefas com atualização instantânea na interface sem recarga de componentes.
* **Contador Inteligente:** Rodapé calcula em tempo real o progresso das atividades (ex: *"2 de 5 concluídas"*).
* **UI/UX em Dark Mode:** Interface desenhada com alto contraste, feedback visual em botões (cores dinâmicas para conclusão e alerta) e texto riscado para tarefas finalizadas.
* **Fallback de Estado Vazio:** Mensagem renderizada automaticamente quando não há tarefas na lista.

---

## 🛠️ Destaques Técnicos e Arquitetura

Este projeto foi construído para colocar em prática os conceitos estudados em Angular:

| Conceito Utilizado | Onde foi aplicado | Benefício Técnico |
| :--- | :--- | :--- |
| **Angular Signals (`signal`)** | Armazenamento do array `listToDo` | Reatividade de alta performance sem necessidade de bibliotecas externas como NgRx ou RxJS complexo. |
| **Computed Signals (`computed`)** | Método `progressList()` | Cálculo automático de progresso que só é reexecutado quando o array de tarefas sofre mutação real. |
| **Reactive Forms** | `FormGroup` e `FormControl` | Controle imutável dos dados do formulário, com regras rígidas de validação via `Validators`. |
| **Control Flow (`@for` / `@empty`)** | Renderização dos cards no HTML | Substituição do antigo `*ngFor` pela nova sintaxe nativa do motor do Angular, garantindo melhor performance de renderização. |
