const popUp = document.querySelector(".toast-container");
const horizontalPosition = document.getElementById("horizontal-position");
const verticalPosition = document.querySelector("#vertical-position");
const showTostbtn = document.querySelector(".show-toast");
const toastMessageInput = document.querySelector("#toast-message");
const tosatMessageOutput = document.querySelector(".pop-up p");
const typeOfTosat = document.querySelector("#toast-type");
const duration = document.querySelector("#duration");
showTostbtn.addEventListener("click", () => {
    console.log(duration.value);
  const tostType = typeOfTosat.value;
  let tostMessage = toastMessageInput.value;
  createDiv(tostType, tostMessage);
  popUp.style.inset = "auto";
  popUp.style[horizontalPosition.value] = "10px";
  popUp.style[verticalPosition.value] = "10px";

  popUp.classList = ` absolute   text-white w-fit px-3 py-1 mx-2 rounded-sm ${
    horizontalPosition.value === "left"
      ? "animate-[wiggle_1s_ease-in-out]"
      : "animate-[wiggler_1s_ease-in-out]"
  } ]`;
});

const createDiv = (tostType, tostMessage) => {
  const div = document.createElement("div");
  const symbols = document.createElement('b')
  const messageInp = document.createElement('p')
  const closeSymbol = document.createElement('b')
  closeSymbol.classList = `cursor-pointer`
  symbols.innerText = `${tostType === "success"
                ? "✓"
                : tostType === "error"
                ? "✗"
                : tostType === "warning"
                ? "⚠"
                : "ⓘ" }`;
messageInp.innerText = `${tostMessage}`;
closeSymbol.innerText = `✕`
//   div.innerHTML = `
//     <div class="pop-up gap-2 flex ${
//       horizontalPosition.value === "left"
//         ? "animate-[wiggle_1s_ease-in-out]"
//         : "animate-[wiggler_1s_ease-in-out]"
//     } min-w-[223px]  text-white w-fit  p-2 rounded-sm my-2 h-full  ${
//     tostType === "success"
//       ? "bg-green-500"
//       : tostType === "error"
//       ? "bg-red-500"
//       : tostType === "warning"
//       ? "bg-yellow-500"
//       : "bg-gray-500"
//   } ">
//             <b>${
//               tostType === "success"
//                 ? "✓"
//                 : tostType === "error"
//                 ? "✗"
//                 : tostType === "warning"
//                 ? "⚠"
//                 : "ⓘ"
//             }</b>
//             <p>${tostMessage}</p>
//             <b class="font-semibold">&#10007 </b>
//         </div>
//  `;
 div.append(symbols)
 div.append(messageInp)
 div.append(closeSymbol)
  div.classList = ` pop-up gap-2 flex ${
    horizontalPosition.value === "left"
      ? "animate-[wiggle_1s_ease-in-out]"
      : "animate-[wiggler_1s_ease-in-out]"
  } min-w-[223px]  text-white w-fit  p-2 rounded-sm my-2 h-full  ${
        tostType === "success"
      ? "bg-green-500"
      : tostType === "error"
      ? "bg-red-500"
      : tostType === "warning"
      ? "bg-pink-400"
      : "bg-gray-500"
  }  `;

  popUp.append(div);
    closeSymbol.addEventListener('click',() => {
        setTimeout(() => {
            div.remove()
        },100)
    })
  setTimeout(() => {
    div.remove();
  }, parseInt(duration.value) * 1000);
};
