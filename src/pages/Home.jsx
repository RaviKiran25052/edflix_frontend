import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
	Menu,
	X,
	ArrowRight,
	Code,
	Target,
	Package,
	Monitor,
	Lock,
	TrendingUp,
} from 'lucide-react';

// Navbar Component
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<div className="flex-shrink-0">
						<h1 className="text-xl font-bold text-gray-900">
							/EDFLIX SOL PVT LTD
						</h1>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-8">
							<a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</a>
							<a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
							<a href="#why-choose" className="text-gray-700 hover:text-blue-600 transition-colors">Why Choose Us</a>
							<a href="#team" className="text-gray-700 hover:text-blue-600 transition-colors">Our Team</a>
						</div>
					</div>

					{/* Contact Button with Gradient Border */}
					<div className="hidden md:block">
						<button className="relative bg-white text-gray-900 px-20 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
							<div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 p-[2px]">
								<div className="flex h-full w-full items-center justify-center rounded-full bg-white">
									<span className="px-4 py-1 flex items-center gap-2">
										Contact Us
										<ArrowRight size={16} />
									</span>
								</div>
							</div>
						</button>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button onClick={() => setIsOpen(!isOpen)}>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
							<a href="#about" className="block px-3 py-2 text-gray-700">About Us</a>
							<a href="#services" className="block px-3 py-2 text-gray-700">Services</a>
							<a href="#why-choose" className="block px-3 py-2 text-gray-700">Why Choose Us</a>
							<a href="#team" className="block px-3 py-2 text-gray-700">Our Team</a>
							<button className="w-full text-left bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-2 rounded-md mt-2">
								Contact Us
							</button>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

// Hero Section Component
const HeroSection = () => {
	return (
		<section className="pt-24 pb-12 min-h-screen flex items-center">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Left Content */}
					<motion.div
						className="space-y-8"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						<div className="space-y-6">
							<h1 className="text-5xl lg:text-6xl font-bold leading-tight">
								Custom <span className="text-blue-600">Web &</span>
								<br />
								<span className="text-blue-600">App Development</span>
								<br />
								<span className="text-gray-900">With Built-In</span>
								<br />
								<span className="text-gray-900">Cybersecurity</span>
							</h1>

							<p className="text-xl text-gray-600 leading-relaxed max-w-lg">
								We help startups and businesses launch secure, scalable digital products—fast.
							</p>
						</div>

						<motion.button
							className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center gap-3 text-lg font-medium shadow-lg hover:shadow-xl"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Get a Free Consultation
							<ArrowRight size={20} />
						</motion.button>
					</motion.div>

					{/* Right Content - Individual Images with Gradient Shadows */}
					<motion.div
						className="relative h-[600px]"
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						data-aos="fade-left"
					>
						{/* Code Editor Window */}
						<motion.div
							className="absolute top-0 left-0 z-30 w-80"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: 0.3 }}
						>
							<div className="relative">
								<div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
									{/* Window Header */}
									<div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
										<div className="flex gap-2">
											<div className="w-3 h-3 bg-red-500 rounded-full"></div>
											<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
											<div className="w-3 h-3 bg-green-500 rounded-full"></div>
										</div>
										<div className="flex-1 text-center text-sm text-gray-600">
											rareblocks.com
										</div>
									</div>

									{/* Code Content */}
									<div className="bg-gray-900 text-green-400 p-4 font-mono text-xs">
										<div className="space-y-1">
											<div className="flex">
												<span className="text-gray-500 mr-3">1</span>
												<span>datasource db {`{`}</span>
											</div>
											<div className="flex">
												<span className="text-gray-500 mr-3">2</span>
												<span className="ml-2">url = <span className="text-yellow-400">env("DATABASE_URL")</span></span>
											</div>
											<div className="flex">
												<span className="text-gray-500 mr-3">3</span>
												<span className="ml-2">provider = <span className="text-yellow-400">"postgresql"</span></span>
											</div>
											<div className="flex">
												<span className="text-gray-500 mr-3">4</span>
												<span>{`}`}</span>
											</div>
											<div className="flex">
												<span className="text-gray-500 mr-3">5</span>
												<span></span>
											</div>
											<div className="flex">
												<span className="text-gray-500 mr-3">6</span>
												<span className="text-blue-400">model</span> <span className="text-white">User</span> <span>{`{`}</span>
											</div>
										</div>
									</div>
								</div>
								{/* Gradient Shadow for Code Editor */}
								<div className="absolute -inset-3 bg-gradient-to-r from-blue-500/30 to-pink-500/30 blur-xl -z-10 rounded-2xl"></div>
							</div>
						</motion.div>

						{/* Chat Interface */}
						<motion.div
							className="absolute top-20 right-0 z-20 w-72"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: 0.5 }}
						>
							<div className="relative">
								<div className="bg-white rounded-xl shadow-xl p-4 border border-gray-200">
									<div className="space-y-3">
										{/* Chat Header */}
										<div className="flex items-center gap-3 pb-2 border-b">
											<div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
												<span className="text-white text-sm font-medium">MG</span>
											</div>
											<div>
												<div className="font-medium text-gray-900 text-sm">Martin Gray</div>
												<div className="text-xs text-gray-500">10:25 PM, Nov 10</div>
											</div>
										</div>

										{/* Chat Message */}
										<div className="bg-gray-900 text-white p-3 rounded-lg">
											<div className="text-sm">This works for every browser:</div>
											<div className="text-xs mt-1 font-mono bg-gray-800 p-2 rounded">
												window.location.href = 'your_url';
											</div>
										</div>

										{/* Additional Chat Items */}
										<div className="space-y-2">
											<div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
												<div className="w-6 h-6 bg-orange-500 rounded-full"></div>
												<div className="flex-1">
													<div className="text-sm font-medium">Floyd Miles</div>
													<div className="text-xs text-gray-500">Lorem ipsum dolor...</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Gradient Shadow for Chat */}
								<div className="absolute -inset-3 bg-gradient-to-r from-pink-500/30 to-blue-500/30 blur-xl -z-10 rounded-2xl"></div>
							</div>
						</motion.div>

						{/* Profile Card */}
						<motion.div
							className="absolute bottom-0 left-10 z-10 w-64"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: 0.7 }}
						>
							<div className="relative">
								<div className="bg-white rounded-xl shadow-xl p-4 border border-gray-200">
									<div className="flex items-center gap-3">
										<div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
											<span className="text-white text-sm font-medium">KW</span>
										</div>
										<div>
											<div className="font-medium text-gray-900">Kristin Watson</div>
											<div className="text-sm text-gray-500">Added on November 08, 2021</div>
										</div>
									</div>
								</div>
								{/* Gradient Shadow for Profile */}
								<div className="absolute -inset-3 bg-gradient-to-r from-blue-500/30 to-pink-500/30 blur-xl -z-10 rounded-2xl"></div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

