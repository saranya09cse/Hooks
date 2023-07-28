import React, { useState } from 'react';


const UseStateArray = () => {
    const [profile,setProfile] = useState({
      name: "Saranya",
      job: "Software Engineer",
      company: "TCS"
    })
    const updateCompany = () =>{
        setProfile({...profile,company:"Google"});
    };

  return (
    <div>
      <section className='--flex-center --100vh --bg--primary'>
        <div className="container">
            <h1 className={"--color--white"}>Array </h1>
              <div className='--flex-between --bg-light --my --card'>
                  <h2>{profile.name}</h2>
                  <h4>{profile.job}</h4>
                  <h4>{profile.company}</h4>
              </div>
            <button className='--btn --btn-danger' onClick={()=>updateCompany()}>Update Company</button>
        </div>
      </section>
    </div>
  )
}

export default UseStateArray
