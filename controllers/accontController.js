import {db} from '../models/index.js'

const Acconts = db.acconts

const create = async (req,res) => {
  const accont = new Acconts({
    agencia:req.body.agencia,
    conta:req.body.conta,
    name:req.body.name,
    balance:req.body.balance,
  });

  try {
    const data = await accont.save();
    res.send(data)
  } catch (error) {
    res.send('Erro al salvar o accont')
  }
}

const findAll = async (req, res) => {
  try {
    const acconts = await Acconts.find();
    res.send(acconts);
  } catch (error) {
    res.send(error+' Erro ao buscar as contas')
  }
}
const findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const accont = await Acconts.findById({_id: id });
    if(!accont){
      res.send('Conta nao encontrada' + id)
    }
    res.send(accont);
  } catch (error) {
    res.status(500).send(error+'Erro ao buscar as contas' + id +" - " + error)
  }
}

const update = async (req,res) => {
  const id = req.params.id;
  try {
    const accont = await Acconts.findByIdAndUpdate({_id: id }, req.body, {new: true});
    if(!accont){
      res.send('Conta nao encontrada' + id)
    }
    res.send(accont);
  } catch (error) {
    res.status(500).send(error+'Erro ao atualizar as contas' + id +" - " + error)
  }
}

const remove = async (req,res) => {
  const id = req.params.id;
  try {
   const accont = await Acconts.findByIdAndRemove({_id: id })
    if(!accont){
      res.status(500).send('nao encontrado conta '+ id)
    }else{
      res.send('Excluido com sucesso' + id)
    }
  } catch (error) {
    res.status(500).send(error+'Erro ao excuir as contas' + id +" - " + error)
  }
}

//Funções do trabalho

const deposito = async (req,res) => {
  const ag = req.params.ag;
  const cc = req.params.cc;
  const dp = req.params.dp;
  try {
    const accont = await Acconts.findOneAndUpdate({ agencia: ag, conta: cc },{$inc: {balance:dp}},{new: true});
    if(!accont){
      res.send('Conta nao encontrada ' + cc +' e conta ' + ag)
    }
    res.send(accont);
  } catch (error) {
    res.status(500).send(error+'Erro ao atualizar as contas' + id +" - " + error)
  }
}
const saque = async (req,res) => {
  const ag = req.params.ag;
  const cc = req.params.cc;
  let sq = req.params.sq;
  sq = sq * -1;
  sq = sq - 1;
  try {
    const accont = await Acconts.findOneAndUpdate({ agencia: ag, conta: cc },{$inc: {balance:sq}},{new: true});
    if(!accont){
      res.send('Conta não encontrada ' + cc +' e conta ' + ag)
    }
    if(accont.balance < 1){
      sq = (sq * -1);
      const accont = await Acconts.findOneAndUpdate({ agencia: ag, conta: cc },{$inc: {balance:sq}},{new: true});
      res.send('A Conta ' + cc +' da Agencia ' + ag + ' nao possui valor em saldo para saque')
    }
   
    res.send(accont);
  } catch (error) {
    res.status(500).send(error+'Erro ao atualizar as contas' + id +" - " + error)
  }
}

const saldo = async (req, res) => {
  const ag = req.params.ag;
  const cc = req.params.cc;
  try {
    const accont = await Acconts.findOne({agencia: ag, conta: cc });
    if(!accont){
      res.send('Conta '+cc+' nao encontrada de Agencia' + ag)
    }
    res.send('o saldo da Conta: '+cc+' e Agencia: ' + ag +' é: '+ accont.balance);
  } catch (error) {
    res.status(500).send(error+'Erro ao buscar as conta' + cc +' de Agencia' + ag +' - ' + error)
  }
}

const excluir = async (req,res) => {
  const ag = req.params.ag;
  const cc = req.params.cc;
  try {
    const accont = await Acconts.findOneAndDelete({ agencia: ag, conta: cc });
    if(!accont){
      res.send('Conta não encontrada ' + cc +' e conta ' + ag)
    }else{

      const count = await Acconts.countDocuments({ agencia: ag });
     
      res.send('A Agencia '+ag+' possui: '+count+' Contas ativas');
    }
  } catch (error) {
    res.status(500).send(error+'Erro ao atualizar as contas' + id +" - " + error)
  }
}

