"use strict";

module.exports = app =>
{
    app.models.index.sequelize.sync().then( () => 
    {
        app.listen(app.get('port'), () => 
        { 
            console.log(`Listening on port:`, app.get('port'));
        });
    });

}