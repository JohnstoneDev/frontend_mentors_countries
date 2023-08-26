import { Link } from "react-router-dom"

import { SplitNumber } from "../../Actions/FindCountry"
import { HeadingWithSpan } from "../CountryInfo/SingleCountryCard"

export const ImageCard = ({ flag, name, population, region, capital, id }) => {
	return (
		<div className="rounded-lg m-2 flex flex-col h-[450px] max-w-[300px] bg-dark-blue shadow-md text-sm">
			<img src={flag} alt="" className="object-cover min-h-[200px] max-h-[200px] max-w-[300px] rounded-t-lg"/>
			<Link to={`/country/${id}`}>
				<section className="flex flex-col gap-6 p-2.5">
					<h3 className="font-extrabold text-ellipsis text-xl leading-loose tracking-wider">{name}</h3>
					<article className="font-regular flex flex-col gap-2 space-y-2">
						<HeadingWithSpan descriptor={"Population"} info={SplitNumber(population)} />
						<HeadingWithSpan descriptor={"Region"} info={region} />
						<HeadingWithSpan descriptor={"Capital"} info={capital} />
				</article>
				</section>
			</Link>
		</div>
	)
}