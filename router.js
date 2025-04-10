// Problem:
// You are building a React application with routing, but the app is missing proper navigation.

// import React from 'react';

// const Home = () => <h2>Home Page</h2>;
// const About = () => <h2>About Page</h2>;

// const App = () => {
// return (
// <div>
// <Home />
// <About />
// </div>
// );
// }

// export default App;


// Modify the code to use React Router for navigating between the Home and About pages.
// Add a simple navigation bar with links to navigate between the pages.

// Solution :
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;