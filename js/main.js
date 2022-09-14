const send = document.querySelector(".icon-send-o");
const containerList = document.querySelector("#container-list");
const input = document.querySelector("input");
const emdia = document.getElementById("em-btn");
const tmam = document.getElementById("tmam");
const form = document.querySelector("form");

const task2 = document.querySelectorAll(".task");
const like = document.querySelector(".like");
let likes = 1;




form.addEventListener("submit", (eo) => {
  eo.preventDefault();

  const task = `<div class="task">
          <span class="icon-star icon"></span>
          <p class="para">${input.value}</p>

          <div>
            <span class="icon-trash icon"></span>
            <span class="icon-angry2 icon"></span>
          </div>
        </div>`;
  if (input.value != "") {
    like.innerHTML = ++likes;
    containerList.innerHTML += task;
    
    input.value = "";
    
  } else {
    emdia.showModal();
  }
});




tmam.addEventListener("click", (eo) => {
  emdia.close();
});

const angry22 = `<span class="icon-angry2 icon"></span>`;

const heart = `<span class="icon-heart icon"></span>`;
const taskArray = Array.from(task2);
taskArray.forEach((item) => {
  containerList.addEventListener("click", (eo) => {
    switch (eo.target.className) {
      case "icon-trash icon":
        
        eo.target.parentElement.parentElement.remove();
        like.innerHTML = --likes;
        
        break;

      case "icon-angry2 icon":
        eo.target.parentElement.parentElement
          .getElementsByClassName("para")[0]
          .classList.toggle("th-line");
        eo.target.classList.toggle("dis-none");

        eo.target.parentElement.innerHTML += heart;
        break;

      case "icon-heart icon":
        eo.target.parentElement.parentElement
          .getElementsByClassName("para")[0]
          .classList.toggle("th-line");
        eo.target.parentElement.parentElement.classList.remove("comp");
        eo.target.classList.toggle("dis-none");

        eo.target.parentElement.innerHTML += angry22;
        break;
      case "icon-star icon":
        eo.target.classList.add("gold");
        containerList.prepend(eo.target.parentElement);
        break;

      case "icon-star icon gold":
        eo.target.classList.toggle("gold");
        break;
      default:
        break;
    }
  });
});
