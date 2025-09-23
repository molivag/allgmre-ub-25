import PropTypes from "prop-types";

type Story = {
  year: string;
  description: string;
};

const stories = [
  { year: "-", description: " " },
  { year: "-", description: "" },
  { year: "-", description: "" },
  { year: "-", description: "" }
];


const StoryItem = ({ item }:{item:Story}) => {
	const { year, description } = item;
	return (
		<>
			<div className="col-span-12">
				<hr className="bg-black dark:bg-white h-[3px] rounded-sm opacity-100 mt-6 mb-4" />
			</div>
			<div className="col-span-4 md:col-span-2">
				<h1 className="text-[40px] font-medium ml-3">{year}</h1>
			</div>
			<div className="col-span-8 md:col-span-10">
				<p className="text-xl text-earth-poster1 leading-8">{description}</p>
			</div>
		</>
	);
};

StoryItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const AboutUs7 = () => {
	return (
		<section className="ezy__about7 light py-14 md:py-24 bg-earth-text rounded-4xl dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4">
				<div className="grid grid-cols-12 justify-center mb-12">
					<div className="col-span-12 md:col-span-10 md:col-start-2">
						<h2 className="text-4xl leading-snug md:text-5xl md:leading-snug font-bold mb-6">
							General Program (to be defined.....)
						</h2>
						<div className="grid grid-cols-12 gap-5 justify-between items-center">
							{stories.map((item, i) => (
								<StoryItem item={item} key={i} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs7;

