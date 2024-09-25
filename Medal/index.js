const content = document.querySelector('.content')
const htmlStr = medals.map(item => {
  return `<div class="item">
      <span>${item.sortRank}</span>
      <img src="${'./images/'+item.organisation+'.png'}" alt="" title="">
      <span>${item.longDescription}</span>
      <span>${item.gold}</span>
      <span>${item.silver}</span>
      <span>${item.bronze}</span>
      <span>${item.total}</span>
    </div>`
}).join('')
content.innerHTML = htmlStr