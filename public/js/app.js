const renderUsers = function (){
    $.get("/api/users").then(function(users){
        for(let i = 0; i < users.length; i++){
            console.log("test");
            $('#sender').append(`<option dataID=${users[i]._id}>${users[i].name}</option>`);
            $('#receiver').append(`<option dataID=${users[i]._id}>${users[i].name}</option>`);
        }
    });
}

const postKudos = function() {
    const kudoText = $("#kudoBody").val().trim();

    $.post("/api/kudos", {message: kudoText}).then(function(data){
        renderKudos();
    })
}

const getKudos = function() {
    $.get("/api/kudos").then(function(kudos){
        renderKudos(kudos);
    });
}

const renderKudos = function(kudos) {
    for(let i = 0; i < kudos.length; i++){
        $(".kudos").append(``);
    }
}

renderUsers();
getKudos();

$("#submitKudo").on("click", postKudos);
$("#showModal").on('click', function(){
    $(".modal").modal("show");
});