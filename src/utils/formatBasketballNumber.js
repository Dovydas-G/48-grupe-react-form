export function formatBasketballNumber(number, minSize) {
    
    const numLength = ('' + number).length;
    
    const times = (numLength < minSize) ? minSize - numLength : 0;
    
    let zero = '';

    for (let i = 0; i < times; i++) {
        zero += '0';
    }
    
    return  zero + number;
    
}