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
      for(let i=0; i <= index;i++){
              node=index.next
             return collection[node]
      }


}


function addressAt(collection){
  return adddress
}
