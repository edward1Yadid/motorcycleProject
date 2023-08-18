const cilentArray = [
  {
    name: "Edward Yadid ",
    nicename: "@EdwardTwitter1",
    photo: "happy-customer",
    id: 1,
    CommentC:
      "Outstanding service! Professional team, top-notch repairs, and personalized advice. My go-to for all motorcycle needs. Highly recommend!",
  },
  {
    name: "Lior Choen",
    nicename: "@LiorTwitter2",
    photo: "happy-customer-1",
    id: 2,
    CommentC:
      "Exceptional expertise! Timely service, friendly staff, and a commitment to perfection. Recommending to all fellow riders.",
  },
  {
    name: "Jhon Kely",
    nicename: "@JhonTwitter2",
    photo: "happy-customer-2",
    id: 3,
    CommentC:
      "Impressed by their care. Meticulous service, genuine recommendations – my ride performs flawlessly. Highly endorsed for motorcycle enthusiasts!",
  },
  {
    name: "Laly Jain",
    nicename: "@LalyTwitter2",
    photo: "happy-customer-3",
    id: 4,
    CommentC:
      "Reliable and skilled. They transformed my bike, exceeding expectations. If you're passionate about motorcycles, this place comes highly recommended.",
  },
];
let drawCleintComment = "";
function drawComment() {
  const container = document.getElementById("container");

  cilentArray.forEach((client) => {
    drawCleintComment += ` <div class="item-${client.id} clients-1">
                <div class="top-Clients">

                    <div class="nameAndlogo">
                        <img src="../images/${client.photo}.jpg" alt="logo" >
                        <div><span>${client.name}</span>
                            <p>${client.nicename}</p>
                        </div>

                    </div>


                    <div>
                        <img src="../images/rating.jpg" alt="rating">
                    </div>

                </div>
                <div class="comment1">
                    <p>${client.CommentC}</p>

                </div>
            </div>`;
  });

  container.innerHTML = drawCleintComment;
}
drawComment();
