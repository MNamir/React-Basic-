import React from 'react';
import './index.css';
import Scrollspy from 'react-scrollspy';
import Content from './content';

function Spy() {


  window.onscroll = function () {
    const body = document.querySelector("body");
    var yscroll = window.scrollY;
    if (yscroll > 20) {
      body.classList.add("lelele");
    }
    else {
      body.classList.remove("lelele");

    }
  };
  const addClass = () => {
    document.querySelector("body").classList.add("scrolled");
  }
  return (
    <div>
      <Scrollspy className="scrollspy" items={['section-1', 'section-2', 'section-3']} currentClassName="nav-link">
        <li><a href="#section-1" onClick={addClass}>section 1</a></li>
        <li><a href="#section-2" onClick={addClass}>section 2</a></li>
        <li><a href="#section-3" onClick={addClass}>section 3</a></li>
      </Scrollspy>
      <Content />
    </div>

  );
}

export default Spy;