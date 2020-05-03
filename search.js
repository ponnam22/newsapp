const searchFrom = document.querySelector(".form-search");
const input = document.getElementById("search");

searchFrom.addEventListener('submit',retrieve)
 

function retrieve(e){
  e.preventDefault() 
  let topic=input.value;
       let url =   `https://newsapi.org/v2/everything?q=${topic}&apiKey=8857ddfa72ae47238500738f55cc70f1`

     let output = "";

     

let makeSomeHTML = (response) => {
 let obj = JSON.parse(response);
 let dataArr = obj["articles"];   
   for (let i = 0; i < dataArr.length; i++) {
       let currObj = dataArr[i];
       let atitle = currObj["title"];
       let aauthor = currObj["author"];
       let adescription = currObj["description"];
       let aimage = currObj["urlToImage"];
       let alink = currObj["url"];
       let outTemplate = `
              <li class="article">
                   <img  class="article-img" src="${aimage}" alt="${atitle}" style="width:100%" ><br><br>
                   <h2 class="article-title"> ${atitle}</h2><br>
                   <p class="article-description">${adescription || "DEscription not available"} </p><br>
                   <span class="article-author" style="display: block;"> ${aauthor}</span><br>
                   <a class="article-link" href="${alink}">link to page </a>
             </li>    
         `;
     output = output+ outTemplate; 
 }

let select = document.querySelector('.not-found');

         if (obj.totalResults == 0 ){   
             alert("No article was found");
             select.innerHTML = "No article was found based on the search.";             
         }


 document.querySelector('#news-articles').innerHTML = output;
}
httpGetAsync(url, makeSomeHTML);
}




// reload
var btn = document.querySelector("#clearbtn");

btn.addEventListener("click", function(e){

    e.preventDefault();

    location.reload(true);

});
