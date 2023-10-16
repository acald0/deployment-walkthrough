let express = require('express')

let app = express()

app.use(express.json())

let catDatabase = ['Sparkles', 'Jumpy', 'Macy', 'Gogi', 'Barry', 'Banjo', 'Messi', 'Bonx', 'Comet']

//we are going to use express.static()
//it takes the path to a folder in my project as a parameter
//and it does some "black magic" to make it so there are GET endpoints associated with
//every file in that folder
//so once we do this express.static()
//there will be a GET endpoint, '/index.html' that serves the HTML file as a response,
//a GET endpoint, '/main.js' that serves the JS file as a response
//a GET endpoint, '/styles.css' that serves the CSS file as a response
//a GET endpoint, '/' that serves index.html's HTML specifically
// app.use(express.static())
app.use(express.static(__dirname + '/public'))

app.get('/cat', (req, res) => {
    let randomIndex = Math.floor(Math.random() * catDatabase.length)

    res.status(200).send(catDatabase[randomIndex])
})

app.listen(4000, () => {
    console.log('Server up on port 4000')
})