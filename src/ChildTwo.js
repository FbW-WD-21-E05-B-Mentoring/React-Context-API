import React from 'react'
import GrandChildTwo from './GrandChildTwo'

export default function ChildTwo({name,age}) {
    return (
        <div>
             <h2>This is Child Two Component inside App</h2>
             <GrandChildTwo name={name} age={age}/>
        </div>
    )
}
