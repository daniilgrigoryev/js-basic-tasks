function yearsFirstJanSun(startYear, endYear){
  let listYears = [];

  // do{
  //   const getDate = new Date(startYear, 0, 1);
  //   if(getDate.getDay() == 0) listYears.push(startYear);
  //   startYear++;
  // }while(startYear < endYear);

  for(startYear; startYear < endYear; startYear++){
    const getDate = new Date(startYear, 0, 1);
    getDate.getDay() == 0 ? listYears.push(startYear) : undefined;
  }
  return listYears;
}

let listYear = yearsFirstJanSun(2000, 2050);

console.log(listYear);