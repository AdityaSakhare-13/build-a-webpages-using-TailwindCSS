import { createRoot } from 'react-dom/client';
import './index.css';
import{BrowserRouter,Routes,Route} from 'react-router';
import Home from './views/Home.jsx';
import AllBicycles from './views/AllBicycles.jsx';
import Contact from './views/Contact.jsx';
import BicycleDetails from './views/BicycleDetails.jsx';




const rootElement = createRoot(document.getElementById('root'));

rootElement.render(
<div className='bg-orange-100'>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/explore" element={<AllBicycles/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/Bicycle-details" element={<BicycleDetails/>}/>
        </Routes>
    </BrowserRouter>
</div>
);

