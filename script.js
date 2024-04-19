let string="";
let buttons = document.querySelectorAll(".Button");
Array.from(buttons).forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        if(e.target.innerHTML=='='){
            string =eval(string);
            document.querySelector("input").value=string;    // eval is used to evaluate the string
        }else if(e.target.innerHTML=="AC"){
            string="";
            document.querySelector("input").value=string;     //to clear the input
        }
        else if(e.target.id=="square"){
            string=Math.pow(eval(string),2);
            document.querySelector("input").value=string;      //to calculate the square of the number
        }
        else if(e.target.id=="square-root"){
            string=Math.sqrt(eval(string));
            document.querySelector("input").value=string;       //to calculate the square root of the number
        }
        else{
        console.log(e.target);
       string =string +e.target.innerHTML;
       document.querySelector("input").value=string;             
        }
        
    })
})