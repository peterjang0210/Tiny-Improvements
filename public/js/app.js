const renderUsers = function (){
    $.get("/api/users").then(function(users){
        for(let i = 0; i < users.length; i++){
            $('#sender').append(`<option value=${users[i]._id}>${users[i].name}</option>`);
            $('#receiver').append(`<option value=${users[i]._id}>${users[i].name}</option>`);
        }
    });
}

const postKudos = function() {
    const kudoText = $("#kudoBody").val().trim();
    const kudoTitle = $("#messageTitle").val().trim();
    const senderID = $("#sender").val();
    const receiverID = $("#receiver").val();
    if(kudoText === null || kudoTitle === null || senderID === null || receiverID === null){
        $(".alertDiv").empty();
        $(".alertDiv").append(`<div class="alert alert-danger" role="alert">
        Please complete all fields!</div>`)
    } else {
        $.post("/api/kudos", {title: kudoTitle, message: kudoText, sender: senderID, receiver: receiverID}).then(function(data){
            $(".alertDiv").empty();
            getKudos();
            $("#kudoBody").val("");
            $("#messageTitle").val("");
            $("#sender").val("Select Sender");
            $("#receiver").val("Select Receiver");
            $(".modal").modal("hide");
        });
    }
    
}

const getKudos = function() {
    $.get("/api/kudos").then(function(kudos){
        renderKudos(kudos);
    });
}

const renderKudos = function(kudos) {
    $(".kudos").empty();
    for(let i = 0; i < kudos.length; i++){
        $(".kudos").append(
            `<div class="card kudo">
                <h2 class="card-title text-center">${kudos[i].title}</h2>
                <div class="card-body">
                    <h3 class="text-muted receiver">To: ${kudos[i].receiver.name}</h3>
                    <p class="text-center">${kudos[i].message}</p>
                    <h3 class="text-muted sender">From: ${kudos[i].sender.name}</h3>
                    
                </div>
            </div>`);
    }
}

renderUsers();
getKudos();

$("#submitKudo").on("click", postKudos);
$("#showModal").on('click', function(){
    $(".alertDiv").empty();
    $(".modal").modal("show");
});