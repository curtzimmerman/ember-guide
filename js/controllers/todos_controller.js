Todos.TodosController = Ember.ArrayController.extend({
	actions: {
		createTodo: function() {
			// Get the todo title set by the new todo text field
			var title = this.get('newTitle');
			if (!title.trim()) { return; }

			// Create the todo model instance
			var todo = this.store.createRecord('todo', {
				title: title,
				isCompleted: false
			});

			// Clear the 'new todo' text field
			this.set('newTitle', '');

			// Save the new model
			todo.save();
		}
	}
})