import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';

import { HomePage } from "./HomePage.tsx";
import Watches from "./components/Watches/Watches.tsx";
import Crud from "./components/Crud/Crud.tsx";


function App() {

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/watches" element={<Watches />} />
					<Route path="/crud" element={<Crud />} />
				</Routes>
			</BrowserRouter>

		</div>
	)
}

export default App
