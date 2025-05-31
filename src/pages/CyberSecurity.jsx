import NavBar from '../components/NavBar'
import HeroSection from '../components/Cyber/HeroSection'
import ProcessSection from '../components/Cyber/ProcessSection'
import TechStackMarquee from '../components/Cyber/TechStackMarquee'
import ContactSection from '../components/ContactSection'
import ContactFormSection from '../components/ContactFormSection'
import Footer from '../components/Footer'

const CyberSecurity = () => {
	return (
		<div className="min-h-screen">
			<NavBar />
			<HeroSection />
			<ProcessSection />
			<TechStackMarquee />
			<ContactSection />
			<ContactFormSection />
			<Footer />
		</div>
	)
}

export default CyberSecurity