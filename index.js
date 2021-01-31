function getName(node){

    return node.name
}


function headNode(linkedlist,collection){

       return  collection[linkedlist]

}

function next(linkedlist,collection){


    let nextnode  = linkedlist.next
   return collection[nextnode]
}


function nodeAt(index,node,collection){

    for(let i=0;i<index;i++){
           node=collection[node].next
     }
    return   collection[node]

}


function addressAt(address,node,collection){
   for(let i=0;i< address;i++){
      node=collection[node].next
    }
  return node
}


function  indexAt(node,collection){

  return collection[node]
}
