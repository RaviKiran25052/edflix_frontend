import { useState } from 'react';
import {
	Menu,
	X,
	ArrowRight,
} from 'lucide-react';

const NavBar = () => {
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

export default NavBar