import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import './style.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
