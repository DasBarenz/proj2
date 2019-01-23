/*intro*/

$(document).ready(function () {

    $(".check-no").click(function () {
        $(".alert").show();
        setTimeout(function () {
            $(".alert").hide();
        }, 2000);
    });

    $(".check-yes").click(function () {

        var inputName = $("#input-name").val();

        if (!inputName) {
            alert("Please input your name.");
            return;
        }

        // $(function () {
        //     $.get("./main.html", function (result) {
        //         $("#user-name").val(inputName);
        //     });
        // });

        window.location.href = './main.html';


        $("#user-name").val(inputName);
    });


});


