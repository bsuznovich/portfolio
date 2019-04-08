import React, {Component} from 'react'
import SimpleImageSlider from 'react-simple-image-slider'
import './Projects.scss'

export default class Projects extends Component{
    render(){
        const sortingPlaceImages = [
            {url: 'https://static.wixstatic.com/media/bf77e9_f72e27fb3f044366bac60a3a5b8614b0~mv2_d_2880_1800_s_2.png'},
            {url: 'https://static.wixstatic.com/media/bf77e9_f2cef517e28a40bbb8471ca56ed1f6b4~mv2_d_2880_1800_s_2.png'},
            {url: 'https://static.wixstatic.com/media/bf77e9_0987ec6bbbf3437c903d156aa81ae263~mv2_d_2880_1800_s_2.png'},
            {url: 'https://static.wixstatic.com/media/bf77e9_e0d013152a604ccda637edf231dfb2d4~mv2_d_2880_1800_s_2.png'},
            {url: 'https://static.wixstatic.com/media/bf77e9_db21c2e6c4954de6a0ab8827293e7cef~mv2_d_2880_1800_s_2.png'},
            {url: 'https://static.wixstatic.com/media/bf77e9_3a600d62ad984687b140f2ee131e36b9~mv2_d_2880_1800_s_2.png'},
            {url: 'https://static.wixstatic.com/media/bf77e9_ab08756ce00d448ba9208dd0545aac10~mv2_d_2880_1800_s_2.png'},
        ]

        const cramifyImages = [
            {url: 'https://static.wixstatic.com/media/bf77e9_9010a83b6a974cf1b6a95b1e0da41453~mv2_d_2880_1642_s_2.png'},
            {url: 'https://static.wixstatic.com/media/bf77e9_361bf1f3237548498201c3ec1c35a88c~mv2_d_2880_1640_s_2.png'},
            {url: 'https://static.wixstatic.com/media/bf77e9_e82851341e4e412ca5b722eb160da55c~mv2_d_2880_1642_s_2.png'},
            {url: 'https://static.wixstatic.com/media/bf77e9_3ddea5c4c51b4676b7c93311aaf46b64~mv2_d_2880_1642_s_2.png'},
            {url: 'https://static.wixstatic.com/media/bf77e9_a462281cda8f4fd2be41314d9cb4d072~mv2_d_2880_1642_s_2.png'},
            {url: 'https://static.wixstatic.com/media/bf77e9_c3b5e2cce6344fda9e4f9fb945729eab~mv2_d_2880_1640_s_2.png'},
            {url: 'https://static.wixstatic.com/media/bf77e9_c25a89361504460e9816ac13aa28fb88~mv2_d_2880_1632_s_2.png'}
        ]
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
                    <div className='slider'>
                        <SimpleImageSlider className='slider-img' width={650} height={400} images={sortingPlaceImages}/>
                    </div>
                    <div className='slider1'>
                        <SimpleImageSlider className='slider-img' width={480} height={300} images={sortingPlaceImages}/>
                    </div>
                    <div className='slider2'>
                        <SimpleImageSlider className='slider-img' width={230} height={150} images={sortingPlaceImages}/>
                    </div>
                    <div className='slider3'>
                        <SimpleImageSlider className='slider-img' width={200} height={120} images={sortingPlaceImages}/>
                    </div>
                    
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
                    <div className='slider'>
                        <SimpleImageSlider width={650} height={375} images={cramifyImages}/>
                    </div>
                    <div className='slider1'>
                        <SimpleImageSlider width={480} height={300} images={cramifyImages}/>
                    </div>
                    <div className='slider2'>
                        <SimpleImageSlider width={230} height={150} images={cramifyImages}/>
                    </div>
                    <div className='slider3'>
                        <SimpleImageSlider width={200} height={120} images={cramifyImages}/>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}