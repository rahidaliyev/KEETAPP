import React from 'react'
import { VscBook } from 'react-icons/vsc'
import './Navbar.css'

export default function Navbar() {
    const style = { color: "#A020F0", marginLeft: '-1100px', marginTop: '20px' }
    return (
        <div>
            <nav>
                <div className='nav-container'>
                    <VscBook size={50} style={style} />
                    <div>
                        <input placeholder='axtarış...' />
                    </div>
                    <a href='#' >Home</a>
                    <a href='#'>Home</a>
                    <a href='#'>Home</a>
                    <a href='#'>Home</a>

                </div>
            </nav>
        </div>
    )
}
