"use strict";

module.exports = (sequelize, DataType) =>
{
    const Users = sequelize.define('Users', 
    {
        id:
        {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:
        {
            type: DataType.STRING,
            allowNull: false,
            validate:
            {
                notEmpty: true
            }
        },
        password:
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
    Users.associate = (models) => 
    {
        //model name is name of the Object (model), not the file
        Users.hasMany(models.Tasks);
    };

    return Users;
};