import React, { useState } from "react";

const Home = () => {
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);

	let toDo = list.length;
	if (toDo === 0) {
		toDo = "Ninguna tarea";
	} else {
		toDo = list.length + " Tareas añadidas";
	}
	const addTask = () => {
		setList([...list, task]);
		setTask("");
	};
	return (
		<div className="back">
			<div className="container">
				<h1 className="row mx-auto">Lista de tareas</h1>
				<div className="d-table-row mx-auto">
					<div className="input-group mb-3">
						<button
							className="input-group-text"
							id="basic-addon1"
							onClick={addTask}>
							Añadir Tarea
						</button>
						<input
							onChange={(e) => setTask(e.target.value)}
							value={task}
							type="text"
							className="form-control"
							placeholder="Tarea"
							aria-label="Username"
							aria-describedby="basic-addon1"></input>
					</div>
					<table class="table table-success table-striped">
						<tbody>
							{list.map((tasks, index) => (
								<tr key={index}>{tasks}</tr>
							))}
						</tbody>
					</table>
					{list.length}
				</div>
			</div>
		</div>
	);
};

export default Home;
