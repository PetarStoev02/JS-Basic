function solve(arg1, arg2) {
    let students = Number(arg1);
    let seasons = Number(arg2);

    for(let i=1;i<=seasons;i++){
            students = Math.ceil(students * 0.9);
            students =  Math.ceil(students*0.9);
            students = Math.ceil(students*0.8);
            if(i%3===0){
                students += Math.ceil(students*0.15);
            }else{
              students += Math.ceil(students*0.05);  
            }
            
          } 
   
    console.log(`Students: ${students}`);
}
solve(100, 6);
