function getName(node){

    return node.name
}


function headNode(node,collection){

       return  collection[node]

}

function next(node,collection){


     return node.next
   //return collection[nextnode]
}


function nodeAt(index,node,collection){

    for(let i=0;i<index;i++){
          // node=collection[node].next
          node =   next(node,collection)
     }
    return   collection[node]

}


function addressAt(collection){
  return
}
