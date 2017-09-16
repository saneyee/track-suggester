$(function(){
    $("form#formone").submit(function(event) {
        $("#outpt, #css-sugges, #php-sugges, #c-sugges, #ruby-sugges, #java-sugges, #ios-sugges").hide();
        var name = $("input#name").val();
        var gender = $("#gender").val();
        var age = $("#age").val();
        var prog = $("#prog").val();
        var previousExp = $("input:radio[name=previous]:checked").val();
        var devChoice = $("input:radio[name=dev]:checked").val();
        var compChoice = $("input:radio[name=comp]:checked").val();
        var kindChoice = $("input:radio[name=kind]:checked").val();

        $("#name-output").text(name);

        if (name != false && gender != false &&  age != false && prog != false && previousExp != false && devChoice != false && compChoice != false && kindChoice != false) {
            if (devChoice === 'front' && compChoice === 'startup' && kindChoice === 'android') {
            $("#css-sugges").show();
            $("#ruby-sugges").show();
            $("#java-sugges").show();

            }



        $("#outpt").show();
    }

        else {
            alert("Fill up the form!!!!");
        }










    event.preventDefault();
    });



});
