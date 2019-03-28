console.log("main js loaded");

createTable(posts);
filter(posts);
select.addEventListener("change",filter());

var tableContainer = document.getElementById("dynamic-content");

function createTable(posts) {

    var table = "<table class='table table-striped'>";


    table = table + "<tr><th>Id</th> + <th>User Id</th> + <th>Title</th> + <th>Body</th></tr>";


    for (var index = 0; index < posts.length; index++) {

        var post = posts[index];
        table = table + "<tr><td>"+ post.id + "</td><td>"+
            post.userId + "</td><td>"+ post.title +
            "</td><td>" + post.body +  "</td></tr>";

    }
    table = table + "</table>";

    tableContainer.innerHTML = table;

}

function select(posts) {

    var userIds = [];
    for (var i=0; i < posts.length; i++) {
        var post = posts[i];
        var userId = post.userId;

        if (userIds.indexOf(userId) === -1 ) {
            userIds.push(userId);
        }
    }


    var options = "<option value=''>Show All</option>";
    for (var i=0; i < userIds.length; i++) {
        options += "<option value = '" + userIds[i] + "'>" + userIds[i] + "</option>";
    }

    document.getElementById("user-filter").innerHTML = options;
}

function filter() {
    var select = document.getElementById("user-filter");
    var selectedValue = select.options[select.selectedIndex].value;

    createTable(posts,selectedValue);
}






