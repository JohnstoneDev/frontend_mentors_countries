import {
	useContext,
	useEffect
} from "react"

import { CountriesContext } from "../../Contexts/DataContext/DataContext"
import { ImageCard } from "../ImageCard/ImageCard"

 export const CountriesContainer = () => {
	const countries = useContext(CountriesContext)

	useEffect(() => {

	},[countries])

	return (
		<div className="desktop:grid desktop:grid-cols-4 ml-8 p-4 m-4 gap-x-6 gap-y-6 space-x-0 w-full items-center
		tablet:grid tablet:grid-cols-2">
			{
				countries.map((country) => {
					const indValue = countries.indexOf(country)
					return <ImageCard key={indValue} id={indValue} {...country} />
				})
			}
		</div>
	)
}