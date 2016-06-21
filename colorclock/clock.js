function time() {
  var date = new Date()
  
  var hr = date.getHours(),
      min = date.getMinutes(),
      sec = date.getSeconds()
  
  var arr = [hr, min, sec].map(function(num) {
    return num < 10 ? "0" + num : num.toString();
  }).join(':');
  
  return arr
}

function output(time) {
  var color = '#' + time;
  document.body.bgColor = color;
  document.getElementById('time').textContent = time;
  document.body.style.color = '#EBF4FA';
}

function startClick(callback) {
  document.body.addEventListener('dblclick', function(event) {
    callback();
  });
}

function stopClick(callback, name) {
  document.body.addEventListener('click', function(event) {
    callback(name);
  });
}

function init() {
  var tick = setInterval(function() { output(time())}, 1000);
  stopClick(clearInterval, tick);
  startClick(init)
}

init();