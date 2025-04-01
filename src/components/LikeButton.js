import React, {useState} from "react";
function LikeButton(){
    const[likes,setLikes]=useState(0);

return (
    <div>
        <h2>Likes:{likes}</h2>
        <button onClick={() => setLikes(likes+1)}>Like</button>
        {likes >=5 && <p>Thank You</p>}
        <button onClick={() => setLikes(Math.max(0, likes - 1))}>👎 Dislike</button>

    </div>
);
}
export default LikeButton;