import React from 'react';
import ListItems from './ListItems';
//code here
 const List = ({listx}) =>{
  return(
    
 <>
 
 {listx.map( (list)  => 
  <ListItems valuex ={list}
  />)}
 
 </>
    
  
  )
}

export default List;