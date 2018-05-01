import React from 'react'

import MainPageLayout from '../../components/mainPageLayout';
import Footer from '../../components/footer';
import Header from '../../components/header'

function Layout ({children}){
  return (
    <div className='view-container'>
        <Header/>
        <MainPageLayout component={children}/>
        <Footer/>
    </div>
  )
}

export default Layout
