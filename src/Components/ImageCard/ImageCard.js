import SampleImage from "../../Assets/rest-countries-api-with-color-theme-switcher-master/design/desktop-preview.jpg"

export const ImageCard = () => {
	return (
		<div className="bg-dark-blue flex flex-col gap-3 h-fit m-6 w-[300px] rounded hover:shadow-2xl">
			<img src={SampleImage} alt="" className="h-[200px] w-[300px] object-cover"/>
			<section className="p-4 flex flex-col text-left gap-4">
				<h2 className="font-semibold">Larger Text </h2>
				<section className="">
					<h2> Some Text : Described Here </h2>
					<h2> Some Text : Described Here </h2>
					<h2> Some Text : Described Here </h2>
				</section>
			</section>
		</div>
	)
}