// setting our first express example
/*console.log("lets see what we can do with the website now");

const express=require("express")
const app=express();
const port=80;

app.get("/",(req,res)=>{
    res.send("this is my forst express experiment")
});

app.get("/about",(req,res)=>{
    res.send("this is my first express experiment about page")
});//hit the get request 

app.post("/about",(req,res)=>{
    res.send("this is my post first express experiment about page")
});//hit the post request at the endpoints

app.listen(port,()=>{
    console.log(`The application started successfully on port${port}`)
});
*/





//studying about the static files

/*const express=require("express")
const app=express();
const port=80;


app.use('/static',express.static('static'))



app.get("/",(req,res)=>{
    res.send("this is my forst express experiment")
});

app.get("/about",(req,res)=>{
    res.send("this is my first express experiment about page")
});//hit the get request 

app.post("/about",(req,res)=>{
    res.send("this is my post first express experiment about page")
});//hit the post request at the endpoints

app.listen(port,()=>{
    console.log(`The application started successfully on port${port}`)
});
*/





//Now the concept of template engine
/*const express=require("express")
const path=require("path");
const app=express();
const port=80;



//should visit pug document to access all the below codes related to it

//set the template engine as pug
app.set('view engine','pug')



//set the view directories
app.set('views',path.join(__dirname,'views'))



//endpoint for the first .pug
app.get("/first",(req,res)=>{
    res.status(200).render('first',{title:'hey harry',message:'hello there and thanks for everything'})
});


app.get("/",(req,res)=>{
    res.send("this is my forst express experiment")
});

app.get("/about",(req,res)=>{
    res.send("this is my first express experiment about page")
});//hit the get request 

app.post("/about",(req,res)=>{
    res.send("this is my post first express experiment about page")
});//hit the post request at the endpoints

app.listen(port,()=>{
    console.log(`The application started successfully on port${port}`)
});*/





//serving the raw html to the pug template
/*const express=require("express")
const path=require("path");
const fs = require("fs");
const app=express();
const port=80;



//Express related stuff//middleware
app.use('/static', express.static('static')) // For serving static files

app.use(express.urlencoded())


//PUG configuration
app.set('view engine','pug')



//set the view directories
app.set('views',path.join(__dirname,'views'))



//ENDPOINTS
app.get("/",(req,res)=>{
    const con="this is the best content on the internet so far"
    const params={'title':'i am simranjit',"content":con}
   res.status(200).render('second.pug',params);
});


app.post('/', (req, res)=>{
    tommy = req.body.tommy
    age = req.body.age//age is name not id
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let outputToWrite = `the name of the client is ${tommy}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('second.pug', params);

})



//Start the server
app.listen(port,()=>{
    console.log(`The application started successfully on port${port}`)
});
*/



