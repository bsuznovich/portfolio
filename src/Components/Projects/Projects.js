import React from 'react'
import './Projects.scss'

export default function Projects(){
    return(
        <div className='projects'>
            <div className='projectHolder'>
                <h2>Projects</h2>

                <div className='sortingPlace'>
                    <h3>Sorting Place</h3>
                    <p>This is a Harry Potter themed website. Here, the user is able to enroll (once done, the user will receive an acceptance email), be sorted into a school house, edit profile (change name, house points, and add a photo), and see information about each house.</p>
                    <p>This web application is built with React. Other technologies include: redux (to hold user information), nodemailer (to email the user and acceptance letter), and  amazon S3 (to allow the user to upload pictures).</p>
                    <a href='https://github.com/bsuznovich/schoolofhogwarts' target='_blank'>
                        <p>GITHUB</p>
                    </a>
                    <a href='http://www.sortingplace.xyz/#/' target='_blank'>
                        <p>Sorting Place</p>
                    </a>
                </div>

                <div className='cramify'>
                    <h3>Cramify</h3>
                    <p>This is a Kahoot like website. Here, the user can sign up, set up a study based game and play with their friends. They also have the ability to create and delete their own question sets. The user can also log in as a guest to play. </p>
                    <p>This web application is built with React. Other technologies include: redux, sockets, and SASS.</p>
                    <a href='https://github.com/Cramify/cramify' target='_blank'>
                        <p>GITHUB</p>
                    </a>
                    <a href='https://cramify.net/#/' target='_blank'>
                        <p>Cramify</p>
                    </a>
                </div>
            </div>
        </div>
    )
}