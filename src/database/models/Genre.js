module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define('Genres', {
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
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        ranking: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }, {
        tableName: 'genres',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    return Genre;
    };