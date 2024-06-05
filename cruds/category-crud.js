const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

const createCategory = (data, cf) => {
    prisma.category.create({data})
    .then((category) => cf(category))
    .catch((err) => console.error(err))
}

const getCategories = (cf) => {
    prisma.category.findMany()
    .then((categories) => cf(categories))
    .catch((err) => console.error(err))
}

const updateCategory = (id, data, cf) => {
    prisma.category.update({where: {id}, data})
    .then((category) => cf(category))
    .catch((err) => console.error(err))
}

const deleteCategory = (id, cf) => {
    prisma.category.delete({where: {id}})
    .then((category) => cf(category))
    .catch((err) => console.error(err))
}

module.exports = {createCategory, updateCategory, deleteCategory, getCategories}