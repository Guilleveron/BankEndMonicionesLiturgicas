var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var app = express()
require('dotenv').config()

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var monicionesRouter = require('./routes/moniciones')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/moniciones', monicionesRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  console.log(`Servidor Iniciado en puerto: ${app.get('port')}`)
  console.log(
    process.env.DB_HOST,
    process.env.DB_PORT,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    process.env.DB_DATABASE,
    process.env.DB_CONNECTION_LIMIT,
  )
})

module.exports = app
