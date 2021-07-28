import React from 'react'
import {Link} from 'gatsby'
import Layout from "../components/layout"

const AboutPage = () =>{
    return(
        <div>
            <Layout>
                <h1>About Me</h1>
                <h3>Liau Ming Sheng (Darren)</h3>
                <p>I am a final year Computer Science student from Malaysia currently studying in the University of Auckland. I am currently working part time in a hotpot restaurant, this job really developed my customer service skills as I was consistently assisting customers in the store. I was previously part of a student club committee that organises events for people and this role has equipped me with the ability to work in a team environment better. I’ve recently also volunteered to help a starting dessert store to create their website. For this, I am self learning gatsby.js mysql and aws.amplify as the main tools and framework for the project.  Now I’m looking forward to develop my skills and start my first step for a career in the tech industry.</p>
                <p> During my free time, some of my relevant hobbies include watching youtube channels like codewithChris, The Net Ninja, things like TedTalks videos on the latest technological advancements, to keep up with current and upcoming technological trends. These are some of the things of my interest that I believe would contribute to help me do my job better in the workplace. I also enjoyed my time playing ultimate frisbee as the sport is about teamwork and to try to work together to defence the frisbee from getting to the end zone and cooperate to send the frisbee to the end zone when its our time to offence. Through this sport I am able to make better communication between the team which I think may help me in a workplace environment. I also enjoyed my time as a student club committee to organise events for over 200 members. Through communicating with club members as well as external organizations, I had to learn to be understanding to make sure that their needs are met. I strongly believe that this will  help me in a workplace environment</p>
                <p>Want to contact me? <Link to="/mycontacts">Click Me!</Link></p>
            </Layout>
        </div>
    )
}

export default AboutPage