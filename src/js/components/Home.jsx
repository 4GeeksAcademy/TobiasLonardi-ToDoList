import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [task, setTask] = useState("")

	const [toDos, setToDos] = useState([]);

	const addToList = (event) => {
		if (event.key == "Enter" && task.trim() != "") {
			setToDos(
				[...toDos,
					task]
			)
			setTask("")
		}
	}

	const changeController = (event) => {
		setTask(
			event.target.value
		)

	}

	const eliminateElement = (position) => {
		const result = toDos.filter((item, index) => index != position)
		setToDos(result)
	}

	return (
		<div className="container py-5  ">
			<div className="row justify-content-center">
				<h1 className="text-center text-body-secondary">
					todos
				</h1>
				<div className="col-12 col-md-7 shadow bg-body-tertiary p-0 m-0">
					<form action="" className="bg-body-tertiary" onSubmit={(event) => event.preventDefault()}>
						<input type="text"
							placeholder="What needs to be done?"
							className="form-control form-control-lg  bg-body-tertiary text-body-secondary"
							name="task"
							onChange={changeController}
							value={task}
							onKeyDown={addToList}
						/>
					</form>
					<ul className="">
						{
							toDos.map((value, index) => {
								return (
									<li key={index} className="border rounded text-body-secondary">{value}
									<span>
										<i className="fa-solid fa-xmark" onClick={() => eliminateElement(index)}></i>
									</span>
									</li>
								)
							})
						}
					</ul>
					<div className="d-flex justify-content-start align-items-center border rounded p-1">
					<h6 className="text-center text-body-secondary">item left {toDos.length}</h6>

					</div>

				</div>

			</div>

		</div>

	);
};

export default Home;