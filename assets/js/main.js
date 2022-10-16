
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
        const male = { 0: "Kwasi", 1: "Kwadwo", 2: "Kwabena", 3: "Kwaku", 4: "Yaw", 5: "Kofi", 6: "Kwame" };
        console.log("Male value => " + male[dayWeek])
        return male[dayWeek];
    }


    function femaleSelector(dayWeek) {
        const female = { 0: "Akosua", 1: "Adwoa", 2: "Abenaa", 3: "Akua", 4: "Yaa", 5: "Afua", 6: "Ama" };
        console.log("Female value => " + female[dayWeek])
        return female[dayWeek]; 
        
    }



});