import './FilterDropDown.css'

export const FilterDropDown = () => {
	return (
		<form className="p-4">
			<div className="dropdown relative inline-block bg-dark-blue rounded-lg p-3 shadow-lg">
				<button className="dropbtn flex items-center gap-4 border-none">
					<span>
						Filter By Region
					</span>
					<span className='text-[20px]'>
						<ion-icon name="chevron-down"></ion-icon>
					</span>
				</button>

				<div className="dropdown-content absolute rounded-md bg-dark-blue w-full ml-[-12px] mt-3.5 shadow-lg">
					<option className='p-2.5 block cursor-pointer' value="Afica">Africa </option>
					<option className='p-2.5 block cursor-pointer' value="America">America</option>
					<option className='p-2.5 block cursor-pointer' value="Asia">Asia   </option>
					<option className='p-2.5 block cursor-pointer' value="Europe">Europe </option>
					<option className='p-2.5 block cursor-pointer' value="Oceania">Oceania  </option>
				</div>
			</div>
		</form>
	)
} 