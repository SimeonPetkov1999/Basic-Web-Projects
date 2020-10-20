var numberOfDrums = document.querySelectorAll(".drum").length;

for (let i = 0 ;i< numberOfDrums;i++) 
{
    document.querySelectorAll(".drum")[i].addEventListener("click", onClick);  
}




function onClick()
{
    alert("hello");
}