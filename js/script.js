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