import { Routes, Route } from 'react-router-dom'

import { HomePage } from '../Pages/Home/HomePage'

export const Paths = () => {
	return (
			<Routes>
				<Route exact path='/' element={<HomePage />}/>
			</Routes>
	)
}