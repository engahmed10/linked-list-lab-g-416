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

              if(index == 0){
                 return collection[node]
              }else{

                return collection[collection[collection[node].next].next]
              }
}


function addressAt(collection){
  return adddress
}
