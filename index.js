
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelectorAll('div.target')[0]
}

function increaseRankBy(n){
  const lis = document
              .getElementById('app')
              .querySelectorAll('ul.ranked-list li')

  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }

  return lis
}

function deepestChild() {
  let gNode = document.querySelector('#grand-node')
  let nextNode = gNode.children[0];

  while (nextNode) {
    gNode = nextNode;
    nextNode = gNode.children[0];
  }
  return (gNode);
}
