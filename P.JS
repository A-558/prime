
function prime(){

    var n='';
 n = document.getElementById("number").value;


for(i=2;i<n;i++){

    if(n%i==0){
       
        console.log("the number not prime");
        document.getElementById("result").value="the number not  a prime";
        document.getElementById("result").style.color="red";
        return 
        
    }
}

        console.log("the number a prime")
        document.getElementById("result").value = "the number is a prime"
        document.getElementById("result").style.color="green";
        return



    }