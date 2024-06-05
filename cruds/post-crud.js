const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

const createPost = (data, cf) => {
    prisma.post.create({data})
    .then((post) => cf(post))
    .catch((err) => console.log(err))
}

const getPosts = (cf) => {
    prisma.post.findMany()
    .then((posts) => cf(posts))
    .catch((err) => console.log(err))
}

const updatePost = (id, data, cf) => {
    prisma.post.update({where: {id}, data})
    .then((post) => cf(post))
    .catch((err) => console.log(err))
}

const deletePost = (id, cf) => {
    prisma.post.delete({where: {id}})
    .then((post) => cf(post))
    .catch((err) => console.log(err))
}

module.exports = { createPost, getPosts, updatePost, deletePost }