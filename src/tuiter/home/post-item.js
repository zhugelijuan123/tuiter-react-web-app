import React from "react";
const PostItem = (
 {
   post = {
     "head":"../../images/head1.jpeg",
     "userName": "Elon Mush",
     "handle":"elonmusk",
     "time": "23h",
     "topic": "Amazing show about @Inspiration4x misiion!",
     "image": "../../images/musk.jpeg",
     "title":"Countdon: Inspiration4 Mission to Space I Netflix Official Site",
     "content":"From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space -netflix.com.",
     "comment":"4.2k",
     "forward":"3.5k",
     "like":"37.5k"
   }
 }
) => {
 return(
  <div class = "mt-2 display-flex">
      <div class="col-2">
      <img class="wd-border-all-darkgray ms-2 mt-3 rounded-pill wd-img-width-60px" src={`/images/${post.head}`}/>
      </div>
      <div class="col-10 ms-2 ">
          <a class="text-black wd-font-bold wd-text-decoration">{post.userName}️</a>
          <a class="wd-color-darkgray wd-text-decoration"> ☑️ {post.handle} . {post.time}</a>
          <br></br>
          <a class="text-black wd-font-bold wd-text-decoration">️{post.topic}</a>
          <br></br>
          <img class="wd-border-all-darkgray ms-2 mt-3 wd_rounded_pic wd-img-width-350px" src={`/images/${post.image}`}/>
          <div class="wd-border-all-darkgray">
              <a class="text-black wd-font-bold wd-text-decoration"> {post.title}</a>
              <p class = "wd-color-darkgray wd-text-decoration"> {post.content}</p>
          </div>
          <div class = "display-flex">
                      <img  class = "wd-icon-size" src="../../images/comment.png"/>
                      <a class = "wd-color-lightgray wd-text-decoration ">&nbsp;{post.comment}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                      <img class = "wd-icon-size" src="../../images/forward.png"/>
                      <a class = " wd-color-lightgray wd-text-decoration">&nbsp;{post.forward}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                      <img class = "wd-icon-size" src="../../images/like.png"/>
                      <a class = "wd-color-lightgray wd-text-decoration">&nbsp;{post.like}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                      <img class = "wd-icon-size" src="../../images/share.png"/>
          </div>
      </div>
  </div>
 );
};
export default PostItem;

