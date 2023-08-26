import { Routes, Route } from 'react-router-dom'

import { HomePage } from '../Pages/Home/HomePage'
import { Lost } from '../Pages/Lost/404'
import { SingleCountry } from '../Components/CountryInfo/SingleCountry'

export const Paths = () => {
	return (
			<Routes>
				<Route exact path='/' element={<HomePage />}/>
				<Route path="/country/:id" element={<SingleCountry />}/>
				<Route path="*" element={<Lost />} />
			</Routes>
	)
}