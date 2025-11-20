import { createRoot } from 'react-dom/client';
import './index.css';
import{
    BrowserRouter,Routes,Route
} from 'react-router';
import Home from './views/Home.jsx';



const rootElement = createRoot(document.getElementById('root'));

rootElement.render(
<div className='bg-orange-100'>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </BrowserRouter>
</div>
);

