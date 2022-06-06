import React, { useState } from 'react';
import { Header, Footer, Project, Contact } from './components';

function App() {
  const navList = ['About me', 'Portfolio', 'Contact', 'Resume'];
  const [currentTab, setCurrentTab] = useState('About me');
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Header
        navList={navList}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      {!contactSelected ? <Project /> : <Contact />}

      {/* <Footer /> */}
    </div>
  );
}

export default App;
