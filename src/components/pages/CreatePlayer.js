import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../css/pages.css'

function CreatePlayer() {
    const [full_name, setFullname] = useState('');
    const [club, setClub] = useState('');
    const [age, setAge] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('api/create', {
            full_name,
            club,
            age
        })
        .then((res) => {
            navigate('/success')
        }).catch((err) => {
            console.log(err)
        });
    }     

    return (
       <div className="pages">
           <h2 className="header-text">CREATE PLAYER</h2>
           <form onSubmit={handleSubmit}>
               {/* Player Name */}
               <div className="input-form">
                    <label htmlFor="player">Player Name</label>
                    <input
                        type="text"
                        id="player" 
                        className="input-text" 
                        onChange={(e) => setFullname(e.target.value)}   
                        value={full_name}
                        required
                        minLength={2}               
                    />
                     <small> &nbsp; </small>
               </div>
                {/* Club name */}
                <div className="input-form">
                    <label htmlFor="club">Club Name</label>
                    <input
                        type="text"
                        id="club" 
                        className="input-text"    
                        onChange={(e) => setClub(e.target.value)}  
                        value={club}  
                        required
                        minLength={3}           
                    />
                     <small> &nbsp; </small>
                </div>
                {/* Age */}
                <div className="input-form">
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        className="input-text"  
                        onChange={(e) => setAge(e.target.value)} 
                        value={age}      
                        required  
                        min={5}
                        max={99}  
                    />
                    <small> &nbsp; </small>
                </div>

                <div className="input-form">
                    <button className="create-submit">SUBMIT</button>
                </div>

           </form>
       </div>
    )
}

export default CreatePlayer
