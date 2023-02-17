import whos from "./whos.js"
import listItem from "./WhoToFollowListItem.js"

const WhoToFollowList = () => {
   return(`
      <ul>
         ${
            whos.map(who => {
               return(listItem(who));
            }).join('')
         }
      </ul>
   `);
}
export default WhoToFollowList;