// How EdFlix Helps Section
const HowEdflixHelpsSection = () => {
	const services = [
		{
			icon: <Target size={40} className="text-blue-500" />,
			title: "Agile Development That Gets You To Market Fast",
			description: "Rapid iteration cycles and proven methodologies to launch your product quickly."
		},
		{
			icon: <Package size={40} className="text-blue-500" />,
			title: "Product Thinking To Guide Your Roadmap",
			description: "Strategic product development approach that aligns with your business goals."
		},
		{
			icon: <Monitor size={40} className="text-blue-500" />,
			title: "Built-In Cybersecurity From The First Line Of Code",
			description: "Security-first development ensuring your product is protected from day one."
		}
	];

	return (
		<section className="py-20 bg-gray-900" id="how-we-help">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Left Content */}
					<motion.div
						className="space-y-8"
						data-aos="fade-right"
					>
						<div className="space-y-6">
							<h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
								Here's <span className="text-blue-400">How EdFlix Helps You</span>
								<br />
								<span className="text-white">Launch With Confidence</span>
							</h2>

							<p className="text-xl text-gray-400 leading-relaxed">
								Whether You're Struggling With Unclear Tech Direction, Post-MVP Uncertainty,
								Or Security Blind Spots, We're Here To Change That.
							</p>
						</div>

						<div className="space-y-6">
							{services.map((service, index) => (
								<motion.div
									key={index}
									className="flex items-start gap-4"
									data-aos="fade-up"
									data-aos-delay={index * 100}
								>
									<div className="flex-shrink-0">
										{service.icon}
									</div>
									<div>
										<h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
										<p className="text-gray-400">{service.description}</p>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Right Content - Team Image */}
					<motion.div
						className="relative"
						data-aos="fade-left"
					>
						<div className="relative">
							<img
								src="/images/team-collaboration.jpg"
								alt="Team Collaboration"
								className="w-full h-96 object-cover rounded-2xl shadow-2xl"
							/>
							{/* Gradient Shadow */}
							<div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-pink-500/20 blur-3xl -z-10 rounded-3xl"></div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

// Tech Product Risks Section
const TechProductRisksSection = () => {
	const risks = [
		{
			icon: <Code size={48} className="text-blue-500" />,
			title: "Idea Validation Worries?",
			description: "Not Sure If Your Idea's Worth It? We Help Validate And Move Fast.",
			stat: "24/7",
			statLabel: "Project Visibility"
		},
		{
			icon: <Code size={48} className="text-blue-500" />,
			title: "No tech guidance ?",
			description: "Unsure What To Build First, Or How To Prioritize Features?",
			stat: "90%",
			statLabel: "Security Minded"
		},
		{
			icon: <Monitor size={48} className="text-blue-500" />,
			title: "Stuck after MVP ?",
			description: "No Plan For Scaling, Updates, Or Handling Real User Feedback?",
			stat: "95%",
			statLabel: "Focus On Scalability"
		},
		{
			icon: <Lock size={48} className="text-blue-500" />,
			title: "Security Issues ?",
			description: "Realizing Too Late That Your App Isn't Secure?",
			stat: "95%",
			statLabel: "Transparent Process"
		}
	];

	return (
		<section className="py-20" id="risks">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-16"
					data-aos="fade-up"
				>
					<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
						<span className="text-blue-600">Launching a tech product?</span> Don't
						<br />
						let these risks slow you down
					</h2>
					<p className="text-xl text-gray-600 max-w-4xl mx-auto">
						From Missed Deadlines To Security Flaws, Launching A Product Can Be Overwhelming.
						We Help You Avoid The Pitfalls And Build With Confidence.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{risks.map((risk, index) => (
						<motion.div
							key={index}
							className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
							data-aos="fade-up"
							data-aos-delay={index * 100}
							whileHover={{ y: -5 }}
						>
							<div className="flex justify-center mb-6">{risk.icon}</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">{risk.title}</h3>
							<p className="text-gray-600 mb-8 text-sm leading-relaxed">{risk.description}</p>

							{/* Statistics */}
							<div className="border-t pt-6">
								<div className="flex items-center justify-center gap-2 mb-2">
									<TrendingUp size={20} className="text-green-500" />
									<span className="text-3xl font-bold text-gray-900">{risk.stat}</span>
								</div>
								<p className="text-sm text-gray-500">{risk.statLabel}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

// Main Home Page Component
const Home = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);

	return (
		<div className="min-h-screen">
			<Navbar />
			<HeroSection />
			<TechProductRisksSection />
			<HowEdflixHelpsSection />
		</div>
	);
};

export default Home;