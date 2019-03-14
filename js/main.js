console.log("main js loaded");

var tableContainer = document.getElementById("dynamic-content");

var table = "<table>";

for (var index = 0; index < posts.length; index++) {

    var post = posts[index];
    table = table + "<tr><td>"+ post.id + "</td><td>"+ post.userId + "</td><td>"+ post.title + "</td></tr>";

}

table = table + "</table>";

tableContainer.innerHTML = table;

