function saturdayFun(activity) {
    if (activity === "bathe my dog") {
        return(`This Saturday, I want to ${activity}!`);
    } else 
        return(`This Saturday, I want to roller-skate!`)

} 
    
function mondayWork(chore) {
    if (chore === "work from home") {
        return(`This Monday, I will ${chore}.`);
    } else 
        return(`This Monday, I will go to the office.`)
}

function wrapAdjective(result = `*`) {
   return function (emphatic = `a hard worker`) {
    return `You are ${result}${emphatic}${result}!`
   };
}

