const _ = require('lodash')
const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const reducer = (acc, cur) => acc + cur.likes
    return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
    let max = 0
    let maxObj = Object.create(null)
    blogs.forEach(element => {
        if (element.likes > max) {
            max = element.likes
            maxObj = element
        }
    })
    return maxObj
}

const mostBlogs = (blogs) => {
    const counts = _.countBy(blogs, (o) => o.author)
    
}

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs }