$(document).ready(function() {
  $("#wordInput").submit(function(event) {
      var puzzleLetters = "";
      var puzzle = $("input#puzzleWord").val();
        for(char=0; char <= (puzzle.length - 1); char +=1) {
          var puzzleChar = puzzle.slice(char, (char+1));
            if (puzzleChar != "a" && puzzleChar !="e" && puzzleChar !="i" && puzzleChar != "o" && puzzleChar != "u"){
              puzzleLetters += puzzleChar;
            // puzzleLetters.push(puzzleChar);
          } else {
              puzzleLetters += "-";
            // puzzleLetters.push("-");
          }
        }
          var puzzleString = puzzleLetters.toString();
          alert(typeof(puzzleString))
          $(".puzzleOut").text(puzzleString);

        //   // if (puzzleChar === vowels.find()) {
        //   //   puzzleChar = "";
        //   // } else {
        // };



    event.preventDefault();
  });
});
