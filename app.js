window.onload = function() {
  new Vue({
    el: "#app",
    methods: {
      createTodo: function(e) {
        e.preventDefault();
        const todo = { text: e.target.title.value, completed: false };
        this.todos = [...this.todos, todo];
      },
      toggleTodo: function(todo) {
        this.todos = this.todos.map(t => {
          if (t.text === todo.text) {
            return { ...t, completed: !t.completed };
          }
          return t;
        });
      },
      removeTodo: function(todo) {
        this.todos = this.todos.filter(t => t.text !== todo.text);
      },
    },
    data: {
      todos: [],
    },
  });
};

// todo component
Vue.component("todo-item", {
  props: ["todo"],
  template: "#todo-item",
  methods: {
    clickItem: function(e) {
      this.$emit("toggle", this.todo);
    },
    remove: function(e) {
      this.$emit("remove", this.todo);
    },
  },
});
