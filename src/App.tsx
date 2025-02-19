import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import PrintQueue from './pages/PrintQueue';
import SchedulePrint from './pages/SchedulePrint';
import FrequentDocs from './pages/FrequentDocs';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/queue" element={<PrintQueue />} />
            <Route path="/schedule" element={<SchedulePrint />} />
            <Route path="/frequent" element={<FrequentDocs />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;