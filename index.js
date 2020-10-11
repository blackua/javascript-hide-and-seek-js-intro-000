
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

function deepestChild(){
  const main = document
               .getElementById('grand-node')
               .querySelectorAll('div')
  for (var i = 0; i < main.length; i++) {
    if (main[i].innerHTML != '') {
      return main[i].innerHTML
    }
  }
}
