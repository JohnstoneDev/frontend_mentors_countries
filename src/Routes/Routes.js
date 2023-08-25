import { Routes, Route } from 'react-router-dom'

import { HomePage } from '../Pages/Home/HomePage'
import { Lost } from '../Pages/Lost/404'

export const Paths = () => {
	return (
			<Routes>
				<Route exact path='/' element={<HomePage />}/>
				<Route path="*" element={<Lost />} />
			</Routes>
	)
}