import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
		});
	}, []);

	return (
		<footer className="bg-black text-white py-16 px-6 md:px-20 relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute inset-0" style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
				}}></div>
			</div>

			<div className="max-w-7xl mx-auto relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
					{/* Left Navigation */}
					<div className="flex flex-wrap gap-8 justify-center lg:justify-start">
						<a
							href="/about"
							className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
							data-aos="fade-up"
							data-aos-delay="100"
						>
							About
						</a>
						<a
							href="/services"
							className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
							data-aos="fade-up"
							data-aos-delay="200"
						>
							Services
						</a>
						<a
							href="/contact"
							className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
							data-aos="fade-up"
							data-aos-delay="300"
						>
							Contact Us
						</a>
					</div>

					{/* Center Company Info */}
					<div className="text-center space-y-4" data-aos="fade-up" data-aos-delay="400">
						<h2 className="text-2xl md:text-3xl font-bold text-white">
							Edflix Sol Pvt Ltd
						</h2>
						<p className="text-gray-400 max-w-md mx-auto leading-relaxed">
							Have a tech idea but not sure where to start? Let's build your product the right way.
						</p>
					</div>

					{/* Right Social Links */}
					<div className="flex items-center gap-6 justify-center lg:justify-end">
						<span
							className="text-gray-300 font-medium hidden sm:block"
							data-aos="fade-up"
							data-aos-delay="500"
						>
							Contacts
						</span>

						{/* Social Icons */}
						<div className="flex gap-4">
							<a
								href="https://linkedin.com/company/edflix-sol"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-110 group"
								data-aos="fade-up"
								data-aos-delay="600"
							>
								<Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
							</a>
							<a
								href="https://instagram.com/edflix_sol"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-110 group"
								data-aos="fade-up"
								data-aos-delay="700"
							>
								<Instagram className="w-5 h-5 text-gray-300 group-hover:text-white" />
							</a>
							<a
								href="https://twitter.com/edflix_sol"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-110 group"
								data-aos="fade-up"
								data-aos-delay="800"
							>
								<Twitter className="w-5 h-5 text-gray-300 group-hover:text-white" />
							</a>
						</div>
					</div>
				</div>

				{/* Bottom Divider and Copyright */}
				<div className="mt-12 pt-8 border-t border-gray-800">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="text-gray-500 text-sm">
							© 2024 Edflix Sol Pvt Ltd. All rights reserved.
						</p>
						<div className="flex gap-6 text-sm">
							<a
								href="/privacy"
								className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
							>
								Privacy Policy
							</a>
							<a
								href="/terms"
								className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
							>
								Terms of Service
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;