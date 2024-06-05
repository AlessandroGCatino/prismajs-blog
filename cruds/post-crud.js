const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

// funzione per creare un Post

const createPost = (data, cf) => {
    prisma.post.create(
        {
            data: {
            title: data.title,
            slug: data.slug,
            content: data.content,
            image: data.image,
            published: data.published,
            category: {
                connect: {
                    id: data.categoryID
                    }
                },
            tags: {
                connect: 
                    data.tagIds.map(tag => {
                        return {
                            id: tag
                        }
                    })
                }
            }
        }
    )
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
        tags: true,
        category: true
        }
    }
    )
    .then((post) => cf(post))
    .catch((err) => console.log(err))
}

const getPosts = (cf) => {
    prisma.post.findMany({
        include: {
        tags: true,
        category: true
        }
    }
    )
    .then((post) => cf(post))
    .catch((err) => console.log(err))
}

const updatePost = (id, data, cf) => {
    prisma.post.update({where: {
            id: id
        },
        data: data
    })
    .then((post) => cf(post))
    .catch((err) => console.log(err))
}

const deletePost = (id, cf) => {
    prisma.post.delete({where: {id}})
    .then((post) => cf(post))
    .catch((err) => console.log(err))
}

const getPublishedPosts = (cf) => {
    prisma.post.findMany({
        where: {
            published: true
        },
        include: {
        tags: true,
        category: true
        }
    }
    )
    .then((post) => cf(post))
    .catch((err) => console.log(err))
}

const getPostswithContent = (search, cf) => {
    prisma.post.findMany({
        where: {
            content: {
                contains: search
            }
        },
        include: {
        tags: true,
        category: true
        }
    }
    )
    .then((post) => cf(post))
    .catch((err) => console.log(err))
}

module.exports = { createPost, getPost, updatePost, deletePost, getPosts, getPublishedPosts, getPostswithContent }