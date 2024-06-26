const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

const createTag = (data, cf) => {
    prisma.tag.create(
        {
            ...data,
            tags: {
                connect: [
                    data.tags.map((tag) => {name: tag.name})
                ]
            }
        },

    )
    .then((tag) => cf(tag))
    .catch((error) => cf(error))
}
const createTags = (data, cf) => {
    prisma.tag.createMany({data})
    .then((tag) => cf(tag))
    .catch((error) => cf(error))
}

const getTags = (cf) => {
    prisma.tag.findMany()
    .then((tags) => cf(tags))
    .catch((error) => cf(error))
}

const updateTag = (id, data, cf) => {
    prisma.tag.update({where: {id}, data})
    .then((tag) => cf(tag))
    .catch((error) => cf(error))
}

const deleteTag = (id, cf) => {
    prisma.tag.delete({where: {id}})
    .then((tag) => cf(tag))
    .catch((error) => cf(error))
}

module.exports = { createTag, getTags, updateTag, deleteTag, createTags }