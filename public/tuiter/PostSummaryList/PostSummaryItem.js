const PostSummaryItem = (post) => {
return (`
<div class = "wd-border-solid-darkgray display-flex wd-backgroundcolor-lightdark">
    <div class="col-10 ms-2">
        <a class="wd-color-darkgray wd-text-decoration">${post.topic}</a>
        <br>
        <a class="text-white wd-font-bold wd-text-decoration">${post.userName} ☑️</a>
        <a class = "wd-color-darkgray wd-text-decoration"> - ${post.time}</a>
        <br>
        <a class="text-white wd-font-bold wd-text-decoration"> ${post.title}</a>
        <br>
        <a class = "wd-color-darkgray wd-text-decoration">${post.tweets}</a>
    </div>
    <img class="col-2 ms-2 mt-3 wd_rounded_pic wd-img-width-12p" src=${post.image}>
</div>
`)
}

export default PostSummaryItem