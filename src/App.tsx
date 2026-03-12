import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Projects from './pages/Projects';
import About from './pages/About';
import University from './pages/University';
import Contact from './pages/Contact';
import { SpeedInsights } from "@vercel/speed-insights/next"

/**
 * WELCOME TO YOUR PERSONAL WEBSITE TEMPLATE!
 * 
 * I have set up the structure for you. Look for comments starting with "TODO:" 
 * to find where you should add your own text and images.
 */

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/university" element={<University />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
