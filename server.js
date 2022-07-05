const express = require('express')

const app = express()

const port = 3000

//home page

app.get('/', (req, res) => {
    
        res.send(`<h1>99 Bottles of beer on the wall</h1> <a href="/number_of_bottles/">take one down, pass it around</a>`)
    })

    // console.log()



//index
//show
app.get('/number_of_bottles', (req, res) => {
    
    // const number_of_bottles = parseInt(req.params.number_of_bottles)
	// const product = number_of_bottles - 1
   
   //let number_of_bottles = 98
    
    //   if(number_of_bottlesId == number_of_bottles) {
    //      --1
    //   }
     
    res.send('<a href="/brews/">bottles of beer on the wall</a>')
    
    
    //  console.log(req.params.i)
    // for (let i = 100; i > 0; i--) {
    //      let number_of_bottles = (i - 1) 
         
       
    //      res.send(` ${req.params.number_of_bottles}  bottles of beer on the wall, ${req.params.number_of_bottles}  bottles of beer. 
    //      Take one down and pass it around ${req.params.number_of_bottles}  bottles of beer on the wall.`)
    // }

})










// app.get('/brews', (req, res) => {
//         if(brews == number_of_bottles) {
//             let brews = number_of_bottles - 1
//         }
//         console.log(req.params.brews)
//         res.render(req.params.brews)
//     })



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
