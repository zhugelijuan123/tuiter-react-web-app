const WhoToFollowListItem = (who) => {
return (`

         <div class="row wd-border-solid-darkgray wd-backgroundcolor-lightdark">
                     <div class = "col-2">
                         <img class="rounded-pill wd-img-width wd-img-height" src=${who.avatarIcon}>
                     </div>
                     <div class = "col-7">
                         <a class="text-white wd-font-bold wd-text-black wd-text-decoration">${who.userName} ☑️</a>
                         <br>
                         @${who.handle}
                     </div>
                     <div class = "col-3">
                         <button class="rounded-pill bg-primary text-white mt-2 mb-2">Follow</button>
                     </div>
                 </div>
         `)
}
export default WhoToFollowListItem