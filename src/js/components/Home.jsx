import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const[task, setTask] = useState("")

	const [toDos,setToDos] = useState([]);

	const addToList = (event) => {
		if(event.key == "Enter" && task!=""){
			setToDos(
				[...toDos,
				task]
			)
			setTask("")
		}
	}

	const changeController=(event)=>{
		setTask(
			event.target.value
		)

	}

	const eliminateElement= (position) =>{
		const result = toDos.filter((item,index) => index!=position )
		setToDos(result)
	}

	return (
		<div className="container m-5 ">
			<div className="row d-flex justify-content-center align-items-center text-center">
				<h1 className="text-center">
					todos
				</h1>
				<div className="col-12">
					<form action="" className="form-control form-control-lg" onSubmit={(event) => event.preventDefault()}>
						<input type="text"
							placeholder="What needs to be done?"
							name="task"
							onChange={changeController}
							value={task}
							onKeyDown={addToList}
						/>
					</form>
				</div>
				<ul>
					{
						toDos.map((value,index) => {
							return(
								<li key={index} className="border rounded">{value}
									<i className="fa-solid fa-xmark" onClick={() => eliminateElement(index)}></i>
								</li>
							)
						})
					}
				</ul>
			</div>
			<h6 className="text-center border-bottom">item left {toDos.length}</h6>

		</div>

	);
};

export default Home;