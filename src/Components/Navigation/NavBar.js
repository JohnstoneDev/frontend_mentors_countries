import { Link } from "react-router-dom"


export const NavBar = () => {
	return (
		<div className="bg-dark-blue p-6 shadow-lg flex justify-between">
			<Link to="/" className="desktop:text-2xl mobile:text-lg font-semibold">Where In the World?</Link>
			<button className="flex gap-4 items-center">
				<ion-icon name="moon"></ion-icon>
				<span>Dark Mode</span>
			</button>
		</div>
	)
}