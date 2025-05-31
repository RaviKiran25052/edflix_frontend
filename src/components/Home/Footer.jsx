import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
	ExternalLink,
	MapPin,
	Phone,
	Mail,
	MessageCircle,
} from 'lucide-react';

const Footer = () => {

	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
		});
	}, []);

	const [formData, setFormData] = useState({
		name: '',
		mobile: '',
		email: '',
		service: ''
	});

	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log('Form submitted:', formData);
	};

	return (
		<footer id='contact' className="relative bg-black text-white overflow-hidden px-6 md:px-20 py-14 pb-20">
			{/* Large Background Text */}
			<div className="absolute text-center bottom-0 left-0 right-0 overflow-hidden pointer-events-none mx-6 md:mx-20">
				<div className="text-[2.7rem] md:text-[6.5rem] font-black text-gray-100 opacity-10 whitespace-nowrap mb-10 md:mb-0">
					EDFLIX SOL PVT LTD
				</div>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto py-16">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

					{/* Left Section - Company Info */}
					<div className="space-y-8">
						{/* Logo */}
						<div className="flex items-center space-x-3">
							<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
								<div className="w-6 h-6 bg-gray-900 rounded-sm"></div>
							</div>
							<span className="text-2xl font-bold">logoipsum</span>
						</div>

						{/* Tagline */}
						<div className="space-y-4">
							<h3 className="text-xl font-semibold text-gray-200">
								Have a tech idea but not sure where to start?
							</h3>
							<p className="text-lg text-gray-300">
								Let's build your product the right way.
							</p>
						</div>

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row gap-4">
							<button className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-colors duration-200 group">
								Book a 15-min call
								<ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
							</button>

							<button className="inline-flex items-center justify-center px-6 py-3 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white rounded-full font-medium transition-colors duration-200 group">
								<MessageCircle className="mr-2 w-4 h-4" fill="currentColor" />
								Chat on whatsapp
							</button>
						</div>

						{/* Contact Info */}
						<div className="space-y-4 pt-8">
							<div className="flex items-center space-x-3 text-gray-300">
								<Mail className="w-5 h-5" />
								<span>info@edflixsolutionspvtltd.com</span>
							</div>

							<div className="flex items-center space-x-3 text-gray-300">
								<Phone className="w-5 h-5" />
								<span>+91 9532147595</span>
							</div>

							<div className="flex items-center space-x-3 text-gray-300">
								<MapPin className="w-5 h-5" />
								<span>Location, India</span>
							</div>
						</div>
					</div>

					{/* Right Section - Contact Form */}
					<div className="lg:pl-8">
						<div className="space-y-6 bg-gray-800 bg-opacity-50 p-8 rounded-2xl border border-gray-700">
							<div>
								<input
									type="text"
									name="name"
									placeholder="Name"
									value={formData.name}
									onChange={handleInputChange}
									className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200"
								/>
							</div>

							<div>
								<input
									type="tel"
									name="mobile"
									placeholder="Mobile"
									value={formData.mobile}
									onChange={handleInputChange}
									className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200"
								/>
							</div>

							<div>
								<input
									type="email"
									name="email"
									placeholder="Email"
									value={formData.email}
									onChange={handleInputChange}
									className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200"
								/>
							</div>

							<div>
								<input
									type="text"
									name="service"
									placeholder="Service"
									value={formData.service}
									onChange={handleInputChange}
									className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200"
								/>
							</div>

							<div className="pt-4">
								<button
									onClick={handleSubmit}
									disabled={!formData.name || !formData.mobile || !formData.email || !formData.service}
									className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-white text-white hover:bg-white hover:text-gray-900 rounded-full font-medium transition-colors duration-200 group"
								>
									Start Conversation
									<ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer