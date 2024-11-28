function compactObject(myObject) {
    if (Array.isArray(myObject)) {
        return myObject
            .filter(Boolean)
            .map(element => (typeof element === 'object' && element !== null) ? compactObject(element) : element);
    } else if (typeof myObject === 'object' && myObject !== null) {
        let result = {};
        Object.keys(myObject).forEach(key => {
            if (Boolean(myObject[key])) {
                result[key] = (typeof myObject[key] === 'object' && myObject[key] !== null) 
                    ? compactObject(myObject[key]) 
                    : myObject[key];
            }
        });
        return result;
    }
    
    return myObject;
}
