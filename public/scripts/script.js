// console.log('handshake');

var jokesOnScreen;

$(document).ready(function () {
  // console.log('using jquery');

  $('#addJoke').on('click', function () {
    // console.log('in joke click');

    var author = $('#authorInput').val();
    var joke = $('#jokeInput').val();
    var punchLine = $('#punchLineInput').val();

    if (author.length < 1  || joke.length < 1 || punchLine.length < 1) {
      alert('Tell a funny joke!');
    }else {
      var sendJoke = {
        whoseJoke: author,
        jokeQuestion: joke,
        punchLine: punchLine,
      };

      // console.log(sendJoke);
      $.ajax({
        url: '/jokes',
        type: 'POST',
        data: sendJoke,
        success: function (data) {
          // console.log('success return: ', data);
          displayJokes(data);
          clearFields();
        }, // end success
      }); // end ajax call
    } // end else
  }); // end on click
}); // end doc ready

var displayJokes = function (jokes) {
  // console.log('in displayJokes');
  $('#jokesOutput').empty();
  for (var i = 0; i < jokes.length; i++) {
    console.log(jokes.length);
    jokesOnScreen = '<h2>' + jokes[i].whoseJoke + '</h2><p>Joke :  ' +
    jokes[i].jokeQuestion + '</p><p>Punchline :  ' + jokes[i].punchLine + '</p>';
    $('#jokesOutput').append(jokesOnScreen);
  } // end for loop

  $('body').on('click', 'p', function () {
    console.log('in body paragraph click');
    $(this).next('p').fadeIn();
  }); // end body click
}; // end displayJokes

var clearFields = function () {
  console.log('in clearFields');
  $('#jokeInput').val('');
  $('#authorInput').val('');
  $('#punchLineInput').val('');
};
