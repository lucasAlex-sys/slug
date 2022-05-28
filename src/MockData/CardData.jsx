const card1 = [
    {
        "objeto":"lucas1",
        "descrição":"123456",
        "local":"",
        "data": new Date().toString
    },
    {
        "objeto":"lucas2",
        "descrição":"123456",
        "local":"",
        "data": new Date().toString
    }
    
]

var index = 0
//cards.add(card1[0])

function add(card){
    card1.push(card)
}
function get(){

    return card1
}
export default {add,get};  
