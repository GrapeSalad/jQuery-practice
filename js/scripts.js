$(document).ready(function() {
  $(".clickable").click(function(){
    $("#initially-showing").slideToggle();
    $("#initially-hidden").slideToggle();
  });

  $("button#green").click(function() {
   $("#color-background").removeClass();
   $("#color-background").addClass("green-background");
 });

 $("button#yellow").click(function() {
   $("#color-background").removeClass();
   $("#color-background").addClass("yellow-background");
 });

 $("button#red").click(function() {
   $("#color-background").removeClass();
   $("#color-background").addClass("red-background");
 });



});
