import { ImageCard } from "../../Components/ImageCard/ImageCard"


export const HomePage = () => {
	return (
		<div className="text-center font-semibold flex flex-col gap-8">
			<h1 className="text-3xl">Frontend Mentor Countries Challenge</h1>
			<div className="desktop:grid desktop:grid-cols-2 mobile:flex mobile:flex-col">
				<ImageCard />
				<ImageCard />
				<ImageCard />
				<ImageCard />
			</div>
		</div>
	)
}

