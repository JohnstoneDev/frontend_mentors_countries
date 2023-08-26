import {
	useParams
} from "react-router-dom"

import { useEffect } from "react";

import { FindCountry } from "../../Actions/FindCountry";

import { SingleCountryCard } from "./SingleCountryCard";


export const SingleCountry = () => {
	const { id } = useParams();

	const country = FindCountry(id)

	useEffect(() => {

	},[id])

	return (
		<div className="p-6 m-6">
			<SingleCountryCard {...country} />
		</div>
	)
}