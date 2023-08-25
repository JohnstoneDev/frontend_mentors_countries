import { BackButton } from "../../Components/Navigation/BackButton"
import LostImage from "../../Assets/Images/Lost.jpg"

export const Lost = () => {
	return (
		<div className="text-4xl max-h-fit bg-white text-very-dark-blue font-extrabold p-4 space-y-3">
			<BackButton/>
			<section className="text-center">
				<h1>Looks like you're lost </h1>
				<img src={LostImage} alt="" className="h-screen w-screen object-fill"/>
			</section>
		</div>
	)
}