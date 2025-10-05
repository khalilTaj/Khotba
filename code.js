const day = new Date();
const Friday = day.getDay();
const Noon = day.getHours();

if (Friday == 5 && Noon == 12){
    console.log("u can post now");
}
else{
    console.log("you cant post now");
}
;

function allowPosts(weekDay, time){
    if (weekDay == 5 && time == 12){
        return("u can post now")
    }
    else{
        return("you cant post now")
    };
};

console.log(allowPosts(Friday, Noon))