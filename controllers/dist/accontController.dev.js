"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../models/index.js");

var Acconts = _index.db.acconts;

var create = function create(req, res) {
  var accont, data;
  return regeneratorRuntime.async(function create$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          accont = new Acconts({
            agencia: req.body.agencia,
            conta: req.body.conta,
            name: req.body.name,
            balance: req.body.balance
          });
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(accont.save());

        case 4:
          data = _context.sent;
          res.send(data);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          res.send('Erro al salvar o accont');

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

var findAll = function findAll(req, res) {
  var acconts;
  return regeneratorRuntime.async(function findAll$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Acconts.find());

        case 3:
          acconts = _context2.sent;
          res.send(acconts);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.send(_context2.t0 + ' Erro ao buscar as contas');

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

var findOne = function findOne(req, res) {
  var id, accont;
  return regeneratorRuntime.async(function findOne$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(Acconts.findById({
            _id: id
          }));

        case 4:
          accont = _context3.sent;

          if (!accont) {
            res.send('Conta nao encontrada' + id);
          }

          res.send(accont);
          _context3.next = 12;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](1);
          res.status(500).send(_context3.t0 + 'Erro ao buscar as contas' + id + " - " + _context3.t0);

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 9]]);
};

var update = function update(req, res) {
  var id, accont;
  return regeneratorRuntime.async(function update$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(Acconts.findByIdAndUpdate({
            _id: id
          }, req.body, {
            "new": true
          }));

        case 4:
          accont = _context4.sent;

          if (!accont) {
            res.send('Conta nao encontrada' + id);
          }

          res.send(accont);
          _context4.next = 12;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](1);
          res.status(500).send(_context4.t0 + 'Erro ao atualizar as contas' + id + " - " + _context4.t0);

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 9]]);
};

var remove = function remove(req, res) {
  var id, accont;
  return regeneratorRuntime.async(function remove$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(Acconts.findByIdAndRemove({
            _id: id
          }));

        case 4:
          accont = _context5.sent;

          if (!accont) {
            res.status(500).send('nao encontrado conta ' + id);
          } else {
            res.send('Excluido com sucesso' + id);
          }

          _context5.next = 11;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);
          res.status(500).send(_context5.t0 + 'Erro ao excuir as contas' + id + " - " + _context5.t0);

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; //Funções do trabalho


var deposito = function deposito(req, res) {
  var ag, cc, dp, accont;
  return regeneratorRuntime.async(function deposito$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          ag = req.params.ag;
          cc = req.params.cc;
          dp = req.params.dp;
          _context6.prev = 3;
          _context6.next = 6;
          return regeneratorRuntime.awrap(Acconts.findOneAndUpdate({
            agencia: ag,
            conta: cc
          }, {
            $inc: {
              balance: dp
            }
          }, {
            "new": true
          }));

        case 6:
          accont = _context6.sent;

          if (!accont) {
            res.send('Conta nao encontrada ' + cc + ' e conta ' + ag);
          }

          res.send(accont);
          _context6.next = 14;
          break;

        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](3);
          res.status(500).send(_context6.t0 + 'Erro ao atualizar as contas' + id + " - " + _context6.t0);

        case 14:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[3, 11]]);
};

var saque = function saque(req, res) {
  var ag, cc, sq, accont, _accont;

  return regeneratorRuntime.async(function saque$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          ag = req.params.ag;
          cc = req.params.cc;
          sq = req.params.sq;
          sq = sq * -1;
          sq = sq - 1;
          _context7.prev = 5;
          _context7.next = 8;
          return regeneratorRuntime.awrap(Acconts.findOneAndUpdate({
            agencia: ag,
            conta: cc
          }, {
            $inc: {
              balance: sq
            }
          }, {
            "new": true
          }));

        case 8:
          accont = _context7.sent;

          if (!accont) {
            res.send('Conta não encontrada ' + cc + ' e conta ' + ag);
          }

          if (!(accont.balance < 1)) {
            _context7.next = 16;
            break;
          }

          sq = sq * -1;
          _context7.next = 14;
          return regeneratorRuntime.awrap(Acconts.findOneAndUpdate({
            agencia: ag,
            conta: cc
          }, {
            $inc: {
              balance: sq
            }
          }, {
            "new": true
          }));

        case 14:
          _accont = _context7.sent;
          res.send('A Conta ' + cc + ' da Agencia ' + ag + ' nao possui valor em saldo para saque');

        case 16:
          res.send(accont);
          _context7.next = 22;
          break;

        case 19:
          _context7.prev = 19;
          _context7.t0 = _context7["catch"](5);
          res.status(500).send(_context7.t0 + 'Erro ao atualizar as contas' + id + " - " + _context7.t0);

        case 22:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[5, 19]]);
};

