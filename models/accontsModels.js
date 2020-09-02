// import mongoose from "mongoose";
export default (mongoose) => {
const accontsSchema = mongoose.Schema({
  agencia: {
    type: Number,
    require: true
  },
  conta: {
    type: Number,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  balance: {
    type: Number,
    require: true,
    min: 0
  }
});

// const accontsModel = mongoose.model('acconsts', accontsSchema, 'acconsts');
const accontsModel = mongoose.model('acconst', accontsSchema, );

return accontsModel;
}
// export {accontsModel}