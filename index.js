function getName(node){

    return node.name
}


function headNode(node,collection){

       return  collection[node]

}

function next(node,collection){


    let nextnode  = node.next
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


function  indexAt(address,node,collection){

  //for(let i=0;i<;i++){

  //}
    index   = addressAt(address,node,collection)
  return node[index]
}
