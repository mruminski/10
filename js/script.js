var template = document.getElementById('template').innerHTML;
var result = document.querySelector('#carousel');

var wondersList = '';
var dataLen = data.length;

for (var i = 0; i < dataLen; i++) {
  wondersList += Mustache.render(template, data[i]);
}

result.innerHTML = wondersList;

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
  cellAlign: 'left',
  contain: true,
  hash: true
});

var reset = document.querySelector('#reset-btn');
reset.addEventListener('click', function(event) {
  var select = event.target.getAttribute('data-selector');
  flkty.selectCell(select);
})

var progressBar = document.querySelector('.scroll-progress');
flkty.on('scroll', function(progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar.style.width = progress * 100 + '%';
})