console.log( 'Script: GO' );

var makeMyDay = function() {
  $( 'projectArea' ).append( '' );
};

var wildCard = function(min, max) {
  return Math.random() * (max - min) + min;
};

$(document).on( 'click', '#generateProject', function(){
  $('body').append( '<div id = "projectArea"></div>' );
  $('body').append( '<div id = "buttonArea"></div>' );
  $( '#empGenDiv' ).append( '<button id = "empGen">Generate Employee</button>' );
  console.log( parseInt(wildCard(1,9)) );
});
