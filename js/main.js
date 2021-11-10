// Loop over the grains variable and use jQuery to output li tags into the ul
// Each li tag should have img, h2 and p
// Style JS generated list using CSS

var $ul = $('ul');

grains.forEach(function (grain) {
  var $li = $('<li>');
  var $img = $('<img>');
  var $h2 = $('<h2>');
  var $p = $('<p>');

  $h2.html(grain.name);
  $p.html(grain.desc);
  $img.attr('src', 'images/' + grain.img);

  $li.append($img, $h2, $p);
  $ul.append($li);
});
