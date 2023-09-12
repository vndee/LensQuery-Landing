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
import PopupWidget from "../components/popupWidget";

const Home = () => {
	return (
		<>
			<Head>
				<title>LensQuery - Snap & Learn</title>
				<meta
					name="description"
					content="LensQuery - Snap & Learn: A powerful tool to help you learn about the world around you."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />
			<Hero />
			<SectionTitle
				pretitle="Outstanding Features"
				title="An expert assistant in your pocket"
			>
				LensQuery offers a powerful application that helps you to
				understand and explore what you see.
			</SectionTitle>
			<Benefits data={benefitOne} />
			<SectionTitle
				pretitle="Watch a video"
				title="Learn how to use LensQuery"
			>
				Quick highlights of LensQuery's features and how to use them.
			</SectionTitle>
			<Video />
			<SectionTitle pretitle="First step" title="How to get started" />
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
