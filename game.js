const startWord = () => {
  let myword = document.getElementById("myword").value;
  let word = document.getElementById("word").innerText;

  let lastword = word[word.length - 1];
  let firstword = myword[0];

  if (firstword === lastword) {
    document.getElementById("result").innerText = "딩동댕!";
    document.getElementById("word").innerText = myword;
    document.getElementById("myword").value = "";
  } else {
    document.getElementById("result").innerText = "땡!";
    document.getElementById("myword").value = "";
  }
};

const lotto = () => {
  let board = document.getElementById("number__box");
  board.innerHTML = "";
  var lotto = [];
  for (var i = 0; i < 6; i++) {
    var num = Math.floor(Math.random() * 45) + 1;

    for (var j in lotto) {
      while (num == lotto[j]) {
        num = Math.floor(Math.random() * 45) + 1;
      }
    }

    lotto.push(num);
  }

  lotto.sort(function (a, b) {
    return a - b;
  });

  lotto.map((num) => {
    var p = document.createElement("span");
    p.innerHTML = num;
    board.appendChild(p);
  });
};
