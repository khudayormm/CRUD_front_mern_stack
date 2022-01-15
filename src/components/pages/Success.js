import React from 'react'
import { Link } from 'react-router-dom'

function Success() {
    return (
        <div className="pages">
            <div className="success-header">
                <h1>SUCCESS ADDED DATA!</h1>   
                <Link type='button' title='CREATE THE PLAYER ' className="success-btn" to="/create">CREATE THE PLAYER </Link> 
                <Link type='button' className="success-btn" to="/players">BACK TO LIST</Link>
            </div>
        </div>
    )
}

export default Success
