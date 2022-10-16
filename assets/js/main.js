
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

        if ($("#BithDate").val() === "") {
            $(".birthdate_notify").append("Empty Birth Date selection");

        } else if ($("#Gender").val() === "") {
            $(".gender_notify").append("Empty Gender selection ");

        } else {
            
            $(".birthdate_notify").text(" ");
            $(".gender_notify").text(" ");
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

            }
        }





    });

    function maleSelector(dayWeek) {
        console.log("Male selector ")
    }


    function femaleSelector(dayWeek) {
        console.log("Female selector ")
    }



});