/* Made with <3 in Germany */

/* shitload v1 */

var s = Snap("#svg");
var fly1 = s.paper.ellipse(0, 0, 1, 0.75);
var fly2 = s.paper.ellipse(0, 0, 1, 0.75);
var fly3 = s.paper.ellipse(0, 0, 1, 0.75);
var path1 = Snap("#path-1");
var path2 = Snap("#path-2");
var path3 = Snap("#path-3");
var path1Length = Snap.path.getTotalLength(path1);
var path2Length = Snap.path.getTotalLength(path2);
var path3Length = Snap.path.getTotalLength(path3);
var time = 800;

fly1.attr({ fill: '#000000' });
fly2.attr({ fill: '#000000' });
fly3.attr({ fill: '#000000' });

function loop() {
  animate();
  setInterval(function() {
    animate();
  }, time);
}

function animate() {
  Snap.animate(0, path1Length, function(value) {
    var movePoint1 = Snap.path.getPointAtLength(path1, value);
    fly1.attr({ cx: movePoint1.x, cy: movePoint1.y });
  }, time);

  Snap.animate(0, path2Length, function(value) {
    var movePoint2 = Snap.path.getPointAtLength(path2, value);
    fly2.attr({ cx: movePoint2.x, cy: movePoint2.y });
  }, time);

  Snap.animate(0, path3Length, function(value) {
    var movePoint3 = Snap.path.getPointAtLength(path3, value);
    fly3.attr({ cx: movePoint3.x, cy: movePoint3.y });
  }, time);
}

loop();
