const {createCategory, getCategories, updateCategory, deleteCategory} = require('./cruds/category-crud.js');

const {createTag, getTags, updateTag, deleteTag, createTags} = require('./cruds/tag-crud.js');

const {createPost, getPost, updatePost, deletePost, getPosts } = require('./cruds/post-crud.js');

// createCategory({name: "Test Category"}, (category) => {console.log(category)})

// createTags([{name:"Cooking"}, {name:"Sports"}, {name:"Technology"}], (tags) => {console.log(tags)})

// createPost({ 
//     title: "Test with tags",
//     slug: "test-with-tags",
//     content: "Today I made some donuts",
//     image: "afunnyurl",
//     categoryID: 1,
//     tagIds: [1,2,3],
//     published: true
//   }, (post) => {console.log(post)})

// getPost("test-with-tags",(post) => {console.log(post)})
// getPosts((post) => {console.log(post)})