import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'


const contactPage = () =>{
    return (
        <div>
            <Layout>
            <h1>Contact Details</h1>
            <p>Phone Number: +64220288943</p>
            <p>Email: darren6250@icloud.com</p>
            <p>GitHub Link: <a href="https://github.com/darrenliau">https://github.com/darrenliau</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/ming-sheng-liau-2b80401b4/">https://www.linkedin.com/in/ming-sheng-liau-2b80401b4/</a></p>
            <p>Want to know more about me? <Link to='/aboutme'>Click Me!</Link></p>
            </Layout>
        </div>
        
    )
}

export default contactPage 