var saldo = function saldo(req, res) {
  var ag, cc, accont;
  return regeneratorRuntime.async(function saldo$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          ag = req.params.ag;
          cc = req.params.cc;
          _context8.prev = 2;
          _context8.next = 5;
          return regeneratorRuntime.awrap(Acconts.findOne({
            agencia: ag,
            conta: cc
          }));

        case 5:
          accont = _context8.sent;

          if (!accont) {
            res.send('Conta ' + cc + ' nao encontrada de Agencia' + ag);
          }

          res.send('o saldo da Conta: ' + cc + ' e Agencia: ' + ag + ' é: ' + accont.balance);
          _context8.next = 13;
          break;

        case 10:
          _context8.prev = 10;
          _context8.t0 = _context8["catch"](2);
          res.status(500).send(_context8.t0 + 'Erro ao buscar as conta' + cc + ' de Agencia' + ag + ' - ' + _context8.t0);

        case 13:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[2, 10]]);
};

var excluir = function excluir(req, res) {
  var ag, cc, accont, count;
  return regeneratorRuntime.async(function excluir$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          ag = req.params.ag;
          cc = req.params.cc;
          _context9.prev = 2;
          _context9.next = 5;
          return regeneratorRuntime.awrap(Acconts.findOneAndDelete({
            agencia: ag,
            conta: cc
          }));

        case 5:
          accont = _context9.sent;

          if (accont) {
            _context9.next = 10;
            break;
          }

          res.send('Conta não encontrada ' + cc + ' e conta ' + ag);
          _context9.next = 14;
          break;

        case 10:
          _context9.next = 12;
          return regeneratorRuntime.awrap(Acconts.countDocuments({
            agencia: ag
          }));

        case 12:
          count = _context9.sent;
          res.send('A Agencia ' + ag + ' possui: ' + count + ' Contas ativas');

        case 14:
          _context9.next = 19;
          break;

        case 16:
          _context9.prev = 16;
          _context9.t0 = _context9["catch"](2);
          res.status(500).send(_context9.t0 + 'Erro ao atualizar as contas' + id + " - " + _context9.t0);

        case 19:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[2, 16]]);
};

