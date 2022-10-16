$(document).ready(function () {


    $("#calculate_age").click(function (e) {
        e.preventDefault();
        birth_date = $("#BithDate").val();

        var d = new Date(birth_date);
        var n = d.getDay(d);

        console.log(n)

        weekDayCalculator(birth_date);

    });


    function weekDayCalculator(birth_date) {
        /**
         * Date format -> YYYY-MM-DD
         * CC - > Century
         * YY - > 2 Digits of the Yr
         * MM - > Month 
         * DD -> Day of the Month         
         */
        var CC = birth_date.substr(0, 2);

        var YY = birth_date.substr(2, 2);
        var MM = birth_date.substr(5, 2);
        var DD = birth_date.substr(8, 2);

        console.log(`CC => ${CC} YY => ${YY} MM => ${MM} DD=> ${DD} `)

        var dayOfWeek = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
        console.log(dayOfWeek)

        return dayOfWeek;
    }
});