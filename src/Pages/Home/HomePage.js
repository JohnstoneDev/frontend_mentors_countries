import { SearchBar } from "../../Components/Filtering/SearchBar"
import { FilterDropDown } from "../../Components/Filtering/FilterDropDown/FilterDropDown"
import { CountriesContainer } from "../../Components/CountriesContainer/CountriesContainer"


export const HomePage = () => {
	return (
		<div className="space-y-4">
			<div
				className="desktop:flex desktop:flex-row mobile:flex mobile:flex-col desktop:items-center justify-between desktop:p-2.5 desktop:m-2.5
				mobile:p-4 mobile:m-6">
				<SearchBar />
				<FilterDropDown />
			</div>
			<CountriesContainer />
		</div>
	)
}

