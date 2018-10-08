
// Calculates a weekly salary

function get_salary() {

var hours = prompt("Please enter the number of hours you worked this week");
var rate = prompt("Please enter your hourly wage");

//Calculates over time pay or regular pay
if (hours>= 20)

{
regpay = (rate * 20)
overtimepay = ((rate * 1.5) * (hours - 20))
pay = (regpay + overtimepay)

// Send an alert with over time pay values
alert ("You earned overtime this week! Your total pay is " + pay);

}

else 
{
regpay = (rate * hours)
overtimepay = 0.00

//send an alert with regular paid amount
alert ("Your total pay is " + regpay);
}
}





