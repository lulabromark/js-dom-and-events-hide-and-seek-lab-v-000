function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  return document.querySelectorAll('#grand-node div')[3];
}

function increaseRankBy(n) {
  const children = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < children.length; i++) {
    children[i].innerHTML = parseInt(children[i].innerHTML) + n;
  }
}