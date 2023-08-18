const motorCylcleArray = [
  new motorCylcle(1, "C600 Sport", 200, "blue", 2010, "BMW Motorrad"),
  new motorCylcle(2, "Kawasaki KLR650", 119.9, "gray", 2008, "Kawasaki"),
  new motorCylcle(
    3,
    "Royal Enfield Himalayan",
    89.9,
    "white",
    2015,
    "Royal Enfield"
  ),
  new motorCylcle(4, "Honda Winner", 99.9, "blue", 2015, "Honda"),
  new motorCylcle(
    5,
    "Harley-Davidson Toppe",
    300,
    "gold",
    1961,
    "Harley-Davidson"
  ),
  new motorCylcle(6, "Suzuki DR650", 250, "gray", 1991, "Suzuki"),
];

function motorCylcle(id, model, price, color, year, manufacturer) {
  this.id = id;
  this.model = model;
  this.price = price;
  this.color = color;
  this.year = year;
  this.manufacturer = manufacturer;
}
const containerProducts = document.querySelector("#container-Product");
let productHtml = "";

function showmotorCylcle() {
  motorCylcleArray.forEach((product) => {
    productHtml += `
 <div class="product pruodct-item">
      <input class="product-id" type="hidden" value="${product.id}">
      <div class="productDetails">
        <p class="modelProduct">model:${product.model}</p>
        <span>price:${product.price}k$</span>
        <span>release date:${product.year}</span>
        <span>manufacturers:${product.manufacturer}</span>
    
        <button type="submit" class="Productbtn ${product.id}">פרטים</button>
      </div>
          <img src="../products/images/${product.model}.jpg" alt="C600">
    </div>
  `;
  });
  containerProducts.innerHTML = productHtml;
}
showmotorCylcle();

const productDetailAndBuy = document.getElementById("popUp-product");
const btn = document.querySelectorAll(".Productbtn");
btn.forEach((button) => {
  button.addEventListener("click", handleButtonClick);

  function handleButtonClick() {
    const buttonParent = button.closest(".pruodct-item");
    const idProduct = buttonParent.querySelector(".product-id").value;
    const modelProduct = buttonParent.querySelector(".modelProduct").innerText;

    productDetailAndBuy.style.visibility = "visible";
    let popUp;
    popUp = `
  <div id="descriptions">
            <h2 id="header">${motorCylcleArray[idProduct - 1].model}</h2>
            <p id="details">The ${
              motorCylcleArray[idProduct - 1].model
            } is a high-performance sportbike known for its cutting-edge technology,
                powerful engine,
                and track-oriented capabilities. Please note that my knowledge is based on information available up
                to
                September 2021,
                so there might have been updates or changes since then. Here's a general description of the ${
                  motorCylcleArray[idProduct - 1].model
                }
                based on information available up to that point:</p>
                <span>the price is ${
                  motorCylcleArray[idProduct - 1].price
                }$k</span>

        </div>
        
        <div id="photoAndColor">
           <img src="../products/images/${
             motorCylcleArray[idProduct - 1].model
           }.jpg" alt="C600">
          
        </div>
  
    



    </div>
      `;

    productDetailAndBuy.innerHTML = popUp;
    setInterval(function () {
      productDetailAndBuy.style.visibility = "hidden";
    }, 15000);
  }
});
