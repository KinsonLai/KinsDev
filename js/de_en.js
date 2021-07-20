function start_convert() {
    const en_code = {
        "a" : "c",
        "b" : "d",
        "c" : "e",
        "d" : "f",
        "e" : "g",
        "f" : "h",
        "g" : "i",
        "h" : "j",
        "i" : "k",
        "j" : "l",
        "k" : "m",
        "l" : "n",
        "m" : "o",
        "n" : "p",
        "o" : "q",
        "p" : "r",
        "q" : "s",
        "r" : "t",
        "s" : "u",
        "t" : "v",
        "u" : "w",
        "v" : "x",
        "w" : "y",
        "x" : "z",
        "y" : "a",
        "z" : "b",
        " " : " ",
        "A" : "C",
        "B" : "D",
        "C" : "E",
        "D" : "F",
        "E" : "G",
        "F" : "H",
        "G" : "I",
        "H" : "J",
        "I" : "K",
        "J" : "L",
        "K" : "M",
        "L" : "N",
        "M" : "O",
        "N" : "P",
        "O" : "Q",
        "P" : "R",
        "Q" : "S",
        "R" : "T",
        "S" : "U",
        "T" : "V",
        "U" : "W",
        "V" : "X",
        "W" : "Y",
        "X" : "Z",
        "Y" : "A",
        "Z" : "B",
    }

    var de_code = {
        "c" : "a",
        "d" : "b",
        "e" : "c",
        "f" : "d",
        "g" : "e",
        "h" : "f",
        "i" : "g",
        "j" : "h",
        "k" : "i",
        "l" : "j",
        "m" : "k",
        "n" : "l",
        "o" : "m",
        "p" : "n",
        "q" : "o",
        "r" : "p",
        "s" : "q",
        "t" : "r",
        "u" : "s",
        "v" : "t",
        "w" : "u",
        "x" : "v",
        "y" : "w",
        "z" : "x",
        "a" : "y",
        "b" : "z",
        " " : " ",
        "C" : "A",
        "D" : "B",
        "E" : "C",
        "F" : "D",
        "G" : "E",
        "H" : "F",
        "I" : "G",
        "J" : "H",
        "K" : "I",
        "L" : "J",
        "M" : "K",
        "N" : "L",
        "O" : "M",
        "P" : "N",
        "Q" : "O",
        "R" : "P",
        "S" : "Q",
        "T" : "R",
        "U" : "S",
        "V" : "T",
        "W" : "U",
        "X" : "V",
        "Y" : "W",
        "Z" : "X",
        "A" : "Y",
        "B" : "Z",
    }
    var encode = document.getElementById("encode").value;
    var decode = document.getElementById("decode").value;
    var e = "";
    var d = "";
    if (encode !== "") {
        for (i = 0; i < encode.length; i++) {
            e += en_code[encode.charAt(i)];
            console.log(en_code[encode.charAt(i)]);
        }
        document.getElementById("output").innerHTML = e;
        document.getElementById("encode").value = "";
    }
    else {
        for (i = 0; i < decode.length; i++) {
            e += de_code[decode.charAt(i)];
            console.log(de_code[decode.charAt(i)]);
        }
        document.getElementById("output").innerHTML = e;
        document.getElementById("decode").value = "";
    }
}