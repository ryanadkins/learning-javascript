 var containers = "bottles";
var beverage = "beer";
var count = 99;

while (count > 0 ) {
    document.write(count + " " + containers + " of " + beverage + " on the wall");
    document.write("<br />");
    document.write(count + " " + containers + " of " + beverage);
    document.write("<br />");
    document.write("Take one down, pass it around");
    document.write("<br />");
    count = count - 1;
    if( count > 0 )
    {
        document.write(count + " " + containers + " of " + beverage + " on the wall");
        document.write("<br />");
    }
    else {
        document.write("No more " + containers + " of " + beverage + " on the wall");
    }
};