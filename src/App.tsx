import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TeamSection from './components/TeamSection';
import ServicesSection from './components/ServicesSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <Hero />
      <TeamSection />
      <ServicesSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
