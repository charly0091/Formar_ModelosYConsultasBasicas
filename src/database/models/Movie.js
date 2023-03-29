module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movies', {
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
        title: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        rating: {
            type: DataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull: false,
        },
        awards: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        },
        release_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: 0
        },
        length: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true,
        },
        genre_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: true,
        },
    }, {
        tableName: 'movies',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    return Movie;
    };