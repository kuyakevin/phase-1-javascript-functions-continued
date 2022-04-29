// code your solution here
function saturdayFun(fun = "roller-skate") {
    return `This Saturday, I want to ${fun}!`;
}

function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(input = "*") {
    const result = function (adjective = "special") {
        return `You are ${input}${adjective}${input}!`;
    };
    return result;
}