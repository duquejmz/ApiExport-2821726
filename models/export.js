const {model, Schema} = require('mongoose')

const exportSchema = new Schema ({
    nameProduct: {
        type: String,
        required: [true, 'the name is required']
    },
    price: {
        type: Number,
        required: [true, 'the price is required']
    },
    weight: {
        type: String,
        required: [true, 'the weight is required']
    }
})

exportSchema.set('toJSON', {
    versionKey: false
})

module.exports = model('Export', exportSchema, 'exports')