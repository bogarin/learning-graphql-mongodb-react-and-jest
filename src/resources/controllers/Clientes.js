import services from "./../../services";
import { clienteModel } from "./../models";
const Clients = clienteModel(services);
export default () => ({
  getClientes: () => {
    const result = Clients.find({}, (err, clients) => {
      if (err) {
        return `Error: ${err}`;
      }
      return clients;
    });
    return result;
  },
  getCliente: input =>{
    const result=Clients.findById({_id:input._id},(err,client)=>{
      if (err) {
        return `Error: ${err}`;
      }
      return client;
    });
    return result;   
  },
  newCliente: input =>{
    const client=new Clients();
    
  }

});
