import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
	Homepage,
	QuizPage,
	RulesPage,
	Login,
	Signup,
	ResultsPage,
} from "./screens";
import { PrivateRoute } from "./component/PrivateRoute";

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route element={<PrivateRoute />}>
					<Route path='/rules' element={<RulesPage />} />
					<Route path='/quiz' element={<QuizPage />} />
					<Route path='/results' element={<ResultsPage />} />
				</Route>
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
			</Routes>
		</div>
	);
}

export default App;
