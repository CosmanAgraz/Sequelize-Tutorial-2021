module.exports = app =>
{

    const Tasks = app.models.index.Tasks;

    app.route("/tasks")
    .get( (req, res) =>
    {
        Tasks.findAll( {} )
        .then(result => res.json(result))
        .catch(err => { res.status(412).json( {msg: err.message}); });
    })
    .post( (req, res) =>
    {
        Tasks.create(req.body)
        .then(result => res.json(result))
        .catch(err => res.status(412).json( {msg: err.message}) );
    });

    app.route( "/tasks/:id" )
    .get( (req, res) =>
    {
        Tasks.findOne( {where: req.params} )
        .then( result => res.json(result))
        .catch( err => res.status(412).json( {msg: err.message}) );
    })
    .patch( ( req, res) =>
    {
        Tasks.update( req.body, {where: req.params} )
        .then( result => res.sendStatus(204))
        .catch( err => res.status(412).json( {msg: err.message}) );
    })
    .delete( ( req, res) =>
    {
        Tasks.destroy( req.body, {where: req.params} )
        .then( result => res.sendStatus(204))
        .catch( err => res.status(412).json( {msg: err.message}) );
    });

    
}