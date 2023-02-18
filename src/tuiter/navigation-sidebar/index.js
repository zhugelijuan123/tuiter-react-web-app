import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

const NavigationSidebar = (
 {
   active = 'home'
 }
) => {
 return (
   <div className="list-group">
     <i className = "list-group-item bi bi-twitter"></i>

     <div className={`list-group-item ${active === 'home'?'active':''}`}>
     <i className = "mt-1 col-1 bi bi-house"></i>
     <text >&nbsp;&nbsp; Home</text>
     </div>

     <div className={`list-group-item ${active === 'explore'?'active':''}`}>
          <i className = "mt-1 col-1 bi bi-hash"></i>
          <text >&nbsp;&nbsp; Explore</text>
     </div>

     <div className={`list-group-item ${active === 'notifications'?'active':''}`}>
               <i className = "mt-1 col-1 bi bi-bell"></i>
               <text >&nbsp;&nbsp; Notifications</text>
          </div>

     <div className={`list-group-item ${active === 'messages'?'active':''}`}>
               <i className = "mt-1 col-1 bi bi-envelope"></i>
               <text >&nbsp;&nbsp; Messages</text>
          </div>

     <div className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
                    <i className = "mt-1 col-1 bi bi-bookmark"></i>
                    <text >&nbsp;&nbsp; Bookmarks</text>
               </div>

     <div className={`list-group-item ${active === 'lists'?'active':''}`}>
                    <i className = "mt-1 col-1 bi bi-list"></i>
                    <text >&nbsp;&nbsp; Lists</text>
               </div>

     <div className={`list-group-item ${active === 'profile'?'active':''}`}>
                    <i className = "mt-1 col-1 bi bi-person"></i>
                    <text >&nbsp;&nbsp; Profile</text>
               </div>

     <div className={`list-group-item ${active === 'more'?'active':''}`}>
                    <i className = "mt-1 col-1 bi bi-chat-square-dots-fill"></i>
                    <text >&nbsp;&nbsp; More</text>
               </div>

   </div>
 );
};
export default NavigationSidebar;

