import FeaturesSection from '../components/FeaturesSection.jsx';
import HeroSection from '../components/HeroSection.jsx';
import Navbar from '../components/Navbar.jsx';
import ReviewsSection from '../components/ReviewsSection.jsx';


function Home() {
  return (
    <div>
      <Navbar/>

    <HeroSection/>

    <FeaturesSection/>

    <ReviewsSection/>

    </div>
  );
}

export default Home;