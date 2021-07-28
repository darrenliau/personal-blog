import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage= () => {
  return (
    <div>
      <Layout>
      <h1>Hello!</h1>
      <h2>I'm Darren, a soon to be graduate with a Computer Science major in Auckland.</h2>
      <p>Need a developer? <Link to='/mycontacts'>Contact me</Link></p>
      <p>Want to know more about me? <Link to='/aboutme'>Click Me!</Link></p>
      </Layout>
    </div>
  )
}

export default IndexPage