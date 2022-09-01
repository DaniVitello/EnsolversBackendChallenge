import mongoose from "mongoose";

// esquema

const schema = mongoose.Schema({
    title :String,
    content :String,
})

export default mongoose.model('Notas',schema)
