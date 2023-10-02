const books = [
  { id: 1, name: "Ronak", price: 200 },
  { id: 2, name: "Sai", price: 300 },
  { id: 3, name: "Nikhil", price: 400 },
];
// class  method
class BookCtrl {
  get(req, res) {
    res.status(200);
    res.json(books);
  }
  getById(req, res) {
    const book_id = +req.params.id;
    for (var i = 0; i < books.length; i++) {
      if (books[i].id === book_id) {
        // console.log(books[i].id === book_id);
        res.status(200);
        res.json(books[i]);
      }
    }
  }
  create(req, res) {
    const data = req.body;
    books.push(data);
    res.status(201);
    res.send("Book Added");
  }
  update(req, res) {
    const data = req.body;
    const book_id = +req.params.id;
    for (var i = 0; i < books.length; i++) {
      if (books[i].id === book_id) {
        books[i].name = data.name;
        books[i].price = data.price;
        res.status(204);
        res.send();
      }
    }
  }
  patch(req, res) {
    const data = req.body;
    const book_id = +req.params.id;
    for (var i = 0; i < books.length; i++) {
      if (books[i].id === book_id) {
        for (let key in data){
          books[i][key] = data[key];
        }
        res.status(204);
        res.send();
      }
    }
  }
}

module.exports = new BookCtrl();

// function method
//  const get  = (req, res) => {
//     res.status(200);
//     res.json(books);
//  }

//  module.exports = {
//     get,
//  }
