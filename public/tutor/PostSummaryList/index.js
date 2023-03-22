import posts from "./posts.js"
import postSummaryItem from "./PostSummaryItem.js"

const PostSummaryList = () => {
   return(`
      <ul>
         ${
            posts.map(post => {
               return(postSummaryItem(post));
            }).join('')
         }
      </ul>
   `);
}
export default PostSummaryList;


