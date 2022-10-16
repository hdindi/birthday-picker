
/**
 * TO DO = > Add functionality to calculate Day of the  week
 * Add functionality to calculate Day of the  week
 */
// TO DO  Add functionality to calculate Day of the  week 

$(document).ready(function () {


    $("#calculate_age").click(function (e) {
        e.preventDefault();
        birth_date = $("#BithDate").val();

        var d = new Date(birth_date);
        var n = d.getDay(d);

        console.log(n)

       

    });



});