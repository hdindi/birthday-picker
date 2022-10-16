
/**
 * TO DO = > Add functionality to calculate Day of the  week
 * Add functionality to calculate Day of the  week
 */
// TO DO  Add functionality to calculate Day of the  week 

$(document).ready(function () {


    $("#calculate_age").click(function (e) {
        e.preventDefault();
        birth_date = $("#BithDate").val();
        gender = $("#Gender").val();

        var convertDate = new Date(birth_date);
        var dayWeek = convertDate.getDay();

        console.log(dayWeek)

        switch (gender) {
            case "female":
                femaleSelector(dayWeek);
                break;
            case "male":
                maleSelector(dayWeek);
                break;
            case "":
                break;
        }



    });

    function maleSelector(dayWeek) {
        console.log("Male selector ")
    }


    function femaleSelector(dayWeek) {
        console.log("Female selector ")
    }



});