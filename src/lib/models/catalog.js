import mongoose from 'mongoose'

const catalogSchema = mongoose.Schema({
    image: {
        type: String
    },
    heading: {
        type: String
    },
    description: {
        type: String
    },
})


const Catalog = mongoose.model.catalog || mongoose.model('catalog', catalogSchema)
export default Catalog;