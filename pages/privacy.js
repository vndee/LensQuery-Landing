import React from "react";
import Head from "next/head";
import Container from "../components/container";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Privacy = () => {
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

			<Container className={`flex w-full flex-col mt-4 text-gray-500`}>
				<div>
					<p>Last updated: 1 Sep, 2023</p>
					<p>
						At LensQuery, we value your privacy. This Privacy Policy
						("Policy") describes how [Your Company Name] ("us",
						"we", or "our") collects, uses, and discloses
						information about you when you use the LensQuery
						application ("Service").
					</p>
					<h2>1. Information We Collect</h2>
					<p>
						We collect information you provide directly to us, such
						as when you create an account, submit content, or
						communicate with us. This information may include your
						name, email address, and other contact or demographic
						information.
					</p>
					<h2>2. How We Use Your Information</h2>
					<p>
						We may use the information we collect about you to
						provide, maintain, and improve our Service, to
						communicate with you, or to monitor and analyze usage
						and trends.
					</p>
					<h2>3. Sharing of Information</h2>
					<p>
						We may share your information with third-party vendors
						or service providers that perform services on our
						behalf, but we do not sell your information to third
						parties for their promotional purposes.
					</p>
					<h2>4. Security</h2>
					<p>
						We take reasonable measures to help protect your
						information. However, no electronic transmission or
						storage method is 100% secure. Therefore, we cannot
						guarantee its absolute security.
					</p>
					<h2>5. International Transfers</h2>
					<p>
						Your information may be transferred to and maintained on
						computers located outside of your state, province,
						country, or other governmental jurisdictions where the
						data protection laws may differ from those in your
						jurisdiction.
					</p>
					<h2>6. Your Choices</h2>
					<p>
						You may update, correct, or delete your account
						information at any time by logging into your account. If
						you wish to delete or deactivate your account, please{" "}
						<a href="mailto:contact@lensquery.com">contact us</a>,
						but note that we may retain certain information as
						required by law or for legitimate business purposes.
					</p>
					<h2>7. Changes to This Privacy Policy</h2>
					<p>
						We may revise this Policy from time to time. If we make
						any material changes, we will provide notice through the
						Service or by other means.
					</p>
					<h2>8. Contact Us</h2>
					<p>
						If you have any questions about this Privacy Policy,
						please{" "}
						<a href="mailto:contact@lensquery.com">contact us</a>.
					</p>
				</div>
			</Container>
			<Footer />
		</>
	);
};

export default Privacy;
