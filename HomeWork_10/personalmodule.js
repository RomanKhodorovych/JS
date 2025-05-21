
function sayHi(username, date) {
    const time = date.getHours();
    switch (true) {
        case time >= 6 && time < 12:
            return `Date of request: ${date} \nGood morning, ${username}`;
        case time >= 12 && time < 18:
            return `Date of request: ${date} \nGood afternoon, ${username}`;
        case time >= 18 && time < 24:
            return `Date of request: ${date} \nGood evening, ${username}`;
        default:
            return `Date of request: ${date} \nGood night, ${username}`;
    }
};  
    
module.exports = {sayHi};

