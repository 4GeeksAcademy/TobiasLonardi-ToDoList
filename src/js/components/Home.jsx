import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const[task, setTask] = useState("")

	const [toDos,setToDos] = useState([]);

	const addToList = (event) => {
		if(event.key == "Enter"){
			setToDos(
				...toDos,
				task
			)
		}
	}

	const changeController=(event)=>{
		setTask(
			event.target.value
		)
		console.log(task)

	}

	return (
		<div className="container m-5 ">
			<div className="row d-flex justify-content-center align-items-center">
				<h1 className="text-center">
					todos
				</h1>
				<div className="col-12 border">
					<form action="">
						<input type="text"
							placeholder="What needs to be done?"
							name="task"
							onChange={changeController}
							onKeyDown={addToList}
						/>
					</form>
				</div>
				<ul>
					{
						toDos.map((value,index) => {
							return(
								<li key={index}>{value} </li>
							)
						})
					}
				</ul>
			</div>
		</div>

	);
};

export default Home;