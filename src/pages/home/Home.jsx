import React from 'react'
import './home.css'
import { Navbar, Header, Brand } from '../../components'

function Home() {
    return (
        <div className="App">
          <div className='gradient__bg'>
            <Navbar />
            <Header />
          </div>
            <Brand />
        </div>

    )
}

export default Home
