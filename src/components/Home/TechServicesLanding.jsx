import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
	ArrowRight,
	Code,
	Shield,
	Lightbulb,
	Smartphone,
} from 'lucide-react';

const TechServicesLanding = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
		});
	}, []);

	const services = [
		{
			icon: <Code className="w-6 h-6 text-blue-500" />,
			title: "Web Development",
			description: "SEO-Ready, Lightning-Fast Websites That Look Great And Perform Even Better. Scalability.",
			imageSrc: "/images/service1.png",
			link: "/web"
		},
		{
			icon: <Smartphone className="w-6 h-6 text-purple-500" />,
			title: "App Development",
			description: "Smooth, Scalable Apps For iOS And Android That Users Love To Interact With.",
			imageSrc: "/images/service2.png",
			link: "/app"
		},
		{
			icon: <Lightbulb className="w-6 h-6 text-orange-500" />,
			title: "Product Development",
			description: "From Idea To MVP, We Help You Build The Right Features, Fast.",
			imageSrc: "/images/service3.png",
			link: "/product"
		},
		{
			icon: <Shield className="w-6 h-6 text-green-500" />,
			title: "Cyber Security Integrated",
			description: "Security Isn't An Add-On, It's Built Into Every Line Of Code From The Start.",
			imageSrc: "/images/service4.png",
			link: "/cyber"
		}
	];

	return (
		<div className="min-h-screen bg-gray-200" id="services">
			{/* Header Section */}
			<div className="container mx-auto px-6 md:px-20 py-16">
				<div
					className="text-center max-w-4xl mx-auto mb-20"
					data-aos="fade-up"
				>
					<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
						Tech Services That Move You{' '}
						<span className="text-blue-600">
							Forward
						</span>
					</h1>
					<p className="text-xs md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
								<button
									onClick={() => window.location.href = service.link}
									className="inline-flex text-sm items-center space-x-2 hover:border-blue-700 font-medium group/btn transition-colors duration-300 mb-8 rounded-full border border-gray-200 p-1 pl-3"
								>
									<span>Learn More</span>
									<ArrowRight className="p-2 w-8 h-8 rounded-full bg-gray-100 -rotate-45" />
								</button>

								<img
									src={service.imageSrc}
									alt={service.title}
									data-aos="slide-up"
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

export default TechServicesLanding