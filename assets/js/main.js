
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

        var CC = birth_date.substr(0, 2);

        var YY = birth_date.substr(2, 2);
        var MM = birth_date.substr(5, 2);
        var DD = birth_date.substr(8, 2);

        //Validate date picker values to be within the date parameters
        if(DD < 1 || MM < 1 || YY < 1 || DD > 31 || MM > 12  ){
            $(".birthdate_notify").append("Invalid Birth Date selection , please try again ... "); 
        }


        if ($("#BithDate").val() === "") {
            $(".birthdate_notify").append("Empty Birth Date selection");

        } else if ($("#Gender").val() === "") {
            $(".gender_notify").append("Empty Gender selection ");

        } else {

            $(".birthdate_notify").text(" ");
            $(".gender_notify").text(" ");
            $(".ghanaian_name").text(" ");
            var convertDate = new Date(birth_date);
            var dayWeek = convertDate.getDay();

            

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
        const male = { 0: "Kwasi", 1: "Kwadwo", 2: "Kwabena", 3: "Kwaku", 4: "Yaw", 5: "Kofi", 6: "Kwame" };
        console.log("Male value => " + male[dayWeek]);
        $(".ghanaian_name").text(" ");
        $(".ghanaian_name").append(male[dayWeek]);
        return male[dayWeek];
    }


    function femaleSelector(dayWeek) {
        const female = { 0: "Akosua", 1: "Adwoa", 2: "Abenaa", 3: "Akua", 4: "Yaa", 5: "Afua", 6: "Ama" };
        console.log("Female value => " + female[dayWeek]);
        $(".ghanaian_name").text(" ");
        $(".ghanaian_name").append(female[dayWeek]);
        return female[dayWeek];

    }



});