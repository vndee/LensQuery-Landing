import {
	SunIcon,
	FireIcon,
	LanguageIcon,
	ShieldCheckIcon,
	RocketLaunchIcon,
	CubeTransparentIcon,
	DevicePhoneMobileIcon,
	AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/taken.svg";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
	title: "Outstanding Features",
	desc: "LensQuery offers a powerful application that helps you to understand and explore what you see.",
	image: benefitOneImg,
	bullets: [
		{
			title: "Instant Image Analysis",
			desc: "Snap a picture and LensQuery's advanced algorithms immediately get to work. Whether it's a page of text, or a mathematical equation, LensQuery quickly analyzes the content to give you insights.",
			icon: <FireIcon />,
		},
		{
			title: "Engaging AI Conversations",
			desc: "Have a question about what you've captured? Engage with our state-of-the-art AI chat interface. Get elaborative answers, seek clarifications, or simply explore the topic further.",
			icon: <RocketLaunchIcon />,
		},
		{
			title: "Privacy-Centric Design",
			desc: "Your privacy is our utmost priority. LensQuery is designed with stringent data protection measures, ensuring your snaps and queries remain confidential. LensQuery can use your own API key and store it locally on your device.",
			icon: <ShieldCheckIcon />,
		},
	],
};

const benefitTwo = {
	title: "Offer more benefits here",
	desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
	image: benefitTwoImg,
	bullets: [
		{
			title: "Mobile Responsive Template",
			desc: "Nextly is designed as a mobile first responsive template.",
			icon: <DevicePhoneMobileIcon />,
		},
		{
			title: "Powered by Next.js & TailwindCSS",
			desc: "This template is powered by latest technologies and tools.",
			icon: <AdjustmentsHorizontalIcon />,
		},
		{
			title: "Dark & Light Mode",
			desc: "Nextly comes with a zero-config light & dark mode. ",
			icon: <SunIcon />,
		},
	],
};

export { benefitOne, benefitTwo };
