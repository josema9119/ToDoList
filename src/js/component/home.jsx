import React, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";

const Home = () => {
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);

	const addTask = () => {
		setList([...list, task]);
		setTask("");
	};
	return (
		<div className="container bg-light d-block justify-content-center">
			<h1 className=" mx-auto text-center">Lista de tareas</h1>

			<input
				onChange={(e) => setTask(e.target.value)}
				value={task}
				type="text"
				className="col-4 border-0 d-flex self-align-center"
				placeholder="Tarea"
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						task !== "" && task !== " "
							? setList([...list, task])
							: null;
						setInput("");
					}
				}}></input>
			<table class="table table-success table-striped">
				<tbody>
					{list.map((tasks, index) => (
						<tr
							key={index}
							className="d-flex align-items-start flex-column bd-highlight mb-3">
							{tasks}
							<button
								onClick={() => {
									setList(list.filter((a, b) => b != index));
								}}
								className="button border-0 rounded mb-auto p-2 bd-highlight">
								x
							</button>
						</tr>
					))}
				</tbody>
			</table>
			{list.length + " Tareas añadidas"}
		</div>
	);
};

export default Home;
