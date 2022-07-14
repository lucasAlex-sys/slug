import service from './Service'

async function Cadastro(w_found, o_name,o_description,o_image,o_local,o_state){
    let bodyData={
            
        "w_found":w_found,
        "o_name": o_name,
        "o_description":o_description,
        "o_image":o_image,
        "o_local":o_local,
        "o_state":o_state
        
    }
   const data = await service
          .post("object",bodyData)
          return data
}
export default Cadastro

