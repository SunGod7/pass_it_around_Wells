const express = require('express')

const app = express()

const port = 3000


app.get('/', (req, res) => {
    
    res.send('99 Bottles of beer on the wall')
})



app.get('/:i/:i/:brews', (req, res) => {
    
    console.log(req.params.i)
    for (let i = 100; i > 0; i--) {
        let brews = (i - 1) 
         
    }  
    res.send(` ${req.params.i}  bottles of beer on the wall,${req.params.i}  bottles of beer. 
    Take one down and pass it around ${req.params.brews}  bottles of beer on the wall.`)
})




app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
