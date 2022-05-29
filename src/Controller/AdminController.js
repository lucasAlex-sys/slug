let objects = {
    '1': {
        id: '1',
        object: 'Caderno',
        description: 'Caderno encontrado na sala 302',
        local: "P20",
        image: "https://img.kalunga.com.br/fotosdeprodutos/136675z.jpg",
        state: "Achado"
    },
    '2': {
        id: '2',
        object: 'Celular',
        description: 'Caderno encontrado na sala 305',
        local: "P20",
        image: "https://www.fastshop.com.br//wcsstore/FastShopCAS/images/catalog/AEMLPF3BRAPTO_PRD/AEMLPF3BRAPTO_PRD_447_1.jpeg",
        state: "Entregue"
    }
}

function getObjectFromCode(code) {
    if (code == "#1")
        return objects['1']
    if (code == "#2")
        return objects['2']
    return null
}
function getObjectsFromUser(matricula) {
    return {
        profileUrl: 'https://s2.glbimg.com/AiGp7DBm8nXkLk5iAA0YmeBEgf8=/0x0:984x612/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2022/A/3/AHyD7qQlO1TaMsseqLNg/casimiro.jpg',
        name: 'Case Mito',
        curso: 'ENGENHARIA DE COMPUTAÇÃO/DCNG - BELO HORIZONTE - BACHARELADO - MT',
        matricula: '294298775125',
        achados: [
            {
                id: 1,
                objeto: 'Caderno',
                status: 'Entregue'
            },
            {
                id: 78,
                objeto: 'Fone',
                status: 'Achado'
            },
            {
                id: 12,
                objeto: 'Celular',
                status: 'Entregue'
            },
            {
                id: 55,
                objeto: 'Livro',
                status: 'Achado'
            },
            {
                id: 56,
                objeto: 'Relógio de luxo',
                status: 'Entregue'
            }
        ]
    }
}
function editObject(id,matricula=null) {
    console.log(objects[id]);
    switch(objects[id].state){
        case "Achado":objects[id].state='Entregue'
                        break;
        case "Entregue":objects[id].state='Retirado'
                        objects[id].matricula=matricula
                        break;
    }
    console.log(objects[id]);
}
export default { getObjectFromCode, getObjectsFromUser,editObject }