var text= '{"employees":{'+'{"firstName":"John",lastName":"Smith"}'+'{"firstName":"Anna",lastName":"Doe"}}'

obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.employees[1].firstName+" "+obj.employees[1].lastName;