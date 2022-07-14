import service from './Service'

async function LoginOnSigaa(user, password){
    let bodyData={
            
        "user": user ,
        "password": password 
    }
   const data = await service
          .post("login",bodyData)
          return data
}
export default LoginOnSigaa

