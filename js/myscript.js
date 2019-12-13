//var albumContainer = document.getElementById("album-info");
var pageCounter = 1;
var btn = document.getElementById("btn");
var scroll = document.getElementById("scroll");

btn.addEventListener("click", function() {
  var myRequest = new XMLHttpRequest();
  myRequest.open('GET', 'https://malc-v.github.io/top-2019-albums/albums.json');
  myRequest.onload = function() {
    var myData = JSON.parse(myRequest.responseText);
    renderHTML(myData);
  };
  myRequest.send();
  pageCounter++;
  if (pageCounter > 1) {
    btn.classList.add("hide-me");
    scroll.classList.add("show-me");
  }
});

function renderHTML(data) {
  var output = ""

  for (i = 0; i < data.albums.length; i++) {

        output = '<div class="box1">';
          output += '<span class="alb-title">' + data.albums[i].title + '</span>'; // get the title from each album list item
          output += '<span class="alb-artist">' + data.albums[i].artist + '</span>'; // get the artist name from each album list item
          output += '<span class="alb-genre">' + data.albums[i].genre + '</span>'; // get the album genre from each album list item
        output += '</div>';

        output += '<div class="box2">';
          output += '<span class="alb-date">' + data.albums[i].date + '</span>'; // get the album date from each album list item
          output += '<div class="alb-desc">';
            output += '<p>' + data.albums[i].desc + '<p>'; // get the album description from each album list item
          output += '</div>';
        output += '</div>';

        output += '<div class="box3">';
          output += '<span class="alb-acc">' + ' Year End List: ' + '<br>' + data.albums[i].yearlist1  + '<br>' + data.albums[i].yearlist2 + '</span>';
        output += '</div>';

        output += '<div class="box4">';
          output += '<div class="nested' + data.albums[i].number + '">';
            output += '<img class="cover" alt="Album Cover Art" src="images/cover-art/' + data.albums[i].coverimg + '.jpg"/>';
          output += '</div>';
          output += '<span class="alb-num">' + data.albums[i].number + '.' + '</span>';
        output += '</div>';

        output += '<div class="box5"></div>';

        var albumContainer = document.getElementsByClassName("wrapper")[i];
        albumContainer.insertAdjacentHTML('afterbegin', output);
  }

  //albumContainer.insertAdjacentHTML('afterbegin', output);
}
