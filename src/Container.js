import React,{useState} from 'react'
import { MyContext } from './context'

export default function Container({children}) {
    const [user,setUser] = useState({name:"Joseph",age:23})

    return (
        <MyContext.Provider value={{user,setUser}}>
                {children}
        </MyContext.Provider>
    )
}

