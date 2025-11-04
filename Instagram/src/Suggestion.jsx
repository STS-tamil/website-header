import axios from "axios";
import React, { useEffect, useState } from "react";

function Suggestion(){
    const [profile,setProfile] = useState(null)
    const [suggestions,setSuggestions] = useState([])

    useEffect(()=>{
       fetch('http://localhost:3000/profile/').then(data => data.json())
       .then(data => setProfile(data)).catch(err =>console.log(err))

       fetch('http://localhost:3000/suggestion/').then(data => data.json())
       .then(data => setSuggestions(data)).catch(err =>console.log(err))

    },[])

    const handlefollw = async(id,username) =>{
        axios.post('http://localhost:3000/followers',{"id":id,"username":username})
        .then(alert('followed'))
        .catch(err => console.log(err))
    }
    return(
        <div>
            <div className="suggestions m-4 ">
                 {profile ? 
                <div className="d-flex"> <img className="dp rounded-circle" src={profile.userImage} alt="profile" />
                    <h5>{profile.username}</h5>
                    <small className="ms-auto text-primary">Switch</small>
                </div>
            :  <p>Loading...</p> }

                <div className="d-flex mt-4">
                    <p>Suggested for you</p>
                    <b className="ms-auto">See All</b>
                </div>

             {suggestions.length >0 ? (
                <div>{suggestions.map(suggestion=>(
                    <div className="my-2" key={suggestion.id}>
                        <div className="d-flex"> <img className="dp rounded-circle" src={suggestion.userImage} alt="user" />
                        <h5>{suggestion.username}</h5>
                        <a className="text-primary ms-auto btn btn-primary text-white" onClick={()=>{handlefollw(suggestion.id,suggestion.username)}}>Follow</a>
                        </div>
                    </div>
                ))}</div>
             ) :( 
                <div>Loading </div>
             )}
             

            </div>     
        </div>
    )
}

export default Suggestion