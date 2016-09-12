console.log('handshake');

$(document).ready(function () {
  console.log('using jquery');

  $('#addJoke').on('click', function () {

    console.log('in joke click');

    var author = $('#authorInput').val();
    var joke = $('#jokeInput').val();
    var punchLine = $('#punchLineInput').val();

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
      }, // end success
    }); // end ajax call
  }); // end on click
}); // end doc ready

var displayJokes = function (jokes) {
  console.log('in displayJokes');
  console.log(jokes[0]);
  for (var i = 0; i < jokes.length; i++) {
    $('#jokesOutput').append(jokes[0]);
  }
};
