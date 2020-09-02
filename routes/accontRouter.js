
import express from 'express'

import accontController from '../controllers/accontController.js'

// import {accontsModel} from '../models/accontsModels.js'
const app = express()

app.post('/accont', accontController.create);
app.get('/accont', accontController.findAll);
app.get('/accont/:id', accontController.findOne);
app.put('/accont/:id', accontController.update);
app.delete('/accont/:id', accontController.remove);

//End POINts do Trabalho
app.put('/accont/deposito/:ag/:cc/:dp', accontController.deposito);
app.patch('/accont/saque/:ag/:cc/:sq', accontController.saque);
app.get('/accont/saldo/:ag/:cc', accontController.saldo);
app.get('/accont/excluir/:ag/:cc', accontController.excluir);
app.put('/accont/transferencia/:ccO/:ccD/:vl', accontController.transferencia);
app.get('/accont/mediasaldo/:ag', accontController.mediasaldo);
app.get('/accont/menorsaldo/:qtd', accontController.menorsaldo);
app.get('/accont/maiorsaldo/:qtd', accontController.maiorsaldo);
app.get('/accont/dooutro', accontController.dooutro);

export { app as accontRouter};











// app.post('/accont', async (req,res) => {
//   try {
//     const accont = new accontsModel(req.body);

//     await accont.save();

//     res.send(accont)
    
//   } catch (error) {
//     res.status(500).sent(error)
//   }
// });

// app.get('/accont', async(req,res) => {
//   try {
//     const accont = await accontsModel.find({});
//     res.sent(accont);
//   } catch (error) {
//     res.status(500).send(error+'erro aqui')
//   }
// });

// app.patch('/accont/:id', async(req,res) => {
//   try {
//     const id = req.params.id;
//     const accont = await accontsModel.findByIdAndUpdate({ _id: id }, req.body, {
//       new: true
//     })
//   } catch (error) {
//     res.status(500).send(error)
//   }
// });

// app.delete('/accont/:id', async (req,res) => {
//   try {
//     const accont = await accontsModel.findByIdAndDelete({_id: req.params.id});
//     if(!accont){
//       res.status(404).send('Documento nao encontrado na coleção')
//     }else{
//       res.status(200).send();
//     }
//   } catch (error) {
//     res.status(500).send(error)
//   }
// })


