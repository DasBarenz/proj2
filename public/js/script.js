/*intro*/

$(document).ready(function () {

    $(".check-no").click(function () {
        $(".alert-info").show();
        setTimeout(function () {
            $(".alert-info").hide();
        }, 2000);
    });



    $(".check-yes").click(function () {

        var inputName = $("#input-name").val().trim();

        if (!inputName) {

            $(".alert-danger").show();
            setTimeout(function () {
                $(".alert-danger").hide();
            }, 2000);

        } else {
            $.post("/api/welcome", {
                data: inputName
            }).then(
                function () {
                    console.log(inputName);
                    window.location.href = `/api/user/${inputName}`
                }
            );

            $("#user-name").val(inputName);
        }
    });

    $("header").hover(function () {
        $("#header-message").show();
    },
        function () {
            $("#header-message").hide();
        });



});

function loadingOverlay() {
    document.getElementById("myLoading").style.display = "block";
}

function closingOverlay() {
    document.getElementById("myLoading").style.width = "0%";
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}