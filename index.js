function getName(node){

    return node.name
}


function headNode(linkedlist,collection){

       return  collection[linkedlist]

}

function next(linkedlist,collection){


     linkedlist  = linkedlist.next
   return collection[linkedlist]
}


function nodeAt(index,linkedlist,collection){

    for(let i=0;i<index;i++){
           linkedlist=collection[linkedlist].next
     }
    return   collection[linkedlist]

}


function addressAt(address,linkedlist,collection){
   for(let i=0;i< address;i++){
      linkedlist=collection[linkedlist].next
    }
  return linkedlist
}


function  indexAt(node,linkedList,collection){
//  if(collection[i] == node ){}
  return   node //collection//[node]
}
