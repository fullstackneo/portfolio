import React from 'react';

function Footer() {
  const contacts = [
    {
      icon: '',
      link: 'https://github.com/fullstackneo',
    },
    {
      icon: '',
      link: 'https://www.linkedin.com/',
    },
    ,
    {
      icon: '',
      link: 'https://stackoverflow.com/users/17909748/fullstackneo/',
    },
  ];
  return (
    <footer>
      {contacts.map(item => (
        <a target="_blank" href={item.link}>
          {item.icon}
        </a>
      ))}
    </footer>
  );
}

export default Footer;
