import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <div class="display-flex">
                               <div class = "Icon-inside" >
                                   <input class = "rounded-pill mb-3 wd-search  wd-backgroundcolor-white" placeholder="Search Tuiter">
                                   <i id = "search_icon" class = "fa fa-search" aria-hidden="true"></i>
                               </div>
                               <i class = "fa fa-cog fa-2x" style = "color: blue"></i>
                               </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                       <li class="nav-item">
                           <a class="nav-link bg-primary text-white" href="for-you.html">For You</a>
                       </li>
                       <li class="nav-item">
                           <a class="nav-link text-white" href="trending.html">Trending</a>
                       </li>
                       <li class="nav-item">
                           <a class="nav-link text-white" href="news.html">News</a>
                       </li>
                       <li class="nav-item">
                           <a class="nav-link text-white" href="sports.html">Sports</a>
                       </li>
                       <li class="nav-item">
                           <a class="nav-link text-white" href="entertainment.html" tabindex="-1">Entertainment</a>
                       </li>
                   </ul>
           <div class = "Icon-inside" >
                       <img class="wd-img-width-full mt-2" src="spacex.jpeg">
                       <a class="wd-font-bold wd-color-darkgray wd-text-decoration">SpaceX's Starship</a>
                   </div>
           <div class="row mt-2">
           ${PostSummaryList()}
           </div>
    `);
}
export default ExploreComponent;
