import express from 'express'
import { accontRouter } from './routes/accontRouter.js';
import { db } from './models/index.js'

(async () => {
  try {
    await db.mongoose.connect(db.url,{
      useNewUrlParser: true,
      useUnifieldTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('Conectou com Sucesso no MongoDB')
  } catch (error) {
    console.log('Erro ao conectar com o banco'+ error)
  }
})();

 // TEWTE PARA APRENDER GIT

// (async ()=> {
//   try {
//     await Mongoose.connect(
//       'mongodb+srv://root:root@cluster0.kr0op.mongodb.net/AcconstDataBase?retryWrites=true&w=majority',
//       {
//         useNewUrlParser: true,
//         useUnifieldTopology: true
//       }
//     );
//     console.log('Conectato com Sucesso')
//   } catch (error) {
//     console.log('Erro ao conectar com o MongoDB'+error)
//   }
// })();

const app = express();

app.use(express.json());

app.use(accontRouter);

app.listen(3000, () =>{
  console.log('API Iniciada')
})

//const app = express();

//app.use(express.json());

//app.use(accontRouter);