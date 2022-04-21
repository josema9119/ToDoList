import React, { useState } from "react";
import List from "./list.js";
import { useEffect } from "react/cjs/react.production.min";

const Home = () => {
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);

	const addTask = () => {
		setList([...list, task]);
		setTask("");
	};
	const deleteTask = (indexList) => {
		setList(() => list.filter((value, index) => index !== indexList));
	};
	return (
		<div className="container bg-light justify-content-center">
			<h1 className=" mx-auto text-center">Todo´s List</h1>
			<input
				onChange={(e) => setTask(e.target.value)}
				value={task}
				type="text"
				className="col-4 border-0 d-flex self-align-center"
				placeholder="Task"
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						task !== "" && task !== " "
							? setList([...list, task])
							: null;
						setTask("");
					}
				}}></input>
			<ul className="list-group">
				{list.map((task, index) => (
					<List
						key={index}
						inputTask={task}
						quit={() => deleteTask(index)}
					/>
				))}

				<span className="col-4 border-0 shadow p-3 bg-white">
					{list.length === 0
						? "No task, add a task"
						: list.length + " item left"}
				</span>
			</ul>
		</div>
	);
};

export default Home;
