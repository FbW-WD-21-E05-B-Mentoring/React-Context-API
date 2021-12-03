import React from 'react'

export default function GrandChildOne({setUser}) {
    return (
        <div>
            <h3>Child in Child One component and grandchild for App component</h3>
            <button onClick={()=>setUser((user)=>({...user,age:user.age+1 }))}>increment student age</button>

           {/*  <button onClick={()=>setUser((user)=>{return {...user,age:user.age+1 }})}>increment student age</button> */}
        </div>
    )
}
