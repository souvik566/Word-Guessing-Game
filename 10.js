let arr=["Bruno","Benzema","Jude","Pedri","Gavi","Cristiano","Messi","Neymar","Romario","Zico","Zlatan","Zidane","Victor","Depay","Auba","Modric","Valverde","Cristian","Maradona","Vini","Rodrygo","Rodri","Salah","Muller","Lewa","Haland"];
let st= arr[Math.floor(Math.random()*arr.length)];
let name=document.getElementById("name");
let butt=document.getElementById("butt");
let i=2;
let temp=st[0];
butt.addEventListener("click", ()=>{
  
    let str="";
    let s=st.length;
    for(let i=0;i<s-1;i++){
       if(i==s-2){
        str+='_';
       }
       else {
        str+='_';
        str+=' ';
       }
    }
    name.innerText=st[0]+" "+str;
    ss=name.innerText;
    
})

let val=document.getElementById("val");
let clik=document.getElementById("click");
clik.addEventListener("click",()=>{

  if(i<ss.length){
    // console.log(i);
    // console.log(ss);
    // let xx=ss.replace(ss[i],val.value);
    // name.innerText=xx;
    // i-=2;
    temp+=val.value;
    console.log(ss[i]);
    let xx=ss.replace(ss[i],val.value);
    name.innerText=xx;
    i+=2;
    console.log(i);
    ss=xx;
  }
  else{
    
    if(temp==st){
      alert("You are Correct");
    }
    else{
      alert(`Wrong and Correct answer is ${st}`);

    }
  }
})
