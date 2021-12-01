import React from "react";

//{title,image_src,content}
function Post(props){
    //{title,content,image_src}
    return(
        
            <div className="Post">
                <div className="post-title">
                    <h2>{props.title}</h2>
                </div>

                <img class="post-image" src={props.image_src}/>

                <div className="post-content">
                    {props.content}
                </div>
            </div>
            
            
        

    )

}

export default Post;
