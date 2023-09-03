new Vue({
  el: "#app",
  data: {
    newTodo: "",
    todos: [
      {
        text: "Fare la spesa",
        done: true,
      },
      {
        text: "Fare la lavatrice",
        done: true,
      },
      {
        text: "Fare il carosello",
        done: false,
      },
      {
        text: "Preparare la cena",
        done: true,
      },
    ],
  },
  methods: {
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    addTodo() {
      if (this.newTodo !== "") {
        this.todos.push({ text: this.newTodo, done: false });
        this.newTodo = "";
      } else {
        console.log("Non hai inserito nulla.");
      }
    },
  },
});
