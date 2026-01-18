import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <motion.div 
      className="min-h-screen bg-background text-foreground transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Contact />
    </motion.div>
  );
}
