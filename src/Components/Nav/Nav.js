import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.scss'

export default function Nav(){
    return(
        <div className='nav'>
            <div className='bs'>
                <h3>BS</h3>
            </div>
            <div className='routes'>
                <Link to='/'>
                <h3>Home</h3>
                </Link>
                <p>|</p>
                <Link to='/about'>
                <h3>About</h3>
                </Link>
                <p>|</p>
                <Link to='/skills'>
                <h3>Skills</h3>
                </Link>
                <p>|</p>
                <Link to='projects'>
                <h3>Pojects</h3>
                </Link>
                <p>|</p>
                <Link to='contact'>
                <h3>Contact</h3>
                </Link>
            </div>
        </div>
    )
}