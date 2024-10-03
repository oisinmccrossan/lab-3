import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/navigationbar';
import Header from './Components/header';
import Footer from './Components/footer';
import Content from './Components/content';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Content />} />
        <Route path="/read" element={<Header />} />
        <Route path="/create" element={<Footer />} />
      </Routes>
      
    </Router>
  );
}

export default App;