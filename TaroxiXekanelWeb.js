  function randomNumb(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function taroxiXekanel(maxDraws) {
    //setting the stage, the things to be manipulated
    var a = 0;
    const cards = [" 0 - The Eclipse"," 1:1 - The Sun"," 1:2 - The Serpent"," 1:3 - The Lover"," 2:1 - The Waters"," 2:2 - The Earth"," 2:3 - The Fires"," 3:1 - The Sword"," 3:2 - The Mark"," 3:3 - The Work"," 4:1 - The Hierophant"," 4:2 - The Hermit"," 4:3 - The High Priestess"];
    const result = [];
    var trueDraws = randomNumb(0,maxDraws)
    //adding random cards to the result
    while (a < maxDraws) {
      var drawing = randomNumb(0,12);
      // makes sure the same card isn't drawn twice
      if (result.includes(cards[drawing])) {
      } else {
        result.push(cards[drawing]);
      }
      a = a + 1;
    }
    alert(result);
  }