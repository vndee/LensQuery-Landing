// components/ImageGallery.js
import Image from "next/image";
import { useState, useEffect } from "react";

const ImageGallery = ({ images }) => {
	// const [activeIndex, setActiveIndex] = useState(0);

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
	// 	}, 3000); // Change slide every 3 seconds

	// 	return () => clearInterval(interval);
	// }, [images]);

	return (
		<div className="relative w-3/4 overflow-hidden h-full md:h-96">
			<div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
				{images.map((image, index) => (
					<div class="group relative">
						<div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
							<img
								src={image}
								alt="Front of men&#039;s Basic Tee in black."
								class="h-full w-full object-cover object-center lg:h-full lg:w-full"
							></img>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageGallery;
