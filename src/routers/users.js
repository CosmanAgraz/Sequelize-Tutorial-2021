"use strict";

module.exports = app => 
{
    const Users = app.models.index.Users;

    app.get("/users/:id", (req, res) =>
    {
        Users.findById( req.params.id, { attributes: ["id", "name"] } )
        .then(result => res.json(result))
        .catch(err => { res.status(412).json( {msg: err.message}); });
    });

}