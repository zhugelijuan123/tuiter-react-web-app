const NavigationSidebar = () => {
 return(`
   <div class = "wd-backgroundcolor-lightdark wd-height-30 row">
   <i class = "text-white fab fa-twitter" aria-hidden="true"></i>
   </div>
   <div class = "wd-border-solid-darkgray wd-backgroundcolor-lightdark wd-height-30 row">
       <i class = "text-white mt-1 col-1 fa fa-home"></i>
       <text class="d-none d-xl-block col-1 text-white">Home</text>
   </div>
   <div class = "wd-border-solid-darkgray wd-backgroundcolor-lightdark row wd-height-30 bg-primary text-white">
       <i class = "text-white mt-1 col-1 fa fa-hashtag"></i>
       <text class="d-none d-xl-block col-1 text-white">Explore</text>
   </div>
   <div class = "wd-border-solid-darkgray wd-backgroundcolor-lightdark wd-height-30 row">
       <i class = "text-white mt-1 col-1 fa fa-bell"></i>
       <text class="d-none d-xl-block col-1 text-white">Notifications</text>
   </div>
   <div class = "wd-border-solid-darkgray wd-backgroundcolor-lightdark wd-height-30 row">
       <i class = "text-white mt-1 col-1 fa fa-envelope"></i>
       <text class="d-none d-xl-block col-1 text-white">Messages</text>
   </div>
   <div class = "wd-border-solid-darkgray wd-backgroundcolor-lightdark wd-height-30 row">
       <i class = "text-white mt-1 col-1 fa fa-bookmark"></i>
       <text class="d-none d-xl-block col-1 text-white">Bookmarks</text>
   </div>
   <div class = "wd-border-solid-darkgray wd-backgroundcolor-lightdark wd-height-30 row">
       <i class = "text-white mt-1 col-1 fa fa-list"></i>
       <text class="d-none d-xl-block col-1 text-white">Lists</text>
   </div>
   <div class = "wd-border-solid-darkgray wd-backgroundcolor-lightdark wd-height-30 row">
       <i class = "text-white mt-1 col-1 fa fa-user"></i>
       <text class="d-none d-xl-block col-1 text-white">Profile</text>
   </div>
   <div class = "wd-border-solid-darkgray wd-backgroundcolor-lightdark wd-height-30 row">
       <i class = "text-white mt-1 col-1 fa fa-comment"></i>
       <text class="d-none d-xl-block col-1 text-white">More</text>
   </div>
   <div class = "row wd-height-30 mt-2 ">
       <button class="rounded-pill bg-primary text-white">Tweet</button>
   </div>
 `);
}
export default NavigationSidebar;

