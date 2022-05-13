const content = document.getElementById('content')
const dateNote = document.getElementById('dateNote')
const time = document.getElementById('time')
const addedBtn = document.getElementById('addedBtn')
const deletedBtn = document.getElementById('deletedBtn')
const list = document.getElementById('list')

const listContent = []

// class RenderFeature{
//   append() {

//   }
//   render() {
//     // 渲染頁面的list
//     let htmlStr = ''
  
//     listContent.forEach(function (item) {
//       htmlStr = htmlStr + `
//       <div class="item">
//         <div>
//           <p>內容：${item.content}</p>
//           <p>時間：${item.date} ${item.time}</p>
//         </div>
//       </div>
//       `
//     })
  
//     list.innerHTML = htmlStr
//   }
// }


// Blank After click
function blank() {
  document.getElementById("content").value=" "
  document.getElementById("dateNote").value=" "
  document.getElementById("time").value=" "

}

// function 
function render() {
  // 渲染頁面的list
  let htmlStr = ''

  listContent.forEach(function (item) {
    htmlStr = htmlStr + `
    <div class="item">
      <div>
        <p>Title：${item.content}</p>
        <p>Time：${item.dateNote} ${item.time}</p>
      </div>
    </div>
    `
  })

  list.innerHTML = htmlStr
}

// const r1 = new RenderFeature()

addedBtn.addEventListener('click', function () {

  listContent.push({
    content: content.value,
    dateNote: dateNote.value,
    time: time.value
  })

  render()
  blank()
  
})

deletedBtn.addEventListener('click', function () {
  listContent.shift()

  render()
})