document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");
    var header = document.querySelector('header'); 
    

    var imgs = document.querySelectorAll('.expandable');

    imgs.forEach(function(img) {
        img.onclick = function() {
            header.classList.add('hidden');
            
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        };
    });

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        header.classList.remove('hidden');
        
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            header.classList.remove('hidden');
            
            modal.style.display = "none";
        }
    };

    modal.addEventListener('touchend', function(event) {
        modal.style.display = 'none';
        header.classList.remove('hidden');
    });
});
