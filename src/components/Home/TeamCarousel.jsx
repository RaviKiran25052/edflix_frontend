import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
	ChevronLeft,
	ChevronRight,
	Linkedin,
	MessageSquare,
} from 'lucide-react';

const TeamCarousel = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
		});
	}, []);

	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	// Team members data
	const teamMembers = [
		{
			id: 1,
			name: "Alex Johnson",
			role: "Product Designer",
			description: "Expert in user experience and interface design with over 5 years of experience creating intuitive digital products.",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
			linkedin: "#"
		},
		{
			id: 2,
			name: "Sarah Chen",
			role: "Lead Developer",
			description: "Full-stack developer passionate about creating scalable solutions and clean, maintainable code.",
			image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
			linkedin: "#"
		},
		{
			id: 3,
			name: "Michael Rodriguez",
			role: "Security Expert",
			description: "Cybersecurity specialist focused on protecting digital assets and ensuring robust security protocols.",
			image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
			linkedin: "#"
		},
		{
			id: 4,
			name: "Emily Davis",
			role: "UI/UX Designer",
			description: "Creative designer with a keen eye for detail and passion for creating beautiful, functional interfaces.",
			image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
			linkedin: "#"
		}
	];


	const handleNext = () => {
		if (isAnimating) return;
		setIsAnimating(true);
		setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
		setTimeout(() => setIsAnimating(false), 500);
	};
	
	// Auto-rotate carousel
	useEffect(() => {
		const interval = setInterval(() => {
			handleNext();
		}, 4000);
		return () => clearInterval(interval);
	}, [currentIndex]);

	const handlePrev = () => {
		if (isAnimating) return;
		setIsAnimating(true);
		setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
		setTimeout(() => setIsAnimating(false), 500);
	};

	const goToSlide = (index) => {
		if (isAnimating || index === currentIndex) return;
		setIsAnimating(true);
		setCurrentIndex(index);
		setTimeout(() => setIsAnimating(false), 500);
	};

	return (
		<div className="min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-white py-16 px-6 md:px-20">

			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

					{/* Left Content Section */}
					<div className="space-y-8">
						<div className="space-y-6">
							<h1 className="text-4xl font-bold text-gray-900 leading-tight" data-aos="fade-up">
								The <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">People Behind</span> Your Product
							</h1>

							<p className="text-gray-600 leading-relaxed max-w-lg" data-aos="fade-up">
								We're A Lean Team Of Developers, Designers, And Security Experts Who Care About Your Product Like It's Our Own.
							</p>
						</div>

						<button className="group bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-3" data-aos="fade-up" data-aos-delay="500">
							<MessageSquare className="w-5 h-5" />
							<span>Get a Free Consultation</span>
						</button>
					</div>

					{/* Right Carousel Section */}
					<div className="relative px-6" data-aos="fade-left">
						{/* Navigation Arrows - Outside the carousel */}
						<button
							onClick={handlePrev}
							className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-20"
							disabled={isAnimating}
							data-aos="fade-right"
						>
							<ChevronLeft className="w-4 h-4" />
						</button>

						<button
							onClick={handleNext}
							className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-20"
							disabled={isAnimating}
							data-aos="fade-left"
						>
							<ChevronRight className="w-4 h-4" />
						</button>

						{/* Main Carousel Container */}
						<div className="overflow-hidden rounded-2xl" data-aos="fade-left">
							<div
								className="flex transition-transform duration-700 ease-in-out"
								style={{ transform: `translateX(-${currentIndex * 100}%)` }}
							>
								{teamMembers.map((member, index) => (
									<div
										key={member.id}
										className="w-full flex-shrink-0"
									>
										<div
											className="bg-white rounded-2xl shadow-[0_15px_35px_rgba(8,_112,_184,_0.12)] hover:shadow-[0_20px_45px_rgba(8,_112,_184,_0.2)] transition-all duration-500 overflow-hidden group transform hover:-translate-y-1 mx-auto max-w-sm mb-4"
										>
											{/* Card Image */}
											<div className="relative h-36">
												<img
													src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop"
													alt="Mountain landscape"
													className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
												/>
												<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

												{/* Profile Picture */}
												<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
													<div className="w-16 h-16 rounded-full border-3 border-white overflow-hidden shadow-lg ring-2 ring-blue-100 z-10">
														<img
															src={member.image}
															alt={member.name}
															className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
														/>
													</div>
												</div>
											</div>

											{/* Card Content */}
											<div className="pt-10 pb-6 px-6 text-center space-y-3">
												<h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{member.name}</h3>
												<div className="inline-block text-gray-600 text-xs">
													{member.role}
												</div>
												<p className="text-gray-600 leading-relaxed text-sm line-clamp-3">{member.description}</p>

												<button className="inline-flex items-center space-x-2 border border-gray-500 px-5 py-2 rounded-lg text-sm ">
													<Linkedin className="w-4 h-4" />
													<span>LinkedIn</span>
												</button>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Dots Indicator */}
						<div className="flex justify-center space-x-3 mt-2">
							{teamMembers.map((_, index) => (
								<button
									key={index}
									onClick={() => goToSlide(index)}
									className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
										? 'bg-gradient-to-r from-blue-600 to-purple-600 w-8 shadow-lg'
										: 'bg-gray-300 hover:bg-gray-400 w-2'
										}`}
									disabled={isAnimating}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamCarousel