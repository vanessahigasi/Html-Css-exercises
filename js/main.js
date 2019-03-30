console.log("main js loaded");

createTable(posts);
filter(posts);
var select = document.getElementById("user-filter");
select.addEventListener("change",filter);



function createTable(posts) {
    var tableContainer = document.getElementById("dynamic-content");

    var table = "<table class='table table-striped'>";


    table = table + "<tr><th>Id</th> + <th>User Id</th> + <th>Title</th> + <th>Body</th></tr>";


    for (var index = 0; index < posts.length; index++) {

        var post = posts[index];
        table = table + "<tr><td>"+ post.id + "</td><td>"+
            post.userId + "</td><td>"+ post.title +
            "</td><td>" + post.body +  "</td></tr>";

    }
    table = table + "</table>";

    console.log(table);

    tableContainer.innerHTML = table;

}

function select(posts) {

    var userIds = [];
    for (var i=0; i < posts.length; i++) {
        var post = posts[i];
        var userId = post.userId;

        if (userIds.indexOf(userId) === -1 ) { //if is not repeated add to the array
            userIds.push(userId); //push similar to add on Java
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
    console.log(selectedValue);

    createTable(posts,selectedValue);
}






