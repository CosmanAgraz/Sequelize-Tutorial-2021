module.exports = (sequelize, DataType) =>
{
    const Tasks = sequelize.define('Tasks', 
    {
        id:
        {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title:
        {
            type: DataType.STRING,
            allowNull: false,
            validate:
            {
                notEmpty: true
            }
        },
        done:
        {
            type: DataType.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });

    //pass all models
    Tasks.associate = (models) => 
    {
        //model name is name of the Object (model), not the file
        Tasks.belongsTo(models.Users);
    };

    return Tasks;
};