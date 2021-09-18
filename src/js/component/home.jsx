import React, { useState } from "react";

//create your first component
const Home = () => {
	const [task, setTask] = useState("");
	const [pend, setPend] = useState("");

	const validar = () => {};

	return (
		<div className="container text-center mt-5">
			<h1>ToDos!</h1>
			<div className="input-group mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="What needs to be done?"
					aria-label="Recipient username"
					aria-describedby="basic-addon2"
					onChange={e => setTask(e.target.value)}
					value={task}
				/>
				<div className="input-group-append">
					<span className="input-group-text" id="basic-addon2">
						Add
					</span>
				</div>
			</div>
			<div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">Cras justo odio</li>
					<li className="list-group-item">Dapibus ac facilisis in</li>
					<li className="list-group-item">Morbi leo risus</li>
					<li className="list-group-item">Porta ac consectetur ac</li>
					<li className="list-group-item">Vestibulum at eros</li>
				</ul>
			</div>
			<div className="footer-basic">
				<footer>
					<p className="copyright">Company Name © 2018</p>
				</footer>
			</div>
		</div>
	);
};

export default Home;
