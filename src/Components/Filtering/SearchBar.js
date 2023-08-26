import {
	useState
} from "react"


export const SearchBar = () => {
	const [ searchTerm, setSearchTerm ] = useState("");

	const handleChange = (e) => {
		e.preventDefault();
		setSearchTerm(e.target.value)
	}

	return (
		<form className="p-4">
			<div
			 className="flex items-center gap-4 space-x-2 pl-4 p-0.5 rounded-md bg-dark-blue text-white desktop:min-w-[500px] shadow-lg">
				<span className="pt-1 m-1 text-[20px]">
					<ion-icon name="search"></ion-icon>
				</span>
				<input
					type="text"
					value={searchTerm}
					onChange={(e) => handleChange(e)}
					className="bg-dark-blue border-none outline-none placeholder:text-white"
					placeholder="Search for a country..."
					/>
			</div>
		</form>
	)
}