function isStrong(pass){
    if(pass.length < 8){
        return false;
    }
    let up =0;
    let lc = 0;
    let sp =0;
    let dig = 0;

    for(let i=0;i<pass.length;i++){
        let ind = pass.charAt(i);
        if(ind == '@' || ind == '$'){
            sp++;
            continue;
        }
        let small = ind.charCodeAt(0) - 'a'.charCodeAt(0);
        if(small >= 0 && small < 26){
            lc++;
            continue;
        }
        let big = ind.charCodeAt(0) - 'A'.charCodeAt(0);
        if(big >= 0 && big < 26){
            up++;
            continue;
        }
        let num = Number(ind) - 0;
        if(num >= 0 && num < 10){
            dig++;
            continue;
        }
    }
    if(up > 0 && lc > 0 && dig > 0 && sp > 0) return true;
    return false;
}
console.log("foure.js");
console.log(isStrong("aAbb12@$"));