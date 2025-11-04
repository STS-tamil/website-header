import React, { useEffect, useState } from "react"
import axios from 'axios'

function Profile(){

    const [profile,setProfile] = useState(null)

    const [followers,setFollowers] = useState([])

    const [unfollowed,setUnfollowed] = useState(0)

    useEffect(()=>{
      axios.get('http://localhost:3000/profile')
      .then(data => setProfile(data.data))
      .catch(err => console.log(err))

      axios.get('http://localhost:3000/followers')
      .then(data => setFollowers(data.data))
      .catch(err => console.log(err))
    },[unfollowed])

    function handleOnchange(e){
       setProfile(prev => ({
           ...prev,[e.target.name]: e.target.value
       }))
    }

    const handleupdate = async() =>{
       axios.put('http://localhost:3000/profile',profile)
       .then(console.log("Updated"))
       .catch(err => console.log(err))
    }

    const handledelete = async(id) =>{
      axios.delete(`http://localhost:3000/followers/${id}`)
      .then(alert("UNfollowed"))
      .then(setUnfollowed(!unfollowed))
      .catch(err => console.log(err))
    }

    return(
        <div className="m-5">
             {profile ? (
                <div>
                  <img src={profile.userImage} alt="Profile Image" className="profile rounded-circle" />
                  <h5>{profile.username}</h5>
                  <input type="text" 
                         value={profile.username}
                         name="username"
                         className="form-control my-4"
                         onChange={handleOnchange}
                  />
                  <input type="text" name="profile_pic" value={profile.userImage} className="form-control" onChange={handleOnchange}/>
                  <button className="btn btn-primary m-4" onClick={handleupdate}>Update</button>
             </div>):(
                <div>Loading Profile</div>
                )}

            {followers.length>0 ? (
             followers.map(follower => (
              <div key={follower.id} className="d-flex my-2">
                {follower.username}
                <button className="btn btn-secondary ms-auto" onClick={()=>{handledelete(follower.id)}}>unfollow</button>
              </div>
             ))
            ):(
             <div> Loading Followers</div>
             ) }
        </div>
    )
}

export default Profile