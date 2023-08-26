import {
	useNavigate
} from "react-router-dom"

// Button that navigates one page behind
export const BackButton = () => {
	const navigate = useNavigate()

	return (
		<button
			className="text-lg rounded-md p-2 bg-dark-blue text-white flex items-center justify-center gap-2 w-[130px] shadow-xl"
			onClick={() => navigate(-1)}>
			<ion-icon name="arrow-back-outline"></ion-icon>
			<span>Back</span>
		</button>
	)
}