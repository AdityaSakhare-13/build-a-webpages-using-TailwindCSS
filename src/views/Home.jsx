import FeaturesSection from '../components/featuresSection.jsx';
import HeroSection from '../components/HeroSection.jsx';
import Navbar from '../components/Navbar.jsx';



function Home() {
  return (
    <div>
      <Navbar/>

    <HeroSection/>

    <FeaturesSection/>
    </div>
  );
}

export default Home;