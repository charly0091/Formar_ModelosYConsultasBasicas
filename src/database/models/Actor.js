module.exports = (sequelize, DataTypes) => {
    const Actor = sequelize.define('Actors', {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        first_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        rating: {
            type: DataTypes.DECIMAL(3,1),
            allowNull: false,
        },
        favorite_movie_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true
        }
    }, {
        tableName: 'actors',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    return Actor;
    }