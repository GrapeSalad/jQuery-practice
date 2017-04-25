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

 $("button#dark-text").click(function(){
   $("body").removeClass();
   $("body").addClass("dark-text");
 });

 $("button#light-text").click(function(){
   $("body").removeClass();
   $("body").toggleClass("light-text");
 });

 $("button#toggle-text").click(function(){
   $("body").toggleClass("light-text");
   $("body").toggleClass("dark-text");
 });

});
