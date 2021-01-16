function charCount(str){
    //make object to return at end
    var result = {};
    //loop over string ,for each character..
    for (var i=0 ; i < str.length; i++){
        var char = str[i]
         //if th char is a number /letter and is a key in object,add one to count
        if(result[char] > 0){
            result[char]++;
            //if th char is a number / letter and not in a object , add it to object and set value to 1
        }else{
            result[char]=1;
        };
       
    }
    
    //if character is something else (space, period, etc.)don't do anything
    //return aobject at end
    return result;
}