const transferencia = async (req,res) => {
  // console.log('chegou')
  const ccO = req.params.ccO;
  const ccD = req.params.ccD;
  let vlO = req.params.vl;
  let vlD = req.params.vl;
  vlO = vlO * -1;

  try {
    
    const AGaccontO = await Acconts.findOne({conta: ccO });
    if(!AGaccontO){
      res.send('Conta de Origem não encontrada ' + ccO)
    }
    
    // res.send(AGaccontO)
    const AGaccontD = await Acconts.findOne({conta: ccD });
    if(!AGaccontO){
      res.send('Conta de Origem não encontrada ' + ccD)
    }
    console.log(AGaccontO.agencia+' e '+ AGaccontD.agencia)
    if(AGaccontO.agencia != AGaccontD.agencia){
      vlO = vlO - 8;
    }

    const accontO = await Acconts.findOneAndUpdate({ agencia: AGaccontO.agencia, conta: ccO },{$inc: {balance:vlO}},{new: true});
    
    if(!accontO){
      res.send('Conta de Origem não encontrada ' + ccO +' e conta ' + AGaccontO.agencia)
    }
    if(accontO.balance < 1){
      vlO = (vlO * -1);
      const accontO = await Acconts.findOneAndUpdate({ agencia: AGaccontO.agencia, conta: ccO },{$inc: {balance:vlO}},{new: true});
      res.send('A Conta ' + ccO +' da Agencia ' + AGaccontO.agencia + ' nao possui valor em saldo para tranferencia')
    }else{
      const accontD = await Acconts.findOneAndUpdate({ agencia: AGaccontD.agencia, conta: ccD },{$inc: {balance:vlD}},{new: true});

      if(!accontD){
        res.send('Conta de Origem não encontrada ' + AGaccontD.agencia +' e conta ' + ccD)
      }
    }
   
    res.send(accontO);
  } catch (error) {
    res.status(500).send('Erro ao Transferir entre as contas' + error)
  }
}

const mediasaldo = async (req, res) => {
  const ag = Number(req.params.ag);
  // console.log(ag)
  try {
    // const accont = await Acconts.findOne({agencia: ag, conta: cc });
    const accontMedia = await Acconts.aggregate([
      { $match: { agencia: 99 } },
      { $group: { _id: null, media:{ $avg: "$balance" }}}
    ]);
    if(!accontMedia){
      res.send('Agencia '+cg+' nao encontrada')
    }
    console.log(accontMedia)
    res.send('A Media das Contas de Agencia: ' + ag +' é: '+ JSON.stringify(accontMedia));
  } catch (error) {
    res.status(500).send(error+'Erro ao buscar Agencia' + ag +' - ' + error)
  }
}
const menorsaldo = async (req, res) => {
  const qtd = Number(req.params.qtd);
  // console.log(ag)
  try {
    const accontMenores = await Acconts.find({},{_id:0,agencia: 1,conta:1,balance:1}).limit(qtd).sort({balance: 1})
    if(!accontMenores){
      res.send('Agencia '+qtd+' nao encontrada')
    }
    console.log(accontMenores)
    res.send('A Quantidade  das Contas de menor valor  ate : ' + qtd +' é: '+ accontMenores);
  } catch (error) {
    res.status(500).send(error+'Erro ao buscar Agencia' + qtd +' - ' + error)
  }
}
const maiorsaldo = async (req, res) => {
  const qtd = Number(req.params.qtd);
  // console.log(ag)
  try {
    const accontMaiores = await Acconts.find({},{_id:0,agencia: 1,conta:1,name:1,balance:1}).limit(qtd).sort({balance: -1, name:1})
    if(!accontMaiores){
      res.send('Agencia '+qtd+' nao encontrada')
    }
    console.log(accontMaiores)
    res.send('A Quantidade  das Contas de menor valor  ate : ' + qtd +' é: '+ accontMaiores);
  } catch (error) {
    res.status(500).send(error+'Erro ao buscar Agencia' + qtd +' - ' + error)
  }
}
const dooutro = async (req, res) => {
  try {
    const distinctAgencias = await Acconts.distinct("agencia");
    
    for (const agencia of distinctAgencias) {
      const maiorBalanceDaAgencia = await Acconts
      .find({ agencia: agencia })
      .sort({ balance: -1 })
      .limit(1);
      
      
      const { conta, name, balance } = maiorBalanceDaAgencia[0];

      const validate = await Acconts.find({
        conta: conta,
        agencia: 99,
      });

      if (validate.length === 0) {
        const novaConta = await Acconts.create({
          agencia: 99,
          conta: conta,
          name: name,
          balance: balance,
        });
      }
      console.log('chegou',validate,novaConta)
    }
  } catch (error) {
    res.status(500).send(error+'Erro ao fazer Agencia 99')
  }
}
export default {
  create, findAll, findOne, 
  update, remove, deposito, 
  saque, saldo, excluir, 
  transferencia, mediasaldo, 
  menorsaldo, maiorsaldo, dooutro, }
