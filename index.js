const resultHolder = document.querySelector("#result");
const input = document.querySelector("#input");
const status = document.querySelector("#status");

const worker = new Worker("/myworker.js");
worker.onmessage = (event) => {
  const { data } = event;
  console.log(`Received from worker: ${data}`);
  resultHolder.innerHTML = data;
  status.innerHTML = "Done!";
  //store.set(data);
};

function onButtonPress() {
  const inputValue = input.value;
  if (isNaN(inputValue) || inputValue < 0) {
    alert("Invalid input value");
    return;
  }

  console.log(`Sending to worker: ${inputValue}`);
  status.innerHTML = "Awaiting computation";
  worker.postMessage(inputValue);
}
