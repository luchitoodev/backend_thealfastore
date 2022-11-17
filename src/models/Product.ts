import {DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional} from 'sequelize'
import {sequelize} from '../database/database'
import { Image } from './Image';

interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
    // Some fields are optional when calling UserModel.create() or UserModel.build()
    id: CreationOptional<number>;
    name: string;
    price: number;
    category_id: string;
    state: boolean
  }


export const Product = sequelize.define<UserModel>('products',{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    },
    category_id:{
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
},{
    timestamps: false
});

Product.hasMany(Image, {
    foreignKey: 'product_id',
    sourceKey: 'id'
})

Image.belongsTo(Product, {
    foreignKey: 'product_id',
    targetKey: 'id'
})