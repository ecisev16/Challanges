

function stringReduction(str){

    let x;
    //let newStr = [];
    //let itemNo = 0;

    if(str.length <= 1){
        newStr[itemNo] = str[0];
        console.log("last one", str[0]);
        return newStr;
        //console.log("str", newStr);
        //return newStr;    this is wrong because with this if statement, the fuction which in line #19 finished its job. So code move on with the line #20
    }else{

        if(str[str.length - 1] == str[str.length - 2]){
            newStr[itemNo] = str[str.length-1];
            itemNo++;
            str.pop();
            //console.log(newStr);
            stringReduction(str);
            return newStr;
        }else{
            for(var i=0; i<3; i++){
                if(str[str.length - 1] != abc[i]){
                    if(str[str.length - 2] != abc[i]){
                        
                        //str.replace(str[str.length - 2], abc[i]);
                        
                        x = abc[i];
                        
                        console.log("changed one", x);
                        console.log("abc", abc[i]);

                    } 
                }
            }
            str[str.length - 2] = x; //we couldn't whrite it in the for loop. because when we change str[str.length - 2] it became two true value. we just want one.
            str.pop()
            console.log("length", str.length);
            console.log("str", str);
            stringReduction(str);
            return newStr;
        }

    }

}

let str = ['a', 'b', 'c', 'a', 'a', 'a'];
let abc = "abc";
let newStr = [];
let itemNo = 0;
 

//stringReduction(str);

// str = str.slice(0, str.length - 1) // if you want to delete the last item of the string use this.
//str.pop();

console.log("ezgi", stringReduction(str));
//console.log(str);
//console.log(Boolean(str[str.length-1] == str[str.length - 2]));

