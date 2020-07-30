//Lev1_2_js-vertiefung_BOM_setTimeout_setInterval


// const zeit = document.querySelector('.zeit')
// let x = 100;


// const startMe = () => {
//     let interval = setInterval(() => {
//         if (x != 0) {
//             x--
//             zeit.innerHTML = x + '%'
//         } else {
//             zeit.innerHTML = x + '%'
//             clearInterval(interval)
//         }
//     }, 10)
// }
// const countDown = () => {
//     if (x != 0) {
//         x--
//         zeit.innerHTML = x +'%'
//     } else {
//         zeit.innerHTML = x +'%'
//     }

// }




// let autor1= document.getElementById("author")
// let content1= document.getElementById("content")
// let description1= document.getElementById("description")
// let publishedAt1= document.getElementById("publishedAt")
// let source1= document.getElementById("source")
// let title1= document.getElementById("title")
// let url1= document.getElementById("url")
// let urlToImage1= document.getElementById("urlToImage")



fetch('http://newsapi.org/v2/top-headlines?q=trump&apiKey=e50d5ba4c45247aa8647389e8e66e9af')
  .then(response => response.json())
  .then((data) => {
      console.log(data.articles);
  
//   data.forEach((item) => {
//     result.innerHTML += `
//     <h2>${item.autor}</h2>
//    <p>${item.name}</p>
//    `
// console.log("test")

Object.keys(data.articles).forEach(function(key) {
    
    result.innerHTML += `<div>
    <img src="${data.articles[key].urlToImage}"> 
         <h2>${data.articles[key].title}</h2>
        <p>${data.articles[key].content}</p>
       

        <p>${data.articles[key].author}</p>
        <p>${data.articles[key].description}</p>
        <a href="#">For more Info</a>
        
     </div>`
    console.log(key, data.articles[key]);
  
  });
})


