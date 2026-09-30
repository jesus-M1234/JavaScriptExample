let position = ["Employee", "Enrolled Member", "Subscriber", "Non-Subscriber"];
let msg = ["You have full acces to the dietary services",
            "You have partial acces to the dietary services",
            "Please enroll to have full acces"];

if(position[0] === "Employee"){
    console.log(msg[0]);

}else if(position[1] === "Enrolled Member"){
    console.log(msg[0]);

}else if(position[2] === "Subscriber"){
    console.log(msg[1]);

}else if(position[3]){
    console.log(msg[2]);
}else{
    console.log("None of them");
}

