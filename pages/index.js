import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import Guide from "../components/guide";
import Carousel from "../components/carousel";
import PopupWidget from "../components/popupWidget";

const Home = () => {
	const screenshots = [
		"/img/6.7_01.svg",
		"/img/6.7_02.svg",
		"/img/6.7_03.svg",
		"/img/6.7_04.svg",
		"/img/6.7_05.svg",
	];

	return (
		<>
			<Head>
				<title>LensQuery - Model-agnostic AI Chat Application</title>
				<meta
					name="description"
					content="LensQuery - Unlock the power of modern AI models with LensQuery. Choose your favorite model and play around."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />
			<Hero />
			<SectionTitle
				pretitle="Outstanding Features"
				title="An expert assistant in your pocket"
			>
				LensQuery offers a model-agnostic application that helps you to
				choose your preferred AI model at best price.
			</SectionTitle>
			<Benefits data={benefitOne} />
			{/* <SectionTitle
				pretitle="Watch a video"
				title="Learn how to use LensQuery"
			>
				Quick highlights of LensQuery's features and how to use them.
			</SectionTitle>
			<Video /> */}
			{/* <SectionTitle pretitle="How it works" title="Screenshots" />
			<Carousel images={screenshots} /> */}
			{/* TODO: Need to implement carousel here */}
			<SectionTitle pretitle="First step" title="How to get started">
				If you don't want to use our backend, you can use your own API
				key as the instruction below.
			</SectionTitle>
			<Guide />
			{/* <SectionTitle
				pretitle="Testimonials"
				title="Here's what our customers said"
			>
				Testimonails is a great way to increase the brand trust and
				awareness. Use this section to highlight your popular customers.
			</SectionTitle>
			<Testimonials /> */}
			<SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
				To get help on common questions or issues, check out our FAQ
				below.
			</SectionTitle>
			<Faq />
			<Cta />
			<Footer />
			<PopupWidget />
		</>
	);
};

export default Home;
