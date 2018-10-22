module.exports = (app) => {
    const user = require('../controllers/customer.controller.js');

    // Create a new user
    app.post('/customers', user.create);

    // Retrieve all users
    app.get('/customers', user.findAll);

    // Retrieve a single user with noteId
    app.get('/customers/:id', user.findOne);

    // Update a user with userid
    app.put('/customers/:id', user.update);

    // Delete a user with userid
    app.delete('/customers/:id', user.delete);
}
