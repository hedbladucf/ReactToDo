import _ from 'lodash';
import React from 'react';
import TodoslistHeader from './todos-list-header';
import TodosListItem from './todos-list-item';


export default class TodosList extends React.Component {
	renderItems() {
		const props = _.omit(this.props, 'todos');

		return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props} />);
	}

	render() {
		return (
			<table>
				<TodoslistHeader />
				<tbody>
					{this.renderItems()}
				</tbody>
			</table>
		);
	}
}