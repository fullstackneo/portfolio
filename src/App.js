import React from 'react';
import { Header, Footer, Project, Contact } from './components';

function App() {
  const navList = ['About me', 'Portfolio', 'Contact', 'Resume'];
  return (
    <div>
      <Header navList={navList} />
      <Project />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
