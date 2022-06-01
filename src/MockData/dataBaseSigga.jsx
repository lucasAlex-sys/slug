const lucas1 = 
    {
        "login":"lucas1",
        "password":"123456"
    }

var index = 0
const map1 = new Map();
map1.set(index,lucas1)
function add(dado){
    map1.set(index+1,dado)
    index=index+1
    console.log(map1)
}
function get(){

    return map1 
}

export default {add,get};