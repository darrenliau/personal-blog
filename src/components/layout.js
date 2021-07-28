import React from 'react' 
import Footer from '../components/footer'
import Header from '../components/header'
import "../styles/index.scss"
import * as layoutStyles from "./layout.module.scss"
const layout =(props) =>{
    return (
        
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header/>
                {props.children}
            </div>
            
            <Footer/>
        </div>
    )
}

export default layout