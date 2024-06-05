const {createCategory, getCategories, updateCategory, deleteCategory} = require('./cruds/category-crud.js');

const {createTag, getTags, updateTag, deleteTag, createTags} = require('./cruds/tag-crud.js');

const {createPost, getPost, updatePost, deletePost, getPosts, getPublishedPosts, getPostswithContent} = require('./cruds/post-crud.js');

// createCategory({name: "Test Category"}, (category) => {console.log(category)})

// createTags([{name:"Cooking"}, {name:"Sports"}, {name:"Technology"}], (tags) => {console.log(tags)})

// createPost({ 
//     title: "Find me",
//     slug: "Find-me",
//     content: "Congratulations! You've found the page you were looking for.",
//     image: "afunnyurl",
//     categoryID: 1,
//     tagIds: [1,2,3],
//     published: true
//   }, (post) => {console.log(post)})

// getPost("test-with-tags",(post) => {console.log(post)})
// getPosts((post) => {console.log(post)})

// updatePost(2, {title:"Test Modified"}, (post) => {console.log(post)})

// deletePost(2, (post) => {console.log(post)})

// Bonus

// getPublishedPosts((post) => {console.log(post)})

getPostswithContent( "congratulation" ,(post) => {console.log(post)})