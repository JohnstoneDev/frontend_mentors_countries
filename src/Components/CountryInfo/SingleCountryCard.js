import { BackButton } from "../Navigation/BackButton"
import { SplitNumber } from "../../Actions/FindCountry"

// presentational component to help style a heading that has a span
export const HeadingWithSpan = ({ descriptor, info }) => {
	return(
		<h4><span className="font-semibold">{descriptor}:</span> {info}</h4>
	)
}

// Helper function that takes in an array of objects & extracts the
// name value to be displayed using the descriptor
const DisplayNameFromObjArray = ({ arr, descriptor }) => {
	let itemNames = []

	for (const item of arr) {
		itemNames = [...itemNames, item.name]
	}

	return (
		<div className="flex gap-2">
			<span className="font-semibold">{descriptor}:</span>
			<p>{itemNames.join(", ")}</p>
		</div>
	)
}

// presentational component to help style borders
const BorderDisplay = ({ borders }) => {

	return (
		<div className="mobile:grid mobile:gap-6 desktop:flex items-center">
			<span className="font-semibold"> Border Countries: </span>
				<div className="desktop:flex gap-4 flex-grow mobile:grid mobile:grid-cols-3">
					{ borders.map(border =>
					<h6
					className="p-1.5 rounded-md w-24 shadow-lg bg-dark-blue font-normal text-center"
					key={borders.indexOf(border)}>{border}</h6>)}
				</div>
		</div>
	)
}

// Presentations component to style a Single Country
export const SingleCountryCard = ({...country}) => {
	const {
		name, nativeName, region,
		subregion, population, capital,
		topLevelDomain, languages, flag,
		currencies, borders
	} = country

	return (
		<div className="space-y-16">
			<BackButton />
			<div className="desktop:grid desktop:grid-cols-2 min-h-fit">
				<img src={flag} alt=""  className="rounded-sm max-h-96 w-fit object-contain"/>

				<section className="flex flex-col gap-8 justify-between pt-6">
					<h1 className="text-3xl font-extrabold">{name}</h1>
					<article className="flex mobile:flex-col desktop:gap-8 mobile:gap-12 justify-between font-normal">
						<div className="space-y-3">
							<HeadingWithSpan descriptor={"Native Name"} info={nativeName}/>
							<HeadingWithSpan descriptor={"Population"} info={SplitNumber(population)}/>
							<HeadingWithSpan descriptor={"Region"} info={region}/>
							<HeadingWithSpan descriptor={"Sub Region"} info={subregion}/>
							<HeadingWithSpan descriptor={"Capital"} info={capital}/>
						</div>

						<div className="space-y-3">
							<HeadingWithSpan descriptor={"Top Level Domain"} info={topLevelDomain}/>
							 <DisplayNameFromObjArray arr={currencies === undefined ? [] : currencies} descriptor={"Currencies"} />
							 <DisplayNameFromObjArray arr={languages === undefined ? [] : languages} descriptor={"Languages"} />
						</div>
					</article>

					<BorderDisplay borders={borders === undefined? [] : borders} />
				</section>
			</div>
		</div>
	)
}
