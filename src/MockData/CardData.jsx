const card1 = [
    {
        "objeto":"lucas1",
        "img":"../../assets/logoCEFETMG.svg",
        "local":"predio 20",
        "data":  "28/05/2022 às 22:32"
    },
    {
        "objeto":"lucas2",
        "img":"../../assets/logoCEFETMG.svg",
        "local":"predio 20",
        "data": "28/05/2022 às 22:32"
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
