/**
 * Helper Functions for working with countries
 * These Interact with context directly (NOT ADVISABLE!! USE REDUCER && DISPATCH IN COMPLETE PROJECT)
 */

import { useContext } from "react"

import { CountriesContext } from "../Contexts/DataContext/DataContext"

// Helper function that finds a country according to its id
export const FindCountry = (id) => {
	const countries = useContext(CountriesContext)

	const country = countries[id]

	return country
}

// Helper Function that finds a country by its name & returns
// an id to be used to redirect to a single country page
export const FindCountryByName = (name) => {
	const countries = useContext(CountriesContext);

	const id = countries.findIndex((country) => country.name === name)

	return id
}

// Helper function that takes in a country's alpha23 code & returns its
// full name (To be used to display a country's borders)
export const FindCountryAlpha3Code = (code) => {
	const countries = useContext(CountriesContext);

	const name = countries.find((country) => country.alpha3Code === code).name

	return name
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