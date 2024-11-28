function sort_by_num_calls(arrayOfFunctions) {
    let functionsAndCalls = []
    arrayOfFunctions.forEach(element => {
        functionsAndCalls.push({functionName : element , numberOfCalls : callFunctionTillValue(element, 0)})
    });
    functionsAndCalls.sort((a,b) => a.numberOfCalls - b.numberOfCalls)

    return functionsAndCalls.map(x => x.functionName);
}

function callFunctionTillValue(myFunction, counter) {
    if(typeof (myFunction) === 'function' ) {
        counter += callFunctionTillValue(myFunction(), counter+1)
    }
    return counter;
}