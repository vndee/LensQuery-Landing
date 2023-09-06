import React from "react";
import Image from "next/image";
import Container from "./container";
import Video from "../components/video";

const Guide = (props) => {
	const [state, setState] = React.useState("openai");

	const handleClickEvent = (guideState) => {
		setState(guideState);
		console.log("clicked", guideState);
	};

	return (
		<>
			<Container className="flex flex-wrap lg:gap-3 lg:flex-nowrap justify-center items-center">
				<button
					className={`flex items-center justify-center w-full lg:w-1/2 
                                ${
									state === "openai"
										? "bg-indigo-100 shadow-lg"
										: ""
								}
                                hover:bg-indigo-100 focus:outline-none
                                transition ease-in duration-200 rounded-lg max-w-xs py-3
                                hover:-translate-y-px hover:shadow-lg
                                `}
					onClick={() => handleClickEvent("openai")}
				>
					<div>
						<h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500">
							How to get OpenAI key?
						</h4>
						<p className="mt-1 text-gray-500 dark:text-gray-400">
							Learn how to get your OpenAI key.
						</p>
					</div>
				</button>
				<button
					className={`flex items-center justify-center w-full lg:w-1/2 
                                ${
									state === "openrouter"
										? "bg-indigo-100 shadow-lg"
										: ""
								}
                                hover:bg-indigo-100 focus:outline-none
                                transition ease-in duration-200 rounded-lg max-w-xs py-3
                                hover:-translate-y-px hover:shadow-lg
                                `}
					onClick={() => handleClickEvent("openrouter")}
				>
					<div>
						<h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500">
							How to get OpenRouter key?
						</h4>
						<p className="mt-1 text-gray-500 dark:text-gray-400">
							Learn how to get your OpenRouter key.
						</p>
					</div>
				</button>
			</Container>
			<Container className="flex flex-wrap lg:gap-3 lg:flex-nowrap justify-center items-center">
				{state === "openrouter" ? (
					<iframe
						src="https://scribehow.com/embed/Create_an_API_Key_for_OpenRouterai_with_Google_Sign-In__SnRzEjEeR12UFfAWsyolKA"
						width="50%"
						height="640"
						allowFullScreen
						frameBorder="0"
					/>
				) : (
					<iframe
						src="https://scribehow.com/embed/How_to_Create_a_Secret_Key_in_OpenAI_Platform__tN5WEq52RVqmlP6vklZ92A"
						width="50%"
						height="640"
						allowFullScreen
						frameBorder="0"
					/>
				)}
			</Container>
		</>
	);
};

export default Guide;
