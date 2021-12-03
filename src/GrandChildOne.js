import React, { useContext } from 'react'
import { MyContext } from './context'

export default function GrandChildOne() {
    const {setUser,user} = useContext(MyContext)
    return (
        <div>
            <h3>Child in Child One component and grandchild for App component</h3>
            <button onClick={()=>setUser({...user,age:user.age+1})}>increment student age</button>

          
        </div>
    )
}
