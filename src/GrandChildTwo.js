import React,{useContext} from "react";
import { MyContext } from "./App.js";


export default function GrandChildTwo() {
    const {user: {name,age}} = useContext(MyContext)
    return (
      <div>
                <h3>
                  This is child in child Two component and grandchild to app
                </h3>
                <h4>student name is {name} , he is {age} years old.</h4>
      </div>
    );
  }







/* export default function GrandChildTwo() {
  return (
    <div>
      <MyContext.Consumer>
        {(context) => {
          return (
            <>
              <h3>
                This is child in child Two component and grandchild to app
              </h3>
              <h4>student name is {context.user.name}, he is {context.user.age} years old.</h4>
            </>
          );
        }}
      </MyContext.Consumer>
    </div>
  );
} */
