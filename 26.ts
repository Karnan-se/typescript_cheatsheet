


function reverseString(str:string){
    try{
        let reversedString  = str.split("").reverse().join("")
        console.log(reversedString)
        
    }catch(error:unknown){
        console.log(error)
    }finally{
        console.log(typeof str)

    }
}

reverseString("karnan")