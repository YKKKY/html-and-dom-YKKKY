function result() {
    var scores = 0;
    var yourClass = document.getElementsByName("class");
    var number = document.getElementsByName("number");
    var name = document.getElementsByName("username");

    if (yourClass[0].value === "") {
        alert("请输入班级：");
    }
    if (number[0].value === "") {
        alert("请输入学号：");
    }
    if (name[0].value === "") {
        alert("请输入姓名：");
    }
    else {
        var fill1 = document.getElementsByName("fill1");

        if (fill1[0].value == "统一建模语言") {
            scores += 15;
        }
        var fill2 = document.getElementsByName("fill2")
        if (fill2[0].value == "封装性、继承性、多态性") {
            scores += 15;
        }
        var choice1 = document.getElementsByName("radio-choice1");
        if (choice1[1].checked == true) {
            scores += 5;
        }
        var choice2 = document.getElementsByName("radio-choice2");
        if (choice1[0].checked == true) {
            scores += 5;
        }
        var multi_choice1 = document.getElementsByName("checkbox-choice1");
        if (multi_choice1[0].checked == true && mul_choice1[1].checked == true && mul_choice1[3].checked == true) {
            scores += 10;
        }
        var multi_choice2 = document.getElementsByName("checkbox-choice2");
        if (multi_choice2[0].checked == true && mul_choice2[1].checked == true && mul_choice2[2].checked == true) {
            scores += 10;
        }
        var judge1 = document.getElementsByName("judge1");
        if (judge1[1].checked == true) {
            scores += 10;
        }
        var judge2 = document.getElementsByName("judge2");
        if (judge1[0].checked == true) {
            scores += 10;
        }
        var shortAnswer = document.getElementsByName("shortAnswer");
        if (judge1[0].value == "模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形" +
            "式。可以是物理实体;可以是某种图形;或者是一种数学表达式。") {
            scores += 20;
        }
        var score = document.getElementsByName("score");
        score[0].value = scores;
    }
}