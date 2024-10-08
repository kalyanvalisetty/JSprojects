
let mainContainer = document.querySelector('.main-container');

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((json)=>{

              for(let i=0; i<json.length;i++){
                let card = document.createElement('div');
                card.classList.add("container");
                card.style.width = "300px";
                
                let image =  document.createElement('img');
                image.classList.add('images');
                image.setAttribute('src',`${json[i].image}`);

                let heading = document.createElement('h1');
                heading.style.fontSize = "16px";
                heading.style.fontWeight = "bold";
                heading.textContent = `${json[i].title}`

                let price = document.createElement('span');
                price.style.fontSize = "16px";
                price.style.marginRight = "8px";
                price.textContent = `Price:$${json[i].price} `

                let rating = document.createElement('span');
                rating.style.fontSize = "16px";
                rating.style.fontSize = "green";
                rating.style.marginRight = "5px";
                rating.innerHTML = `Rating:${json[i].rating.rate}`
    
                let star = document.createElement('span');
                star.style.fontSize = "16px";
                star.style.color = "gold";
                star.innerHTML = `<i class="bi bi-star-fill"></i>`

                let btn = document.createElement('button');
                btn.classList.add('button1');
                btn.innerHTML = `<i class="bi bi-cart4"></i> Add to cart`;

                card.appendChild(image);
                card.appendChild(heading);
                card.appendChild(price);
                card.appendChild(rating);
                card.appendChild(star);
                card.appendChild(btn);

                mainContainer.appendChild(card);
              }
            })



             

