const express = require('express')
require('./db/mongoose')
const BasicSingle = require('./models/basicSingle')
const BasicFamily = require('./models/basicFamily')
const basicSingleRouter = require('./routers/basicSingle')
const basicFamilyRouter = require('./routers/basicFamily')
const hbs = require('hbs')
const path = require('path')


const app = express()
const port = process.env.PORT || 3000


const publicDirectoryPath = path.join(__dirname, '../public')
const partialsPath = path.join(__dirname, './views/partials')
// const viewsPath = path.join(__dirname, '../templates/views')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirectoryPath))



console.log(__filename)
console.log(path.join(__dirname, './public/partials' ))

app.use(express.json())
app.use(basicSingleRouter)
app.use(basicFamilyRouter)






app.listen(port,  () => {
    console.log( 'server is running on port ' + port)
} )