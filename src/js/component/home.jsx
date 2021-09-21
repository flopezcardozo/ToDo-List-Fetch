import { instanceOf } from "prop-types";
import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
	const [task, setTask] = useState("");
	const [pend, setPend] = useState([]);

	const deleteItems = indexItem => {
		setPend(prevState =>
			prevState.filter((todo, index) => index !== indexItem)
		);
	};

	const URLBASE = "https://assets.breatheco.de/apis/fake/todos";

	useEffect(() => {
		let userUrl = URLBASE + "/user/flopez";
		fetch(userUrl)
			.then(response => response.json())

			.then(info => {
				setPend(info);
				console.log(info);
			})

			.catch(supererror => console.log("Se rompió"));
	}, []);

	const agregarTarea = arrayTareas => {
		let userUrl = URLBASE + "/user/flopez";
		fetch(userUrl, {
			method: "PUT",
			body: JSON.stringify(arrayTareas),
			headers: {
				"Content-Type": "application/json"
			}
		});
		fetch(userUrl)
			.then(response => response.json())

			.then(info => {
				setPend(info);
				console.log(info);
			})

			.catch(supererror => console.log("Se rompió"));
	};

	return (
		<div className="container text-center mt-5">
			<h1>ToDos List!</h1>
			<div className="input-group mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="What needs to be done?"
					aria-label="Recipient username"
					aria-describedby="basic-addon2"
					value={task}
					onKeyDown={e => {
						if (e.keyCode == "13") {
							let mostrarLista = [];
							for (let i = 0; i < pend.length; i++) {
								mostrarLista.push(pend[i]);
							}
							mostrarLista.push({ label: task, done: false });
							agregarTarea(mostrarLista);
							//setPend(mostrarLista);
							setTask((e.target.value = ""));
						}
					}}
					onChange={e => {
						setTask(e.target.value);
					}}
				/>
			</div>
			<div>
				<ul className="list-group list-group-flush">
					{pend.map((items, index) => {
						return (
							<>
								<li key={index} className="list-group-item">
									{items.label}
									<button
										className="btn btn-light"
										onClick={e => {
											deleteItems(index);
										}}>
										<i
											className="fa fa-times"
											aria-aria-hidden="true"
										/>
									</button>
								</li>
							</>
						);
					})}
				</ul>
			</div>
			<div className="footer-basic">
				<p className="card-footer text-muted">
					Items pendientes: {pend.length}
				</p>
			</div>
		</div>
	);
};

export default Home;
