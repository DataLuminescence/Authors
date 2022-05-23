const AuthorController = require(`../controllers/author.controller`)

module.exports = (app) => {
    app.get('/api/test', AuthorController.testAPI);
    
    app.post('/api/authors', AuthorController.createAuthor)
    app.get('/api/authors', AuthorController.allAuthors)
    app.get('/api/authors/:id', AuthorController.oneAuthor)

    app.put("/api/authors/:id", AuthorController.updateAuthor);
    app.delete("/api/authors/:id", AuthorController.deleteAuthor);

}