var transferencia = function transferencia(req, res) {
  var ccO, ccD, vlO, vlD, AGaccontO, AGaccontD, accontO, _accontO, accontD;

  return regeneratorRuntime.async(function transferencia$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          // console.log('chegou')
          ccO = req.params.ccO;
          ccD = req.params.ccD;
          vlO = req.params.vl;
          vlD = req.params.vl;
          vlO = vlO * -1;
          _context10.prev = 5;
          _context10.next = 8;
          return regeneratorRuntime.awrap(Acconts.findOne({
            conta: ccO
          }));

        case 8:
          AGaccontO = _context10.sent;

          if (!AGaccontO) {
            res.send('Conta de Origem não encontrada ' + ccO);
          } // res.send(AGaccontO)


          _context10.next = 12;
          return regeneratorRuntime.awrap(Acconts.findOne({
            conta: ccD
          }));

        case 12:
          AGaccontD = _context10.sent;

          if (!AGaccontO) {
            res.send('Conta de Origem não encontrada ' + ccD);
          }

          console.log(AGaccontO.agencia + ' e ' + AGaccontD.agencia);

          if (AGaccontO.agencia != AGaccontD.agencia) {
            vlO = vlO - 8;
          }

          _context10.next = 18;
          return regeneratorRuntime.awrap(Acconts.findOneAndUpdate({
            agencia: AGaccontO.agencia,
            conta: ccO
          }, {
            $inc: {
              balance: vlO
            }
          }, {
            "new": true
          }));

        case 18:
          accontO = _context10.sent;

          if (!accontO) {
            res.send('Conta de Origem não encontrada ' + ccO + ' e conta ' + AGaccontO.agencia);
          }

          if (!(accontO.balance < 1)) {
            _context10.next = 28;
            break;
          }

          vlO = vlO * -1;
          _context10.next = 24;
          return regeneratorRuntime.awrap(Acconts.findOneAndUpdate({
            agencia: AGaccontO.agencia,
            conta: ccO
          }, {
            $inc: {
              balance: vlO
            }
          }, {
            "new": true
          }));

        case 24:
          _accontO = _context10.sent;
          res.send('A Conta ' + ccO + ' da Agencia ' + AGaccontO.agencia + ' nao possui valor em saldo para tranferencia');
          _context10.next = 32;
          break;

        case 28:
          _context10.next = 30;
          return regeneratorRuntime.awrap(Acconts.findOneAndUpdate({
            agencia: AGaccontD.agencia,
            conta: ccD
          }, {
            $inc: {
              balance: vlD
            }
          }, {
            "new": true
          }));

        case 30:
          accontD = _context10.sent;

          if (!accontD) {
            res.send('Conta de Origem não encontrada ' + AGaccontD.agencia + ' e conta ' + ccD);
          }

        case 32:
          res.send(accontO);
          _context10.next = 38;
          break;

        case 35:
          _context10.prev = 35;
          _context10.t0 = _context10["catch"](5);
          res.status(500).send('Erro ao Transferir entre as contas' + _context10.t0);

        case 38:
        case "end":
          return _context10.stop();
      }
    }
  }, null, null, [[5, 35]]);
};

var mediasaldo = function mediasaldo(req, res) {
  var ag, accontMedia;
  return regeneratorRuntime.async(function mediasaldo$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          ag = Number(req.params.ag); // console.log(ag)

          _context11.prev = 1;
          _context11.next = 4;
          return regeneratorRuntime.awrap(Acconts.aggregate([{
            $match: {
              agencia: 99
            }
          }, {
            $group: {
              _id: null,
              media: {
                $avg: "$balance"
              }
            }
          }]));

        case 4:
          accontMedia = _context11.sent;

          if (!accontMedia) {
            res.send('Agencia ' + cg + ' nao encontrada');
          }

          console.log(accontMedia);
          res.send('A Media das Contas de Agencia: ' + ag + ' é: ' + JSON.stringify(accontMedia));
          _context11.next = 13;
          break;

        case 10:
          _context11.prev = 10;
          _context11.t0 = _context11["catch"](1);
          res.status(500).send(_context11.t0 + 'Erro ao buscar Agencia' + ag + ' - ' + _context11.t0);

        case 13:
        case "end":
          return _context11.stop();
      }
    }
  }, null, null, [[1, 10]]);
};

var menorsaldo = function menorsaldo(req, res) {
  var qtd, accontMenores;
  return regeneratorRuntime.async(function menorsaldo$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          qtd = Number(req.params.qtd); // console.log(ag)

          _context12.prev = 1;
          _context12.next = 4;
          return regeneratorRuntime.awrap(Acconts.find({}, {
            _id: 0,
            agencia: 1,
            conta: 1,
            balance: 1
          }).limit(qtd).sort({
            balance: 1
          }));

        case 4:
          accontMenores = _context12.sent;

          if (!accontMenores) {
            res.send('Agencia ' + qtd + ' nao encontrada');
          }

          console.log(accontMenores);
          res.send('A Quantidade  das Contas de menor valor  ate : ' + qtd + ' é: ' + accontMenores);
          _context12.next = 13;
          break;

        case 10:
          _context12.prev = 10;
          _context12.t0 = _context12["catch"](1);
          res.status(500).send(_context12.t0 + 'Erro ao buscar Agencia' + qtd + ' - ' + _context12.t0);

        case 13:
        case "end":
          return _context12.stop();
      }
    }
  }, null, null, [[1, 10]]);
};

