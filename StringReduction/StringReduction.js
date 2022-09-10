

function stringReduction(str){

    //let newStr = [];
    //let itemNo = 0;

    if(str.length === 1){
        newStr[itemNo] = str[0];
        console.log("str", newStr);
        //return newStr;    this is wrong because with this if statement, the fuction which in line #19 finished its job. So code move on with the line #20
    }else{

        if(str[str.length-1] == str[str.length - 2]){
            newStr[itemNo] = str[str.length-1];
            itemNo++;
            str = str.slice(0, str.length - 1)
            console.log(newStr);
            stringReduction(str);
            return newStr;
        }

    }

}

let str = "aaa"
let newStr = [];
let itemNo = 0;
//stringReduction(str);

// str = str.slice(0, str.length - 1) // if you want to delete the last item of the string use this.

console.log("ezgi", stringReduction(str));
//console.log(str)
//console.log(Boolean(str[str.length-1] == str[str.length - 2]));

