import { useEffect, useState } from 'react';
import {
	Menu,
	X,
	ArrowRight,
} from 'lucide-react';

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	// Smooth scroll function
	const handleScrollTo = (id) => {
		const element = document.getElementById(id);
		if (element) {
			const offsetTop = element.offsetTop - 55;
			window.scrollTo({
				top: offsetTop,
				behavior: 'smooth'
			});
		}
		setIsOpen(false); // Close mobile menu after clicking
	};

	// Close sidebar when clicking outside
	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) {
			setIsOpen(false);
		}
	};

	// Prevent body scroll when sidebar is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		// Cleanup on unmount
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	return (
		<>
			<nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
					<div className="flex justify-between items-center h-16">
						{/* Logo */}
						<div className="flex-shrink-0">
							<h1 className="text-lg sm:text-xl font-bold text-gray-900">
								/EDFLIX SOL PVT LTD
							</h1>
						</div>

						{/* Desktop Navigation */}
						<div className="hidden lg:block">
							<div className="ml-10 flex items-baseline space-x-6 xl:space-x-8">
								<button
									onClick={() => handleScrollTo('about')}
									className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
								>
									About Us
								</button>
								<button
									onClick={() => handleScrollTo('services')}
									className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
								>
									Services
								</button>
								<button
									onClick={() => handleScrollTo('why-choose')}
									className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
								>
									Why Choose Us
								</button>
								<button
									onClick={() => handleScrollTo('team')}
									className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
								>
									Our Team
								</button>
							</div>
						</div>

						<div className="hidden md:block">
							<button
								className="relative bg-white rounded-lg group hover:scale-105 text-gray-900 px-20 py-5 hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
								onClick={() => handleScrollTo('contact')}
							>
								<div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 p-[2px]">
									<div className="flex h-full w-full items-center justify-center rounded-md bg-white">
										<span className="px-4 flex items-center gap-2">
											Contact Us
											<ArrowRight size={16} className='group-hover:translate-x-1 transition-transform' />
										</span>
									</div>
								</div>
							</button>
						</div>

						{/* Mobile menu button */}
						<div className="lg:hidden">
							<button
								onClick={() => setIsOpen(!isOpen)}
								className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-all duration-200 z-60 relative"
								aria-label="Toggle menu"
							>
								<div className="relative w-6 h-6">
									<Menu
										size={24}
										className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
											}`}
									/>
									<X
										size={24}
										className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
											}`}
									/>
								</div>
							</button>
						</div>
					</div>
				</div>
			</nav>
			<div
				className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${isOpen
						? 'opacity-100 pointer-events-auto'
						: 'opacity-0 pointer-events-none'
					}`}
				onClick={handleOverlayClick}
			>
				{/* Backdrop */}
				<div
					className={`absolute inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-50' : 'opacity-0'
						}`}
				/>

				{/* Sidebar */}
				<div
					className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
						}`}
				>
					{/* Sidebar Header */}
					<div className="flex items-center justify-between p-6 border-b border-gray-100">
						<h2 className="text-lg font-bold text-gray-900">Menu</h2>
						<button
							onClick={() => setIsOpen(false)}
							className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
							aria-label="Close menu"
						>
							<X size={20} />
						</button>
					</div>

					{/* Sidebar Navigation */}
					<div className="px-6 py-8 space-y-2">
						{[
							{ id: 'about', label: 'About Us' },
							{ id: 'services', label: 'Services' },
							{ id: 'why-choose', label: 'Why Choose Us' },
							{ id: 'team', label: 'Our Team' }
						].map((item, index) => (
							<button
								key={item.id}
								onClick={() => handleScrollTo(item.id)}
								className={`block w-full text-left px-4 py-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium transform hover:translate-x-1`}
							>
								{item.label}
							</button>
						))}

						{/* Contact Button */}
						<button
							onClick={() => handleScrollTo('contact')}
							className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-4 rounded-lg mt-6 transition-all duration-300 font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
						>
							Contact Us
							<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
						</button>
					</div>

					{/* Sidebar Footer */}
					<div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100">
						<p className="text-sm text-gray-500 text-center">
							© 2024 EDFLIX SOL PVT LTD
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavBar;