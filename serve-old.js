const http = require("http");

const books = [
   {ID: 1, name: "Ronak", price: 200,},
   {ID: 2, name: "Rona", price: 300,},
   {ID: 3, name: "Ron", price: 400,},
]

let handler = (req, res) => {
   switch(req.url){
      case "/":
      res.writeHead(200);
      res.write("Hello world");
      res.end();
      break;
      case "/api":
      res.writeHead(200)
      res.write("Hello API")
      res.end();
      break;
      case "/books":
      res.writeHead(200, "OKAY")
      console.log(typeof JSON.stringify(books))
      res.write(JSON.stringify(books))
      res.end();
      break;
      default:
         res.writeHead(400)
         // res.write("Error API")
         res.end();

   }
}

// 1 way to create server
// http.createServer(handler).listen(5000)

// 2nd way to create server
// const server = http.createServer(handler);
// server.listen(5000)

// 3rd way to create server
const server = http.createServer(handler);

const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log(`server is running on ${PORT}`))