$(function () {
  console.log("ready!");

  // $("#tv-list").append("<li>New list item</li>");

  $.each(tv, function (index, value) {
    $("#tv-list").append("<li>" + value + "</li>");
  });
  $.each(movies, function (index, value) {
    $("#movies-list").append("<li>" + value + "</li>");
  });
  $.each(music, function (index, value) {
    $("#music-list").append("<li>" + value + "</li>");
  });
  $.each(games, function (index, value) {
    $("#games-list").append("<li>" + value + "</li>");
  });
});



const tv = ["Ozark", "I Think You Should Leave with Tim Robinson", "Attack on Titan", "Raptors and Pelicans Basketball"];

const movies = ["End of Evangelion", "The Green Knight", "Uncut Gems", "Parasite"];

const music = ["Tyler, the Creator", "Prince", "Ecco2K", "slowthai"];

const games = ["Halo Infinite", "Pokémon Legends: Arceus", "Persona 4 Golden", "Elden Ring"];
