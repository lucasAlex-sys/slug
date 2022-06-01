import AdminController from "../../../Controller/AdminController";
import React, { useState } from 'react';


const Object = ({object})=>{
    console.log(object);
    function changeObjectState(){
        AdminController.editObject(object.id);
    }

    function actions(){
        if(object.state=="Achado"){
            return <button onClick={changeObjectState}>Recebido</button>
        }
    }

    return (
        <div>
            <h1>{object.object}</h1>
            <h3>{object.description}</h3>
            <img src={object.image} width={250}/>
            {actions()}
        </div>
    )
}
export default Object