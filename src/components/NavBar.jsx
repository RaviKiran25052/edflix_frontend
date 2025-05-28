import { ArrowRight } from "lucide-react";

const NavBar = () => {
	return (
		<nav className="bg-white shadow-sm border-b sticky top-0 z-50">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center">
						<span className="text-xl font-bold text-gray-900">/ EDFLIX SOL PVT LTD</span>
					</div>

					<div className="hidden md:flex items-center space-x-8">
						<a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About Us</a>
						<a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
						<a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Why Choose Us</a>
						<a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Our Team</a>
					</div>

					<div>
						<button className="border border-blue-400 bg-gradient-to-r from-blue-100 to-pink-100 text-blue-600 px-6 py-2 rounded-full font-medium hover:from-blue-200 hover:to-pink-200 transition-all duration-200 flex items-center space-x-2">
							<span>Contact Us</span>
							<ArrowRight className="w-4 h-4" />
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar