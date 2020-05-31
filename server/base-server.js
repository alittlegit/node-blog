const handler = require('./handler')
const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const hostname = 'localhost'
const port = 8080

module.exports = {
    config(app) {
        app.use(compression())
        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json())
        app.use(express.static('dist')) // 将dist设为根目录
        app.listen(port, hostname, () => {
            console.log(`正在监听${hostname}:${port}\n\n`)
        })
    },
    interface(app) {
        app.post('/addArticle', (req, res) => {
            handler.addArticle(req, res)
        })

        app.get('/fetchArticleDetail', (req, res) => {
            handler.fetchArticleDetail(req, res)
        })

        app.get('/fetchAllArticles', (req, res) => {
            handler.fetchAllArticles(req, res)
        })

        app.post('/deleteArticle', (req, res) => {
            handler.deleteArticle(req, res)
        })

        app.get('/fetchAppointArticles', (req, res) => {
            handler.fetchAppointArticles(req, res)
        })

        app.get('/fetchTagsData', (req, res) => {
            handler.fetchTagsData(req, res)
        })

        app.get('/fetchTagsArtilesData', (req, res) => {
            handler.fetchTagsArtilesData(req, res)
        })

        app.post('/login', (req, res) => {
            handler.login(req, res)
        })

        app.post('/comment', (req, res) => {
            handler.comment(req, res)
        })

        app.get('/fetchVisits', (req, res) => {
            handler.fetchVisits(req, res)
        })
    }
}