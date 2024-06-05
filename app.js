const {createCategory, getCategories, updateCategory, deleteCategory} = require('./cruds/category-crud.js');

const {createTag, getTags, updateTag, deleteTag} = require('./cruds/tag-crud.js');

const {createPost, getPost, updatePost, deletePost, getPosts } = require('./cruds/post-crud.js');

// createCategory({name: "Another Test Category"}, (category) => {console.log(category)})

// createPost({ 
//     title: "I Made Donuts",
//     slug: "i-made-donuts",
//     content: "Today I made some donuts",
//     image: "afunnyurl",
//     categoryID: 1,
//     // tagIds: [1,2,3],
//     published: true
//   }, (post) => {console.log(post)})

// getPost("test-new-post",(post) => {console.log(post)})
getPosts((post) => {console.log(post)})