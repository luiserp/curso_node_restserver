const { Schema, model } = require('mongoose');


const CategorySchema = Schema({
    nombre : {
        type: String,
        required: [true, "El nombre es obligatorio"],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    usuario :{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

CategorySchema.methods.toJSON = function(){
    const { __v, estado, ...categoria } = this.toObject();   
    return categoria;
}
module.exports = model("Categoria", CategorySchema);