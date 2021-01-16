import axios from "axios"


// axios.get("https://lambda-times-api.herokuapp.com/articles")
//   .then(res =>{
//     console.log(res.data)
//   })
//   .catch(err =>{
//     console.log(err)
//   })

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const carddiv = document.createElement("div");
  const headlinediv = document.createElement("div");
  const authordiv = document.createElement("div");
  const imgdiv = document.createElement("div");
  const image = document.createElement("img");
  const span = document.createElement("span");

  carddiv.classList.add("card");
  headlinediv.classList.add("headline");
  authordiv.classList.add("author");
  imgdiv.classList.add("img-container")



  headlinediv.textContent = `${data.headline}`
  image.src = data.authorPhoto
  span.textContent =`By ${data.authorName}`

  carddiv.appendChild(headlinediv)
  carddiv.appendChild(authordiv)
  authordiv.appendChild(imgdiv)
  imgdiv.appendChild(image)
  authordiv.appendChild(span)




}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  
}

export { Card, cardAppender }
