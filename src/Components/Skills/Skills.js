import React from 'react'
import './Skills.scss'

export default function Skills(){
    return(
        <div className='skills'>
            <div className='container'>
                <h2>Skills</h2>
                <div className='skillsHolder'>
                    <div className='html'>
                        <img src='https://cdn0.iconfinder.com/data/icons/HTML5/512/HTML_Logo.png' alt='' />
                        <h5>HTML</h5>
                    <div className='css'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/730px-CSS.3.svg.png' alt='' />
                        <h5>CSS</h5>
                    </div>
                    </div>
                    <div className='react'>
                        <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' alt='' />
                        <h5>React</h5>
                    <div className='js'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' alt='' />
                        <h5>JavaScript</h5>
                    </div>
                    </div>
                    <div className='sql'>
                        <img src='http://www.stickpng.com/assets/images/584815fdcef1014c0b5e497a.png' alt='' />
                        <h5>SQL</h5>
                    <div className='node'>
                        <img src='https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png' alt='' />
                        <h5>Node</h5>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}