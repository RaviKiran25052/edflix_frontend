import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
	Menu,
	X,
	ArrowRight,
	Code,
	Monitor,
	Lock,
	TrendingUp,
	Shield,
	Lightbulb,
	Smartphone,
	CheckCircle,
} from 'lucide-react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
			<div className="max-w-7xl mx-auto px-6 md:px-20">
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
						<button className="relative bg-white text-gray-900 px-20 py-5 hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
							<div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 p-[2px]">
								<div className="flex h-full w-full items-center justify-center rounded-md bg-white">
									<span className="px-4 flex items-center gap-2">
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

const HeroSection = () => {

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
			icon: <Code size={48} className="text-green-500" />,
			title: "No tech guidance ?",
			description: "Unsure What To Build First, Or How To Prioritize Features?",
			stat: "90%",
			statLabel: "Security Minded"
		},
		{
			icon: <Monitor size={48} className="text-purple-500" />,
			title: "Stuck after MVP ?",
			description: "No Plan For Scaling, Updates, Or Handling Real User Feedback?",
			stat: "95%",
			statLabel: "Focus On Scalability"
		},
		{
			icon: <Lock size={48} className="text-red-500" />,
			title: "Security Issues ?",
			description: "Realizing Too Late That Your App Isn't Secure?",
			stat: "95%",
			statLabel: "Transparent Process"
		}
	];

	return (
		<section className="overflow-hidden py-12 lg:py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50" id="risks">
			<div className="max-w-7xl mx-auto px-6 md:px-20">
				{/* Header Section */}
				<div className="lg:text-left lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center mb-12 lg:mb-16">
					{/* Left side - Title */}
					<div data-aos="fade-right">
						<h2 className="text-3xl font-bold text-gray-900 mb-4 lg:mb-6">
							<span className="text-blue-600">Launching a tech product?</span> Don't
							<br className="hidden lg:block" />
							let these risks slow you down
						</h2>
					</div>

					{/* Right side - Description */}
					<div data-aos="fade-left" data-aos-delay="200">
						<p className="text-gray-600 leading-relaxed">
							From Missed Deadlines To Security Flaws, Launching A Product Can Be Overwhelming.
							We Help You Avoid The Pitfalls And Build With Confidence.
						</p>
					</div>
				</div>

				{/* Risk Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
					{risks.map((risk, index) => (
						<div
							key={index}
							className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 text-center relative overflow-hidden"
							data-aos="fade-up"
							data-aos-delay={index * 150}
						>
							{/* Background gradient on hover */}
							<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

							<div className="relative z-10">
								<div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500">
									{risk.icon}
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
									{risk.title}
								</h3>
								<p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
									{risk.description}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Statistics - Below cards in desktop */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{risks.map((risk, index) => (
						<div
							key={index}
							className="text-center group cursor-pointer"
							data-aos="zoom-in"
							data-aos-delay={index * 100}
						>
							<div className="flex items-center justify-center gap-2 mb-2 group-hover:scale-110 transition-transform duration-300">
								<TrendingUp size={20} className="text-green-500 group-hover:text-green-600 transition-colors duration-300" />
								<span className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
									{risk.stat}
								</span>
							</div>
							<p className="text-sm text-gray-500 font-medium group-hover:text-gray-600 transition-colors duration-300">
								{risk.statLabel}
							</p>
						</div>
					))}
				</div>
			</div>

			{/* Floating background elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div
					className="absolute top-1/4 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"
					data-aos="fade"
					data-aos-delay="1000"
				></div>
				<div
					className="absolute bottom-1/4 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl"
					data-aos="fade"
					data-aos-delay="1200"
				></div>
			</div>
		</section>
	);
};

const FeaturesSection = () => {

	const features = [
		{
			icon: './images/agileIcon.png',
			title: "Agile Development That Gets You To Market Fast",
			color: "text-orange-400"
		},
		{
			icon: './images/prodIcon.png',
			title: "Product Thinking To Guide Your Roadmap",
			color: "text-blue-400"
		},
		{
			icon: './images/cyberIcon.png',
			title: "Built-In Cybersecurity From The First Line Of Code",
			color: "text-cyan-400"
		}
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">

			<div className="relative z-10 container mx-auto px-6 md:px-20 py-12 lg:py-20">
				{/* Main Heading */}
				<div
					className="flex flex-col items-center text-center space-y-6 mb-16"
					data-aos="fade-up"
				>
					<h1 className="text-3xl font-bold leading-tight">
						Here's{' '}
						<span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
							How Edflix Helps You
						</span>
						<br />
						Launch With Confidence
					</h1>
					<p className="text-sm md:text-lg text-gray-300 max-w-2xl">
						Whether You're Struggling With Unclear Tech Direction, Post-MVP Uncertainty,
						Or Security Blind Spots, We're Here To Change That.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-10 items-center">
					{/* Left Content - Features */}
					<div className="flex flex-col gap-10">
						{features.map((feature, index) => (
							<div
								key={index}
								className={`flex items-start w-full md:w-72 space-x-4 group cursor-pointer transition-transform duration-300 hover:translate-x-2 ${index % 2 === 1 ? 'self-end' : ''}`}
								data-aos={index % 2 === 1 ? "fade-right" : "fade-left"}
							>
								<div className={`p-3 rounded-lg bg-gray-800/50 border border-gray-700 group-hover:border-gray-600 transition-all duration-300 flex-shrink-0`}>
									<img
										src={feature.icon}
										className={`w-6 h-6 ${feature.color}`}
										alt={`${feature.title} icon`}
									/>
								</div>
								<div className="flex-1">
									<h3 className="font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">
										{feature.title}
									</h3>
								</div>
							</div>
						))}
					</div>

					{/* Right Image */}
					<div
						className="relative order-1 lg:order-2"
						data-aos="fade-left"
						data-aos-delay="200"
					>
						<img
							src="./images/hero2.png"
							alt="Team collaboration meeting"
							className="w-full h-auto"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

const TechServicesLanding = () => {
	const services = [
		{
			icon: <Code className="w-6 h-6 text-blue-500" />,
			title: "Web Development",
			description: "SEO-Ready, Lightning-Fast Websites That Look Great And Perform Even Better. Scalability.",
			imageSrc: "/images/service1.png"
		},
		{
			icon: <Smartphone className="w-6 h-6 text-purple-500" />,
			title: "App Development",
			description: "Smooth, Scalable Apps For iOS And Android That Users Love To Interact With.",
			imageSrc: "/images/service2.png"
		},
		{
			icon: <Lightbulb className="w-6 h-6 text-orange-500" />,
			title: "Product Development",
			description: "From Idea To MVP, We Help You Build The Right Features, Fast.",
			imageSrc: "/images/service3.png"
		},
		{
			icon: <Shield className="w-6 h-6 text-green-500" />,
			title: "Cyber Security Integrated",
			description: "Security Isn't An Add-On, It's Built Into Every Line Of Code From The Start.",
			imageSrc: "/images/service4.png"
		}
	];

	return (
		<div className="min-h-screen bg-gray-200">
			{/* Header Section */}
			<div className="container mx-auto px-6 md:px-20 py-16">
				<div
					className="text-center max-w-4xl mx-auto mb-20"
					data-aos="fade-up"
				>
					<h1 className="text-4xl font-bold text-gray-900 mb-6">
						Tech Services That Move You{' '}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
							Forward
						</span>
					</h1>
					<p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
						We Provide End-To-End Digital Solutions, Ensuring High Performance,
						Seamless User Experience, And Growth.
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
					{services.map((service, index) => (
						<div
							key={index}
							className="group"
							data-aos="fade-up"
							data-aos-delay={index * 100}
						>
							<div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
								{/* Icon */}
								<div className="flex mb-6 items-center gap-6">
									<div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
										{service.icon}
									</div>
									<div>
										{/* Title */}
										<h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>

										{/* Description */}
										<p className="text-gray-500 leading-relaxed text-sm">
											{service.description}
										</p>

									</div>
								</div>


								{/* Learn More Button */}
								<button className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group/btn transition-colors duration-300 mb-8">
									<span>Learn More</span>
									<ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
								</button>

								<img
									src={service.imageSrc}
									alt={service.title}
									className="w-full h-auto rounded-lg group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

const TechJourney = () => {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
			offset: 100
		});
	}, []);

	const features = [
		"Understanding Your Business",
		"Reliable & Fast Execution",
		"Transparent Collaboration",
		"Scalable Growth"
	];

	return (
		<div className="overflow-hidden container mx-auto px-6 md:px-20 py-16 lg:py-24 bg-gray-900 text-white">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

				{/* Left Content */}
				<div data-aos="fade-right">
					<div className="mb-8">
						<h2 className="text-3xl font-bold mb-6 leading-tight">
							Why <span className="text-blue-400">We're The Right Fit</span>
							<br />
							For Your Tech Journey
						</h2>
					</div>

					{/* Team Image */}
					<div className="relative" data-aos="zoom-in" data-aos-delay="200">
						<div className="rounded-2xl overflow-hidden shadow-2xl">
							<img
								src="/images/techJourney.png"
								alt="Team collaboration"
								className="w-full h-auto object-cover"
							/>
						</div>
						{/* Optional: Add a subtle border/glow effect */}
						<div className="absolute inset-0 rounded-2xl border border-gray-700 pointer-events-none"></div>
					</div>
				</div>

				{/* Right Content */}
				<div data-aos="fade-left" data-aos-delay="300">
					<p className="text-gray-400 leading-relaxed">
						We Combine Speed, Security, And Startup-Focused
						Thinking To Help You Build Smarter, Launch Faster, And
						Scale With Confidence.
					</p>
					<h3 className="text-2xl lg:text-3xl font-bold my-6">
						Partnering With You To Build Impactful Digital Solutions
					</h3>
					<p className="space-y-6 text-gray-300 leading-relaxed">
						We Don't Just Develop Websites And Apps. We Bring Your
						Ideas To Life With Scalable, High-Performance Solutions. <br />
						With A Blend Of Creativity And Technology, We Craft
						Seamless, User-Focused Experiences That Help Businesses
						Grow And Stand Out In The Digital Landscape.
					</p>

					{/* Feature Points */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
						{features.map((feature, index) => (
							<div
								key={index}
								className="flex items-center space-x-3 group"
								data-aos="fade-up"
							>
								<div className="flex-shrink-0">
									<div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
										<CheckCircle className="w-4 h-4 text-white" />
									</div>
								</div>
								<span className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
									{feature}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

const TechnologiesSection = () => {

	return (
		<div className="bg-gray-900 text-white">
			<div className="container mx-auto px-6 md:px-20 py-16 lg:py-24">
				<div className="text-center">
					{/* Title */}
					<h2
						className="text-4xl font-bold mb-16 leading-tight"
						data-aos="fade-up"
					>
						Technologies <span className="text-blue-400">That Power</span> Our Business
					</h2>

					{/* Tech Stack Image */}
					<div
						className="flex justify-center"
						data-aos="zoom-in"
						data-aos-delay="300"
					>
						<div className="relative max-w-4xl w-full">
							<img
								src="./images/tech.png"
								alt="Technologies that power our business"
								className="w-full h-auto object-contain"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Home = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
		});
	}, []);

	return (
		<div className="min-h-screen">
			<Navbar />
			<HeroSection />
			<TechProductRisksSection />
			<FeaturesSection />
			<TechServicesLanding />
			<TechJourney />
			<TechnologiesSection />
		</div>
	);
};

export default Home;