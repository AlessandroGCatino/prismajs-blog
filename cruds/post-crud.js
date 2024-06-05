const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

// funzione per creare un Post

const createPost = (data, cf) => {
    prisma.post.create({data})
    .then((post) => cf(post))
    .catch((err) => console.log(err))
}

// funzione che permette di leggere un post utilizzando lo slug

const getPost = (reqSlug, cf) => {
    prisma.post.findUnique({
        where: {
                slug: reqSlug
            },
        include: {
        // {tags: true},
        categories: true
        }
    }
    )
    .then((post) => cf(post))
    .catch((err) => console.log(err))
}

const getPosts = (cf) => {
    prisma.post.findMany({
        include: {
        // {tags: true},
        categories: true
        }
    }
    )
    .then((post) => cf(post))
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

module.exports = { createPost, getPost, updatePost, deletePost, getPosts }