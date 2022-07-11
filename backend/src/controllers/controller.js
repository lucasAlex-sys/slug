const axios = require('axios');
const qs = require('qs');
module.exports = {
    
     simpleMessage (req , res ){
        res.status(200).json({ message: 'hello world !!' })
    },
    async Login (req , res ){
        const info = req.body
        try{
            async function GetId(){
                var data = await axios.get("https://sig.cefetmg.br/sigaa/verTelaLogin.do")
                                    .then(async function(data){
                                        var response = await data.headers['set-cookie'][0].split(";")[0].split("=")[1]
                                        return response
                                    })
                                    .catch(function(){
                                        console.log("Falha na busca do ID")
                                    })
                return data
            }
            async function LoginSigaa(info){
                responseId = await GetId()
                id = "JSESSIONID="+responseId
                let bodyData={
                    "width": "800" ,
                    "height": "600" ,
                    "urlRedirect": "" ,
                    "subsistemaRedirect": "" ,
                    "acao": "" ,
                    "acessibilidade": "" ,
                    "user.login": info.user ,
                    "user.senha": info.password 
                }
                var responseLogin = await axios.post("https://sig.cefetmg.br/sigaa/logar.do?dispatch=logOn",qs.stringify(bodyData),
                                            {
                                                headers:{
                                                    'Content-Type':'application/x-www-form-urlencoded',
                                                    'User-Agent':'RestEase',
                                                    'Cache-Control':'no-cache',
                                                    'Cookie':id
                                                }
                                            })
                                        .then(function(){
                
                                        })
                                        .catch(function(){
                                            console.log("Falha ao logar")
                                        })
                return responseLogin
            }
            response = await LoginSigaa(info)
            res.status(200).json( {message:"ok"})
        }catch{
            res.status(404).json({message: 'falha'})
        }
    }
    
}