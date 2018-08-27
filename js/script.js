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
reset.addEventListener('click', function() {
  flkty.select(0);
})

var progressBar = document.querySelector('.scroll-progress');
flkty.on('scroll', function(progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar.style.width = progress * 100 + '%';
})

window.initMap = function() {
  var petra = data[0].coords;
  var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 4, center: petra});
  var marker = '';

  (function() {
    for (var i = 0; i < dataLen; i++) {
      marker = new google.maps.Marker({position: data[i].coords, map})
    
      var goToSlide = function(i) {
        marker.addListener('click',function() {
          flkty.select(i);
        });
      };
      goToSlide(i);
    }

    flkty.on('change', function(index) {
      map.panTo(data[index].coords);
      map.setZoom(12);
    })

  })();
}