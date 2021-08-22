function isMatchingBrackets(str) {
    let stack =[];
    let brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
            stack.push(str[i]);
        }
        else{
            let last = stack.pop(); 
            if(str[i] !== brackets[last])
                return false;
        }
    }
    if(stack.length !== 0)
        return false;
    
    return true;
}

console.log(isMatchingBrackets("{{{{[[]()]}}}}"));
console.log(isMatchingBrackets("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]"));