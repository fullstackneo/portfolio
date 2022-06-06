import React from 'react';

function Footer() {
  const contacts = [
    {
      name: 'github',
      icon: '',
      link: 'https://github.com/fullstackneo',
    },
    {
      name: 'linkedin',
      icon: '',
      link: 'https://www.linkedin.com/',
    },
    ,
    {
      name: 'stackoverflow',
      icon: '',
      link: 'https://stackoverflow.com/users/17909748/fullstackneo/',
    },
  ];
  return (
    <footer>
      {contacts.map(item => (
        <a key={item.name} target="_blank" href={item.link}>
          {item.icon}
        </a>
      ))}
    </footer>
  );
}

export default Footer;
