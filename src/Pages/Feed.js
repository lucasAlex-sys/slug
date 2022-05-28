import {useState} from 'react';
import {Route,Redirect} from 'react-router-dom'
import Card from '../Components/Card';
import CardData from '../MockData/CardData';
const Feed = () =>{
   
    return (
        
       <div className='Feed'>
           <div className=''>
               <header>
                    <div></div>
               </header>
           </div>
            <Card />
       </div>
    );
}

export default Feed;
