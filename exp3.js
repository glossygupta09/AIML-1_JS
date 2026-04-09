let heading = document.getElementById("mainHeading");
let paragrapgh = document.getElementById("paragraph");
let input = document.getElementById("userInput");
let fontSize = 16;
document.getElementById("changeTextBtn").addEventListener("click", 
    function(){
        if (input.value != ""){
            heading.innerHTML = input.value;
        }
    });
document.getElementById("bgColorBtn").onclick = function (){
    document.body.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
};
document.getElementById("fontSizeBtn").addEventListener("click", 
    function(){
        fontSize +=2;
        paragrapgh.style.fontSize = fontSize + "px";

    });
    document.getElementById("toggleBtn").addEventListener("click", 
    function(){
        if (paragrapgh.style.display === "none"){
            paragrapgh.style.display = "block";
        }
        else{
            paragrapgh.style.direction= "none";
        }
        });

    document.getElementById("resetBtn").addEventListener("click", 
    function(){
        paragrapgh.style.display = "block";
        paragrapgh.style.fontSize = "16px";
        document.body.style.backgroundColor = "#f4f4f4";
        input.value = 16;
    });
        
        
