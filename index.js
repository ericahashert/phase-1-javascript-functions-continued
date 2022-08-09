function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun()
saturdayFun("go camping")

const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
mondayWork()
mondayWork("go kayaking")

function wrapAdjective(Nikko = "*") {
   return function (random = 'special') {
        return `You are ${Nikko}${random}${Nikko}!`;
    };
}
wrapAdjective()