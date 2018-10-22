module.exports = (app) => {
    const user = require('../controllers/employee.controller.js');

    // Create a new user
    app.post('/employees', user.create);

    // Retrieve all users
    app.get('/employees', user.findAll);

    // Retrieve a single user with noteId
    app.get('/employees/:id', user.findOne);

    // Update a user with userid
    app.put('/employees/:id', user.update);

    // Delete a user with userid
    app.delete('/employees/:id', user.delete);
}
