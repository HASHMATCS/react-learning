export  function getResultArrays(marks){
    const pass=marks.filter(m=>m>=50).sort((a,b)=>a-b);

    const fail=marks.filter(m=>m<50).sort((a,b)=>a-b);
    return{fail,pass}
}