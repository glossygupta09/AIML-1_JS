function calculateResult(){
    const n = document.getElementById("subjects").value;
    let i;
    let total=0;
    for(i=0; i<n; i++){
        let x= parseFloat(prompt("Enter the subject number"+(i+1)));
        total+=x;
    }
    let avg=total/n;
    let grade;
    if(avg>90){
        grade ="A+";
    }
        else if(avg>80){
            grade="B";
        }
            else if(avg>70){
                grade="C";
            }
            else if(avg>60){
                grade="D";
            }
        let result;
            if(avg>40){
                result = "PASS";
            }
            else{
                result = "FAIL";
            }
            

            document.getElementById("result").innerHTML="Total marks"+total+"</br>"+"Average marks"+avg+"</br>"+"Grade"+grade+"</br>"+"Result"+result+"</br>";

}
