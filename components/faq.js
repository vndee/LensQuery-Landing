import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
	return (
		<Container className="!p-0">
			<div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
				{faqdata.map((item, index) => (
					<div key={item.question} className="mb-5">
						<Disclosure>
							{({ open }) => (
								<>
									<Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
										<span>{item.question}</span>
										<ChevronUpIcon
											className={`${
												open
													? "transform rotate-180"
													: ""
											} w-5 h-5 text-indigo-500`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
										{item.answer}
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
					</div>
				))}
			</div>
		</Container>
	);
};

const faqdata = [
	{
		question: "What is LensQuery?",
		answer: "LensQuery is like your pocket expert designed to amplify your curiosity. When you see something interesting, you can snap a picture of it. If you want to delve deeper into understanding it, you can choose your favorite AI model and engage in a chat to get more insights.",
	},
	{
		question: "What are the key features of LensQuery?",
		answer: "LensQuery offers several key features: Model-agnostic Approach, Instant Image Analysis, Engaging AI Conversations, Privacy-Centric Design.",
	},
	{
		question: "How does the special offer for new users work?",
		answer: "New users who register with LensQuery will receive 0.1 credit. This credit can be used for: ~10 text snaps, ~5 equation text snaps, ~50,000 GPT-3.5 usage tokens, ~1,667 GPT-4 usage tokens, ~500,000 Llama-1b usage tokens.",
	},
	{
		question: "How can I provide feedback or suggestions for LensQuery?",
		answer: "Your feedback, suggestions, or thoughts are highly valued. You can reach out and share them to contribute to the growth and improvement of LensQuery.",
	},
	{
		question: "How does LensQuery handle user privacy?",
		answer: "LensQuery has a privacy-centric design. Users have the option to use their own API key which is stored securely on their device. Additionally, chats are never stored on the server, ensuring user data remains private.",
	},
	{
		question: "What does 'Model-agnostic Approach' mean in LensQuery?",
		answer: "The 'Model-agnostic Approach' means that LensQuery doesn't restrict you to a specific AI model. Instead, it allows users to choose their preferred AI model, offering flexibility and ensuring they get the best experience at the most optimal price.",
	},
	{
		question: "Can I suggest a feature for LensQuery?",
		answer: "Absolutely! Feedback, suggestions, and thoughts from the community are highly valued. If you have an idea or a feature suggestion, you're encouraged to reach out and share it. Your input can contribute to the growth and improvement of LensQuery.",
	},
];

export default Faq;
