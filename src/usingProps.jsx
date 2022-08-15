import React from "react";

function Props(props){
 return (  <>
    <h1>
        My name is {props.name}
    </h1>
    <p>
       Designation is {props.job}
    </p>
    </>);
}

export default Props;