var maiorsaldo = function maiorsaldo(req, res) {
  var qtd, accontMaiores;
  return regeneratorRuntime.async(function maiorsaldo$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          qtd = Number(req.params.qtd); // console.log(ag)

          _context13.prev = 1;
          _context13.next = 4;
          return regeneratorRuntime.awrap(Acconts.find({}, {
            _id: 0,
            agencia: 1,
            conta: 1,
            name: 1,
            balance: 1
          }).limit(qtd).sort({
            balance: -1,
            name: 1
          }));

        case 4:
          accontMaiores = _context13.sent;

          if (!accontMaiores) {
            res.send('Agencia ' + qtd + ' nao encontrada');
          }

          console.log(accontMaiores);
          res.send('A Quantidade  das Contas de menor valor  ate : ' + qtd + ' é: ' + accontMaiores);
          _context13.next = 13;
          break;

        case 10:
          _context13.prev = 10;
          _context13.t0 = _context13["catch"](1);
          res.status(500).send(_context13.t0 + 'Erro ao buscar Agencia' + qtd + ' - ' + _context13.t0);

        case 13:
        case "end":
          return _context13.stop();
      }
    }
  }, null, null, [[1, 10]]);
};

var dooutro = function dooutro(req, res) {
  var distinctAgencias, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, agencia, maiorBalanceDaAgencia, _maiorBalanceDaAgenci, conta, name, balance, validate, _novaConta;

  return regeneratorRuntime.async(function dooutro$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          _context14.next = 3;
          return regeneratorRuntime.awrap(Acconts.distinct("agencia"));

        case 3:
          distinctAgencias = _context14.sent;
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context14.prev = 7;
          _iterator = distinctAgencias[Symbol.iterator]();

        case 9:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context14.next = 26;
            break;
          }

          agencia = _step.value;
          _context14.next = 13;
          return regeneratorRuntime.awrap(Acconts.find({
            agencia: agencia
          }).sort({
            balance: -1
          }).limit(1));

        case 13:
          maiorBalanceDaAgencia = _context14.sent;
          _maiorBalanceDaAgenci = maiorBalanceDaAgencia[0], conta = _maiorBalanceDaAgenci.conta, name = _maiorBalanceDaAgenci.name, balance = _maiorBalanceDaAgenci.balance;
          _context14.next = 17;
          return regeneratorRuntime.awrap(Acconts.find({
            conta: conta,
            agencia: 99
          }));

        case 17:
          validate = _context14.sent;

          if (!(validate.length === 0)) {
            _context14.next = 22;
            break;
          }

          _context14.next = 21;
          return regeneratorRuntime.awrap(Acconts.create({
            agencia: 99,
            conta: conta,
            name: name,
            balance: balance
          }));

        case 21:
          _novaConta = _context14.sent;

        case 22:
          console.log('chegou', validate, novaConta);

        case 23:
          _iteratorNormalCompletion = true;
          _context14.next = 9;
          break;

        case 26:
          _context14.next = 32;
          break;

        case 28:
          _context14.prev = 28;
          _context14.t0 = _context14["catch"](7);
          _didIteratorError = true;
          _iteratorError = _context14.t0;

        case 32:
          _context14.prev = 32;
          _context14.prev = 33;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 35:
          _context14.prev = 35;

          if (!_didIteratorError) {
            _context14.next = 38;
            break;
          }

          throw _iteratorError;

        case 38:
          return _context14.finish(35);

        case 39:
          return _context14.finish(32);

        case 40:
          _context14.next = 45;
          break;

        case 42:
          _context14.prev = 42;
          _context14.t1 = _context14["catch"](0);
          res.status(500).send(_context14.t1 + 'Erro ao fazer Agencia 99');

        case 45:
        case "end":
          return _context14.stop();
      }
    }
  }, null, null, [[0, 42], [7, 28, 32, 40], [33,, 35, 39]]);
};

var _default = {
  create: create,
  findAll: findAll,
  findOne: findOne,
  update: update,
  remove: remove,
  deposito: deposito,
  saque: saque,
  saldo: saldo,
  excluir: excluir,
  transferencia: transferencia,
  mediasaldo: mediasaldo,
  menorsaldo: menorsaldo,
  maiorsaldo: maiorsaldo,
  dooutro: dooutro
};
exports["default"] = _default;