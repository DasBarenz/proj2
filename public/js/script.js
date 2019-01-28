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
        // console.log("Checking yes.")
        // localStorage.userName = "Sarah";
        //         localStorage.userId = "1";
        //         localStorage.zipCode = "80212";
        //         window.location.href = `/api/user/${localStorage.userName}`
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
// function symptomClick() {
//     console.log($(this));
//     nSymptoms++;
// }
var clickedBtns = [];

$(document).on('click','.sickboy', function(){
    var elementToChangeBorderId = $(this).attr('id');
    var potentialIndexOfEl = clickedBtns.indexOf(elementToChangeBorderId);
    if(potentialIndexOfEl > -1){
        clickedBtns.splice(potentialIndexOfEl, 1);
        revertBorderGray(elementToChangeBorderId);
    }
    else{
        clickedBtns.push(elementToChangeBorderId);
        changeBorderGray(elementToChangeBorderId);
    }
   
});

function changeBorderGray(id){
    $(`#${id}`).removeClass('unselected-symptom');
    $(`#${id}`).addClass('selected-symptom');
}

function revertBorderGray(id){
    $(`#${id}`).removeClass('selected-symptom');
    $(`#${id}`).addClass('unselected-symptom');
}

// Get results when button pushed
function getResults() {
    $.post("/api/userdata", {
        id: localStorage.userId,
        score: clickedBtns.length
        // how can we push this length to local storage? this is what we will need below if we don't go a DB option with counting the score
    }).then(
        function (dbUserInfo) {
            window.location.href = `/api/user/${localStorage.userName}/results`
        }
    );
};

// get info from results.handelbars page, then
// if (localStorage.score >= 7) { 
//     //  put API route for severe or.... insert into div "We are sorry you are feeling so under-the-weather. You may need to contact you doctor."
//   } else if ( localStorage.score >= 3) {
//       //put API route for moderate or.... insert into div "We are sorry you're sick! You may need some over-the-counter medication. Please discuss with a pharmacist at the following locations." DISPLAY MAP
//   } else {
//       //put API route for minimum or .... insert into div "Some preventative measures may keep you from getting sick! We recommend......"
//   }