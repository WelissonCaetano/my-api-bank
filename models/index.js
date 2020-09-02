import mongoose from 'mongoose'
import accontsModel from './accontsModels.js'
const db = {}
// db.url = 'mongodb://localhost:27017/AcconstDataBase';
db.url = 'mongodb+srv://root:root@cluster0.kr0op.mongodb.net/AcconstDataBase?retryWrites=true&w=majority';
db.mongoose = mongoose;
db.acconts = accontsModel(mongoose);

export { db };