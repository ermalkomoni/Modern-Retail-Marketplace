/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
function getTwoDecimal(num) {
    // The +0.5 smoothens the transition change
    return parseFloat(num.toFixed(2) + 0.5);
  }
  
  const mouse = {
    decimal(coord) {
      return getTwoDecimal(coord / 1000);
    },
    x(e) {
      return Math.abs(e.clientX - window.innerWidth / 2);
    },
    y(e) {
      return Math.abs(e.clientY - window.innerHeight / 2);
    } };
  
  
  const changeTextAlphaVal = (txt, e) => {
    const root = document.querySelector(":root");
    const cssVar = "--alpha";
    const currentAlpha = getComputedStyle(root).
    getPropertyValue(cssVar).
    trim();
  
    const max = parseFloat(currentAlpha);
    const dx = mouse.decimal(mouse.x(e));
    const dy = mouse.decimal(mouse.y(e));
  
    let alphaVal;
    if (dx <= 0) {
      alphaVal = dy >= max ? dy : getTwoDecimal(max - dy);
    } else {
      alphaVal = dx >= max ? dx : getTwoDecimal(max - dx);
    }
  
    txt.style.setProperty(cssVar, alphaVal);
  };
  
  function createShadow(e, currTarget) {
    // Walk effect based on Wes Bos' Mouse Move Shadow Exercise
    // https://tinyurl.com/touabxe
    const walk = Math.round(Math.max(window.innerWidth, window.innerHeight) / 6); // Or use 150?
    const coordWalk = (coord, side) => Math.round(coord / side * walk - walk / 2);
    const xWalk = coordWalk(e.clientX, currTarget.offsetWidth);
    const yWalk = coordWalk(e.clientY, currTarget.offsetHeight);
  
    const pink = [255, 0, 139];
    const blue = [0, 86, 255];
    const yellow = [255, 240, 0];
    const typoAlpha = 0.6;
  
    const typo = currTarget.querySelector(".typo");
    changeTextAlphaVal(typo, e); // Comment this if you don't want the text alpha opacity to change on interaction
  
    typo.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(${pink}, ${typoAlpha}),
        ${xWalk * -1}px ${yWalk * 2}px 0 rgba(${blue}, ${typoAlpha}),
        ${xWalk * -2}px ${yWalk * -1}px 0 rgba(${yellow}, ${typoAlpha})
      `;
  }
  
  function onMouseMove(e) {
    createShadow(e, e.currentTarget);
  }
  function onTouchMove(e) {
    createShadow(e.changedTouches[0], e.currentTarget);
  }
  
  const heading = document.querySelector(".heading");
  heading.addEventListener("mousemove", onMouseMove);
  heading.addEventListener("touchmove", onTouchMove);