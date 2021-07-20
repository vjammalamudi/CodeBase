
import React, { useState, Fragment, useEffect } from 'react';
import {connect} from 'react-redux';
import store from '../../store';
import { todoGet} from '../../api/api';
import '../../../styles/styles.css';

todoGet()

function Todoinfo(props, userId) {
	const [name, setName] = useState(false);
	const onSubmit = (evt) => {
		if (name === false) {
			setName(true)
		} else {
			setName(false)
		}
	}

	let list, arr = props.todoData.todolist;
	list = arr.filter ( key => {
		return key.userId == props['userID']
	});

	let updatedList = [];
	for (let i = 0; i < list.length; i++) {
		updatedList.push(<tr className={name ? 'todo-list-row-dark' : "todo-list-row-light"} style={{ color: list[i].completed ? 'green' : 'red' }} key={i}><td align='left'>{list[i].title}</td><td align='left'>{ list[i].completed ? '✔' : '✘' }</td></tr>)
	}

	return(
		<div className="todo-list-container">
			<h3>Todo list </h3>
			<input type="checkbox" checked = {name} id = "defaultCheck" onChange = {onSubmit} />
			<label >Apply Dark Theme</label>		
			<table className="todo-list-table">
				<tbody >
					<tr className={name ? 'todo-list-row-dark' : "todo-list-row-light"}><th> Title </th><th>status</th></tr>
					{updatedList}
				</tbody>
			</table>
		</div>
	);
}

const mapStateToProps = (state) => {
	return { todoData:state.todo }
}

export default connect(mapStateToProps, null)( Todoinfo);