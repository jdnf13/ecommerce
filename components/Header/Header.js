import React from 'react';
import TopBar from './TopBar/TopBar';
import Menu from './Menu/Menu';

export default function Header() {
  return (
    <div className='header'>
      <TopBar/>
      <Menu/>
    </div>
  );
}
