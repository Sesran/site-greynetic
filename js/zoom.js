$(document).ready(function(){
    
// Get the modal
var modal = $('#myModal');

 // Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('.zoom');
var modalImg = $("#imgModal");
 // var captionText = document.getElementById("caption");
img.on("click", function(){
    modal.css("display", "block");
    modalImg.attr("src", this.src);
}); 
// onclick = function(){
//    modal.style.display = "block";
//    modalImg.src = this.src;
//    captionText.innerHTML = this.alt;
// }

// Get the <span> element that closes the modal


// When the user clicks on <span> (x), close the modal
modal.on('click',function(){
    modal.css("display","none");
});

modalImg.on('click', function(e){
    e.stopPropagation();
});


});
