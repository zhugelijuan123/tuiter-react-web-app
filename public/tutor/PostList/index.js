import homeposts from "./homeposts.js"
import PostItem from "./PostItem.js"

const HomeComponent = () => {
   return(`
      <ul>
         ${
            homeposts.map(post => {
               return(PostItem(post));
            }).join('')
         }
      </ul>
   `);
}
export default HomeComponent;

