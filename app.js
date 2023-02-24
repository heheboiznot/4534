//Get Btn And Create Function
//Dùng Id myBtn đã tạo bên file HTML sau đó .addEventListener để nghe lệnh click Chuột
document.getElementById('myBtn').addEventListener('click', getData);

function getData() {

  fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(data => {
  
      const quote = [data.quote,data.anime,data.character] 
      let output  ="<h2><center>result</center></h2>"
      quote.forEach(function(list){
        output +=`
        <ul>
        <li><h3>anime: ${data.anime}</h3>
        </li>
        <li><h3>character:${data.character} </h3>
        </li>
        <li><h3>quote: ${data.quote}</h3>
        </li>
        </ul>
        `
      })
          
      const quoteElement = document.getElementById('quote')
      quoteElement.innerHTML = output
      
    })
    .catch(error => console.error(error));
}