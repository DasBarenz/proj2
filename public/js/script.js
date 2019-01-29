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
$(document).ready(function () {
    $("#header-message").hide();

    $("header").hover(function () {
        $("#header-message").show();
    },
        function () {
            $("#header-message").hide();
        });
});

//symptoms check btn
var clickedBtns = [];

$(document).on('click', '.sickboy', function () {
    var elementToChangeBorderId = $(this).attr('id');
    var potentialIndexOfEl = clickedBtns.indexOf(elementToChangeBorderId);
    if (potentialIndexOfEl > -1) {
        clickedBtns.splice(potentialIndexOfEl, 1);
        revertBorderGray(elementToChangeBorderId);
    }
    else {
        clickedBtns.push(elementToChangeBorderId);
        changeBorderGray(elementToChangeBorderId);
    }
});

function changeBorderGray(id) {
    $(`#${id}`).removeClass('unselected-symptom');
    $(`#${id}`).addClass('selected-symptom');
    playAudio("ring-04");

}

function revertBorderGray(id) {
    $(`#${id}`).removeClass('selected-symptom');
    $(`#${id}`).addClass('unselected-symptom');
}

// Get results when button pushed
function getResults() {
    if (clickedBtns.length == 0) {
        $("#click-message").show();
        setTimeout(function () {
            $("#click-message").hide();
        }, 2000);
        return;
    }
    $.post("/api/userdata", {
        id: localStorage.userId,
        score: clickedBtns.length
    }).then(
        function (dbUserInfo) {
            window.location.href = `/api/user/${localStorage.userName}/results`
        }
    );
};

// Play audio
function playAudio(elName) {
    var yourRing = document.getElementById(elName);
    yourRing.play();
}
