/*intro*/

var nSymptoms = 0;

// User is under-age
$(".check-no").click(function () {
    $(".alert-info").show();
    setTimeout(function () {
        $(".alert-info").hide();
    }, 2000);
});

// User checks yes to enter symptoms
$(".check-yes").click(function () {
    var inputName = $("#input-name").val().trim();
    var zipCode = $("#input-zipcode").val().trim();

    if (!inputName) {
        $(".alert-danger").show();
        setTimeout(function () {
            $(".alert-danger").hide();
        }, 2000);
    } else {
        $.post("/api/welcome", {
            userName: inputName,
            zipCode: zipCode
        }).then(
            function (dbUserInfo) {
                localStorage.userName = dbUserInfo.name;
                localStorage.userId = dbUserInfo.id;
                localStorage.zipCode = dbUserInfo.zipcode;
                window.location.href = `/api/user/${localStorage.userName}`
            }
        );
    }
});

// Header message
$("header").hover(function () {
    $("#header-message").show();
},
    function () {
        $("#header-message").hide();
    });

// Count symptoms
function symptomClick() {
    nSymptoms++;
}

// Get results when button pushed
function getResults() {
    $.post("/api/userdata", {
        id: localStorage.userId,
        score: nSymptoms
    }).then(
        function (dbUserInfo) {
            window.location.href = `/api/user/${localStorage.userName}/results`
        }
    );
};