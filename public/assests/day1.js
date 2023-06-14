//NAVIGATION
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
    }
    }
    
    
    
    
    
    
    
    
    
    
    
    //MODAL
    function openModal() {
    document.getElementById("myModal").style.display = "block";
    }
    
    function closeModal() {
    document.getElementById("myModal").style.display = "none";
    }
    
    var slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
    }


    var cost = parseInt($(".productPrice").html());
var name = $(".productName").html();
var price = parseInt($(".productPrice").html());

// hide cart content when there's no product in it
$(".button").hide();
$(".number").hide();
$(".remove").hide();

// function to add product to the cart and display it there
  $('.buy').click(function(){
        $(".product").text(name);                       // displays product name in the cart
        $(".selectedPrice").text("₹"+ cost);             // displays product price in the cart
    
       $("#total").text("Total cost: ₹");                 // displays "total cost" in the cart
       $("#cost").text(cost);                             // displays cost in the cart
       $(".selectedImage").attr("src", "https://cdn.shopify.com/s/files/1/0252/0904/5067/products/PrakharSangdhigata.png?v=1659946501");    // adds image in the cart
       
       // unhides/hides everything that was previously unhidden/hidden by pressing remove
       $(".selectedImage").show();                            
       $(".selectedPrice").show();                            
       $(".product").show();
       $("#cost").show();
       $("#total").show();
       $(".button").show();
       $(".number").show();
       $(".buy").hide();
       $(".empty").hide();
       $(".remove").show();



       // choosing number of products to be bought (+/-)
        $('.minus').click(function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                $input.val(count);

                $input.change();
                $("#cost").text(cost * count); // displays cost*no. of items
                return false;
      });

      $('.plus').click(function () {
          var $input = $(this).parent().find('input');

          var count = parseInt($input.val()) + 1;
          count = count < 1 ? 1 : count;
          $input.val(count);

          $input.change();
          $("#cost").text(cost * count);

          return false;
      });
  });

  //function to remove product from the cart
  $('.remove').click(function(){
      var $input = $('.input');
      $input.val(1); //sets value of number of products to 1

      //hides/unhides 
      $(".selectedImage").hide();
      $(".selectedPrice").hide();
      $(".empty").show();
      $("#cost").hide();
      $("#total").hide();
      $(".button").hide();
      $(".number").hide();
      $(".product").hide();
      $(".buy").show();
      $(".remove").hide();
  });

  //handling donation part
//   $(".denomination").click(function(event) {
//       $(".denomination").removeClass("selected").prop('checked', false);
//       $(".denomination-other input").removeClass("selected").val('');
//       $(this).addClass("selected");
//       $(this).children(":first").prop('checked', true);
//       $(".buttonDonate").text('Donate ₹' + $(this).children(":first").val())
//   });

//   $(".denomination-other input").on('keypress', function (event) {
    
//     var regex = new RegExp("^[0-9]+$");
//     var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
//     if (!regex.test(key)) {
//       event.preventDefault();
//       return false;
//     }
    
//     $(".denomination").removeClass("selected").prop('checked', false);
//     $(this).addClass("selected");
//     $(".buttonDonate").text('Donate ₹' + $(this).val() + key );
//   });

    // click counter (no. of products in the shopping cart)
    $('.buy').click(function() {
      $('#clickme').html(function(i, val) { return val*1+1 });
      
    });
    $('.remove').click(function() {
      $('#clickme').html(function(i, val) { return val*1-1 });
    });







      



