// display the chart
$(function() {
  $('.chart').easyPieChart({
    size: 110,
    barColor: "#c35a53",
    scaleLength: 0,
    lineWidth: 10,
    trackColor: "#ccc",
    lineCap: "circle",
    animate: 2000,
  });
});

// Close displayed notice
window.onload = () => {
  document.getElementById('close-notice').onclick = function() {
    this.parentNode.remove()
    return false;
  };
};


// Toggle options and info pop ups

$(document).ready(function(){
  $("input#toggleCookieBanner").click(function(){
    $("#dropdown-options1").slideToggle(500);
    $(this).toggleClass("open");
  });

  $("input#togglePrivacyPolicy").click(function(){
    $("#dropdown-options2").slideToggle(500);
    $(this).toggleClass("open");
  });

  $("#toggleInfoWindow1").click(function(){
    $("#info-window1").slideToggle(500);
    $(this).toggleClass("open");
  });
  $("#toggleInfoWindow2").click(function(){
    $("#info-window2").slideToggle(500);
    $(this).toggleClass("open");
  });
  $("#toggleInfoWindow3").click(function(){
    $("#info-window3").slideToggle(500);
    $(this).toggleClass("open");
  });
});

// Dropdown with images
var langArray = [];
$('.bannerpicker option').each(function(){
  var img = $(this).attr("data-thumbnail");
  var text = this.innerText;
  var value = $(this).val();
  var item = '<li><img src="'+ img +'" alt="" value="'+value+'"/><span>'+ text +'</span></li>';
  langArray.push(item);
})

$('#a').html(langArray);

//Set the button value to the first el of the array
$('.btn-select').html(langArray[0]);
$('.btn-select').attr('value', 'top');

//change button stuff on click
$('#a li').click(function(){
   var img = $(this).find('img').attr("src");
   var value = $(this).find('img').attr('value');
   var text = this.innerText;
   var item = '<li><img src="'+ img +'" alt="" /><span>'+ text +'</span></li>';
  $('.btn-select').html(item);
  $('.btn-select').attr('value', value);
  $(".b").toggle();
  //console.log(value);
});

$(".btn-select").click(function(){
        $(".b").toggle();
    });

//check local storage for the lang
// var sessionLang = localStorage.getItem('lang');
// if (sessionLang){
//   //find an item with value of sessionLang
//   var langIndex = langArray.indexOf(sessionLang);
//   $('.btn-select').html(langArray[langIndex]);
//   $('.btn-select').attr('value', sessionLang);
// } else {
//    var langIndex = langArray.indexOf('ch');
//   console.log(langIndex);
//   $('.btn-select').html(langArray[langIndex]);
//   //$('.btn-select').attr('value', 'en');
// }


function myFunction() {
  document.getElementById("myForm").submit();
}
