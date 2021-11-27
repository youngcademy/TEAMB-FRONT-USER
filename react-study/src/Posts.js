import React from "react";
import "./Posts.css"

function Posts(props)
{
    console.log(props);
    return (

    <div className="posts">
        {props.children}
    </div>
    )
}


export default Posts;
