import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
		});
	}, []);

	return (
		<section className="pt-24 pb-12 min-h-screen flex items-center relative overflow-hidden">

			<div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
				<div className="flex flex-col md:flex-row gap-6 justify-between items-center">
					{/* Left Content */}
					<div
						className="space-y-8"
						data-aos="fade-right"
						data-aos-duration="800"
					>
						<div className="space-y-6">
							<h1
								className="text-3xl md:text-5xl font-bold leading-tight"
								data-aos="fade-right"
								data-aos-delay="200"
							>
								Custom <span className="text-blue-600">Web &</span>
								<br />
								<span className="text-blue-600">App Development</span>
								<br />
								<span className="text-gray-900">With Built-In</span>
								<br />
								<span className="text-gray-900">Cybersecurity</span>
							</h1>

							<p
								className="text-base md:text-xl text-gray-600 leading-relaxed max-w-lg"
								data-aos="fade-up"
								data-aos-delay="400"
							>
								We help startups and businesses launch secure, scalable digital products—fast.
							</p>
						</div>

						<button
							className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center gap-3 text-sm md:text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 active:scale-95"
							data-aos="fade-up"
							data-aos-delay="600"
						>
							Get a Free Consultation
							<ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
						</button>
					</div>

					{/* Code Editor Window */}
					<div
						className="relative group"
						data-aos="fade-left"
						data-aos-delay="500"
					>
						<img
							src="./images/hero1.png"
							alt="Code editor interface"
							className="w-full h-auto"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection