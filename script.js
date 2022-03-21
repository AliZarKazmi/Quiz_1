$(function () {
    
    loadData();
    $("#btn").on("click", loadData);
  });
function funbtn()
{
   var btn = document.getElementById("textarea").value;

  console.log(btn.value);

    var id =document.getElementById("output").innerHTML=btn + "                                 Thank you! for your suggestion.";

    console.log(id);
}
