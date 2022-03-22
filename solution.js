var longestCommonPrefix = function(strs) {
    
    let array_answers = [];
    //let final_answer = "";
    
    for(let x = 0; x < strs[0].length; x++){
        
        let count = 0;
        
        for(let y = 0; y < strs.length; y++){
            if(strs[0][x] === strs[y][x]) count++;
        }
        
        if(count === strs.length) array_answers.push(strs[0][x])
        else break
    }
    
    return array_answers.join('')
};
