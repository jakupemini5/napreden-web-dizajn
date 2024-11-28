function compose(functions) {
    return (input) => {
        return functions.reduceRight((acc, fn) => {
            return fn(acc);
        }, input);
    };
};