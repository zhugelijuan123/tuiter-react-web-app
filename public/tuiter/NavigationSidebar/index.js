const NavigationSidebar = (flag) => {
 return(`
   <div class = "wd-backgroundcolor-lightdark wd-height-30 row">
   <i class = "text-white fab fa-twitter" aria-hidden="true"></i>
   </div>
   <a href = "../HomeScreen/index.html" class='wd-text-decoration' >
   <div style= ${flag==="home" ? "background-color:#06BBE3":"background-color:rgb(47, 51, 54)"} class = "wd-border-solid-darkgray wd-backgroundcolor-lightdark wd-height-30 row" >
       <i class = "text-white mt-1 col-1 fa fa-home"></i>
       <text class="text-white d-none d-xl-block col-1">Home</text>
   </div>
   </a>
   <a href = "../ExploreScreen/index.html" class='wd-text-decoration'>
   <div style= ${flag==="explore" ? "background-color:#06BBE3":"background-color:rgb(47, 51, 54)"} class = "wd-border-solid-darkgray wd-backgroundcolor-lightdark row wd-height-30  text-white">
       <i class = "text-white mt-1 col-1 fa fa-hashtag"></i>
       <text href = "../ExploreScreen/index.html" class="d-none d-xl-block col-1 text-white">Explore</text>
   </div>
   </a>
   <div style= ${flag==="notifications" ? "background-color:#06BBE3":"background-color:rgb(47, 51, 54)"} class = "wd-border-solid-darkgray wd-backgroundcolor-lightdark wd-height-30 row">
       <i class = "text-white mt-1 col-1 fa fa-bell"></i>
       <text class="d-none d-xl-block col-1 text-white">Notifications</text>
   </div>
   <div style= ${flag==="message" ? "background-color:#06BBE3":"background-color:rgb(47, 51, 54)"} class = "wd-border-solid-darkgray wd-backgroundcolor-lightdark wd-height-30 row">
       <i class = "text-white mt-1 col-1 fa fa-envelope"></i>
       <text class="d-none d-xl-block col-1 text-white">Messages</text>
   </div>
   <div style= ${flag==="bookmark" ? "background-color:#06BBE3":"background-color:rgb(47, 51, 54)"} class = "wd-border-solid-darkgray wd-backgroundcolor-lightdark wd-height-30 row">
       <i class = "text-white mt-1 col-1 fa fa-bookmark"></i>
       <text class="d-none d-xl-block col-1 text-white">Bookmarks</text>
   </div>
   <div style= ${flag==="list" ? "background-color:#06BBE3":"background-color:rgb(47, 51, 54)"} class = "wd-border-solid-darkgray wd-backgroundcolor-lightdark wd-height-30 row">
       <i class = "text-white mt-1 col-1 fa fa-list"></i>
       <text class="d-none d-xl-block col-1 text-white">Lists</text>
   </div>
   <div style= ${flag==="profile" ? "background-color:#06BBE3":"background-color:rgb(47, 51, 54)"} class = "wd-border-solid-darkgray wd-backgroundcolor-lightdark wd-height-30 row">
       <i class = "text-white mt-1 col-1 fa fa-user"></i>
       <text class="d-none d-xl-block col-1 text-white">Profile</text>
   </div>
   <div style= ${flag==="more" ? "background-color:#06BBE3":"background-color:rgb(47, 51, 54)"} class = "wd-border-solid-darkgray wd-backgroundcolor-lightdark wd-height-30 row">
       <i class = "text-white mt-1 col-1 fa fa-comment"></i>
       <text class="d-none d-xl-block col-1 text-white">More</text>
   </div>
   <div class = "row wd-height-30 mt-2 ">
       <button class="rounded-pill bg-primary text-white">Tweet</button>
   </div>
 `);
}
export default NavigationSidebar;

