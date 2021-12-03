import React from 'react'

export default function GrandChildTwo({name,age}) {
    return (
        <div>
            <h3>This is child in child Two component and grandchild to app</h3>
            <h4>student name is {name}, he is {age} years old.</h4>
        </div>
    )
}
