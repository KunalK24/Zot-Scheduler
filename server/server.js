const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const courseRoutes = express.Router()
const apiPort = 3000
const uri = '(Empty cause the repo is public on github)'

let Course = require('./course')

mongoose.set('useUnifiedTopology', true)
mongoose.connect(uri, { useNewUrlParser: true })
const connection = mongoose.connection

connection.once('open', function() {
    console.log("MongoDB database connection established successfully")
})

courseRoutes.route('/').get(function(req, res) {
    Course.find({}, function(err, course) {
        if (err) {
            console.log(err)
        } else {
            res.json(course)
        }
    })
})

courseRoutes.route('/:id').get(function(req, res) {
    let course_number = req.params.id
    Course.findOne({Number: course_number}, function(err, course) {
        if (err) {
            console.log(err)
        } else {
            res.json(course)
        }
    })
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use('/course', courseRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
