import React from 'react';
import CreateTodo from './create-todo';
import Todoslist from './todos-list';

const todos = [{
	task: 'complete tutorial',
	isCompleted: false
},
{
	task: 'cook dinner',
	isCompleted: true
}];

// VIDEO CONTINUE: 41.32
export default class App extends React.Component {
	constructor(props) {
		super(props);

		// todos: todos ---- below line does same thing as just
		this.state = {
			todos: todos
		};
	}

	render() {
		return (
			<div>
				<h1>React ToDo App</h1>
				<CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
				<Todoslist 
					todos={this.state.todos}
					toggleTask={this.toggleTask.bind(this)}
					saveTask={this.saveTask.bind(this)}
					deleteTask={this.deleteTask.bind(this)}
				/>
			</div>
		);
	}

	toggleTask(task) {
		const foundTodo = _.find(this.state.todos, todo => todo.task === task);
		foundTodo.isCompleted = !foundTodo.isCompleted;
		this.setState({ todos: this.state.todos });
	}

	createTask(task) {
		// task: task ---- 
		this.state.todos.push({
			task: task,
			isCompleted: false
		});
		this.setState({ todos: this.state.todos });
	}

	saveTask(oldTask, newTask) {
		const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
		foundTodo.task = newTask;
		this.setState({ todos: this.state.todos });
	}

	deleteTask(taskToDelete) {
		_.remove(this.state.todos, todo => todo.task === taskToDelete);
		this.setState({ todos: this.state.todos });
	}
}