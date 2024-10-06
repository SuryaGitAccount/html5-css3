
// this.onmessage=function(e){
//     if(e.data!=undefined){
//         this.postMessage(e.data.num1+e.data.num2)
//     }
// }

//another way
this.onmessage=function(e){
    const{data}=e;
    
        this.postMessage({"addresult":data.num1+data.num2});
   
}