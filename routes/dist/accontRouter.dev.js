"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accontRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _accontController = _interopRequireDefault(require("../controllers/accontController.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import {accontsModel} from '../models/accontsModels.js'
var app = (0, _express["default"])();
exports.accontRouter = app;
app.post('/accont', _accontController["default"].create);
app.get('/accont', _accontController["default"].findAll);
app.get('/accont/:id', _accontController["default"].findOne);
app.put('/accont/:id', _accontController["default"].update);
app["delete"]('/accont/:id', _accontController["default"].remove); //End POINts do Trabalho

app.put('/accont/deposito/:ag/:cc/:dp', _accontController["default"].deposito);
app.patch('/accont/saque/:ag/:cc/:sq', _accontController["default"].saque);
app.get('/accont/saldo/:ag/:cc', _accontController["default"].saldo);
app.get('/accont/excluir/:ag/:cc', _accontController["default"].excluir);
app.put('/accont/transferencia/:ccO/:ccD/:vl', _accontController["default"].transferencia);
app.get('/accont/mediasaldo/:ag', _accontController["default"].mediasaldo);
app.get('/accont/menorsaldo/:qtd', _accontController["default"].menorsaldo);
app.get('/accont/maiorsaldo/:qtd', _accontController["default"].maiorsaldo);
app.get('/accont/dooutro', _accontController["default"].dooutro); // app.post('/accont', async (req,res) => {
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