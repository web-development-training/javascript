var uniqueId = setInterval(function () {
  console.log('setInterval');
}, 1000);

document.getElementById('clear').onclick = function () {
  clearInterval(uniqueId);
};

// setTimeout(function () {
// }, 15000);
