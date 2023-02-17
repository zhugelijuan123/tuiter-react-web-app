import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";


function exploreComponent() {
   $('#wd-explore').append(`
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
       ${NavigationSidebar("explore")}
      </div>

      <div class=" d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
      <div class="row margin_start text-white wd-backgroundcolor-lightdark"> &nbsp;&nbsp;  Who To follow
      </div>
       ${WhoToFollowList()}
      </div>
  </div>
   `);
}
$(exploreComponent);

