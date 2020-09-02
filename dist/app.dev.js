"use strict";

var _express = _interopRequireDefault(require("express"));

var _accontRouter = require("./routes/accontRouter.js");

var _index = require("./models/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_index.db.mongoose.connect(_index.db.url, {
            useNewUrlParser: true,
            useUnifieldTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
          }));

        case 3:
          console.log('Conectou com Sucesso no MongoDB');
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log('Erro ao conectar com o banco' + _context.t0);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
})(); // (async ()=> {
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


var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_accontRouter.accontRouter);
app.listen(3000, function () {
  console.log('API Iniciada');
});