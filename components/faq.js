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
		answer: "LensQuery is an app that allows you to snap photos of text or equations and then, using advanced AI powered by GPT technology, provides insights, answers, and deeper understanding about the captured content.",
	},
	{
		question: "How does LensQuery work?",
		answer: "Simply capture an image of the content you're curious about, and LensQuery will analyze it. You can then engage in an AI-driven chat to explore the topic in depth.",
	},
	{
		question: "How does LensQuery ensure my data is safe?",
		answer: "LensQuery is designed with a privacy-centric approach. Your queries and snaps are securely stored on your device, and we do not collect any data from you. We also use your own OpenAI GPT key and store it locally on the device.",
	},
	{
		question: "What kind of content works best with LensQuery?",
		answer: "LensQuery excels with text, mathematical equations, and simple diagrams. However, its efficiency can vary based on image clarity and content complexity.",
	},
	{
		question: "How is LensQuery different from other OCR apps?",
		answer: "While many OCR apps just convert images to text, LensQuery goes a step further. It analyzes content, offers in-depth insights, and facilitates engaging AI-driven conversations about the captured material.",
	},
];

export default Faq;
