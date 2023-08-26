import { useContext } from "react"

import { CountriesContext } from "../Contexts/DataContext/DataContext"

// Helper function that finds a country
export const FindCountry = (id) => {
	const countries = useContext(CountriesContext)

	const country = countries[id]

	return country
}

// Helper function that splits a number every three digits
export const SplitNumber = (number) =>  {
	const numberString = number.toString();
	const parts = [];

	for (let i = numberString.length; i > 0; i -= 3) {
			const startIndex = Math.max(0, i - 3);
			const part = numberString.slice(startIndex, i);
			parts.unshift(part);
	}

	return parts.join(',');
}