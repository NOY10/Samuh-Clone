import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from 'react-router-dom';
import './Header.css';
import img from './img/f-logo.png'

function Header() {
    let lastScroll = 0;
    

    window.addEventListener("scroll", () => {
        const header = document.querySelector('header');
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll) {
        // down
            header.classList.remove('fixed',currentScroll < lastScroll);
            header.classList.toggle('scrolling_down',currentScroll > lastScroll);
            setTimeout(() => header.classList.toggle('fixed',true), 500);
            setTimeout(() => header.classList.remove('scrolling_down',true), 500);
        } else  {
        // up
            header.classList.toggle('fixed',window.scrollY > 0);
            header.classList.remove('scrolling_down',currentScroll > lastScroll);
            console.log(lastScroll)
            if (currentScroll < 1){
                header.classList.add('header',true);
            }
        }
        lastScroll = currentScroll;

    });

  return (
    <header className='header'>
        <div className='container'>
            <div className='main-header'>
                <div className='logo' >
                <a href='www.google.com'> <img src={img} alt='icon'/></a>
            </div>
            <div className='main-menu'>
                <div className='menu'>
                    <li>
                        <NavLink  to="/" >Home</NavLink> 
                    </li>
                    <li>
                        <NavLink  to="/t" >Movies</NavLink>  
                    </li>
                    <li>
                        <NavLink  to="/e" >Series</NavLink> 
                    </li>
                    <li>
                        <NavLink  to="/a" >Shows</NavLink>  
                    </li>
                    <li>
                        <NavLink  to="/i" >Mvideos</NavLink>  
                    </li>
                    <li>
                        <NavLink  to="/o" >Kids</NavLink> 
                    </li>
                    <li>
                        <NavLink  to="/u" >Vcinema</NavLink>  
                    </li>
                </div>
            </div>
            <div className='header-right'>
                <div className='header-search'>
                    <div className='search-box'>
                        <form className='search-form'>
                            <input type="text" value="Search"/>
                            <SearchIcon />  
                        </form>
                            
                    </div>
                </div>
                <div className='login-regis'>
                    <a className='btn'>Login</a>
                    <a className='btn'>Sign Up</a>
                </div>
            </div>
            </div>
            
        </div>
            
    </header>
  )
}

export default Header