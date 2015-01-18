// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  var nodes = [];
  // function to find all the nodes recusively
  function findNodes(node) {
    // if the class list matches, add the node
    if (node.classList) {
      if (node.classList.contains(className)) {
        nodes.push(node);
      }
    }
    // if there are children, search them
    if (node.childNodes.length) {
      for (var i = 0; i < node.childNodes.length; i++) {
        findNodes(node.childNodes[i]);
      }
    }
  }
  // call recursive function
  findNodes(document.body);
  return nodes;

};
