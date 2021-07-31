player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " :   ";
document.getElementById("player2_name").innerHTML = player2_name + " :   ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player1_name;
document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2_name;

function sendWord(){
    getWord = document.getElementById("word_input").value;
    word = getWord.toLowerCase();
    console.log("Word in lowercase = " + word);

    charat1 = word.charAt(1);
    console.log(charat1);

    charat2 = word.charAt(Math.floor(word.length/2));
    console.log(charat2);

    charat3 = word.charAt(word.length - 1);
    console.log(charat3)

    remove_charat1 = word.replace(charat1, "_");
    remove_charat2 = remove_charat1.replace(charat2, "_");
    remove_charat3 = remove_charat2.replace(charat3, "_");
    console.log(remove_charat3);

    question = "<h4 id='word_display'>Q."+remove_charat3 +"</h4>";
    input="<br><input id='input_check_box' type='text'>";
    button = "<br><br><button class='btn btn-info' onclick='check()'> Check </button>";
    row = question + input + button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word_input").value = " ";
}

question_turn = "player1"
answer_turn = "player2"

function check(){
    getAnswer = document.getElementById("input_check_box").value;
    answer = getAnswer.toLowerCase();
    console.log("Answer in lower case " + answer);

    if(answer == word){

        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
            console.log(player1_score + " and " + player2_score);
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
            console.log(player2_score + " and " + player1_score);
        }
    }

    if(question_turn == "player1"){
        question_turn = "player2"
        document.getElementById("playerQuestion").innerHTML = "Question - " + player2_name;
    }
    else{
        question_turn = "player1"
        document.getElementById("playerQuestion").innerHTML = "Question - " + player1_name;
    }

    if(answer_turn == "player1"){
        answer_turn = "player2"
        document.getElementById("playerAnswer").innerHTML = "Answer - " + player2_name;
    }
    else{
        answer_turn = "player1"
        document.getElementById("playerAnswer").innerHTML = "Answer - " + player1_name;
    }

    document.getElementById("output").innerHTML = "";
}
