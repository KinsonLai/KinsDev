var n = 0
var x = [];
var o = [];
var t = [];
var win = false;

function selected(p) {
    var o_sel = function(a) {
        t.push(a);
        o.push(a);
        document.getElementById(a).innerHTML = "O";
        document.getElementById(a).style.color = "black";
        document.getElementById("status").innerHTML = "X's turn";
        n = 0;
        console.log(o);
    }
    if (!t.includes(p) && !win) {
        if (n == 0) {
            t.push(p);
            x.push(p);
            document.getElementById(p).innerHTML = "X";
            document.getElementById(p).style.color = "black";
            document.getElementById("status").innerHTML = "O's turn";
            n = 1
            console.log(x);
            if (document.getElementById("ai").checked) {
                x.sort(function(a, b){return a-b});
                if (x.includes(1) && x.includes(2)) {
                    if (!t.includes(3)) {
                        o_sel(3);
                    } 
                }
                else if (x.includes(4) && x.includes(5)) {
                    if (!t.includes(6)) {
                        o_sel(6);
                    } 
                }
                else if (x.includes(7) && x.includes(8)) {
                    if (!t.includes(9)) {
                        o_sel(9);
                    } 
                }
                else if (x.includes(1) && x.includes(3)) {
                    if (!t.includes(2)) {
                        o_sel(2);
                    }
                    else if (!t.includes(5)) {
                        o_sel(5);
                    }
                    
                }
                else if (x.includes(7) && x.includes(9)) {
                    if (!t.includes(8)) {
                        o_sel(8);
                    } 
                }
                else if (!x.includes(1) && x.includes(3) && x.includes(5)) {
                    if (!t.includes(7)) {
                        o_sel(7);
                    } 
                }
                else if (!x.includes(3) && x.includes(1) && x.includes(5)) {
                    if (!t.includes(9)) {
                        o_sel(9);
                    } 
                }
                else if (x.includes(1) && x.includes(5) && x.includes(3)) {
                    if (!t.includes(7)) {
                        o_sel(7);
                    }
                    else if (t.includes(7) && t.includes(9)) {
                        for (let i = 1; i < 10; i++) {
                            if (!t.includes(i)) {
                                o_sel(i);
                                break;
                            }
                        }
                    }
                }
                else if (x.includes(1) && x.includes(4)) {
                    if (!t.includes(7)) {
                        o_sel(7);
                    } 
                }
                else if (x.includes(6) && x.includes(9)) {
                    if (!t.includes(3)) {
                        o_sel(3);
                    } 
                }
                else if (x.includes(5) && x.includes(8)) {
                    if (!t.includes(2)) {
                        o_sel(2);
                    } 
                }
                else if (x.includes(3) && x.includes(7)) {
                    if (!t.includes(1)) {
                        o_sel(1);
                    } 
                }
                else if (x.includes(4) && x.includes(6)) {
                    if (!t.includes(5)) {
                        o_sel(5);
                    } 
                }
                else if (x.includes(2) && x.includes(5)) {
                    if (!t.includes(8)) {
                        o_sel(8);
                    } 
                }
                else if (x.includes(3) && x.includes(6)) {
                    if (!t.includes(9)) {
                        o_sel(9);
                    } else {
                        for (let i = 1; i < 10; i++) {
                            if (!t.includes(i)) {
                                o_sel(i);
                                break;
                            }
                        }
                    }
                }
                else {
                    for (let i = 1; i < 10; i++) {
                        if (!t.includes(i)) {
                            o_sel(i);
                            break;
                        }
                    }
                }
            }
        }
        else if (n == 1) {
            if (!document.getElementById("ai").checked) {
                o_sel(p);
            }
            
        }

        x.sort(function(a, b){return a-b});
        o.sort(function(a, b){return a-b});
        t.sort(function(a, b){return a-b});

        if (x.includes(1) && x.includes(2) && x.includes(3) || x.includes(4) && x.includes(5) && x.includes(6)  || x.includes(7) && x.includes(8) && x.includes(9)  || x.includes(1) && x.includes(4) && x.includes(7) || x.includes(2) && x.includes(5) && x.includes(8) || x.includes(3) && x.includes(6) && x.includes(9) || x.includes(1) && x.includes(5) && x.includes(9) || x.includes(3) && x.includes(5) && x.includes(7)) {
            document.getElementById("status").innerHTML = "X wins !";
            win = true;
            document.getElementById("reset-button").style.display = "";
        }
        else if (o.includes(1) && o.includes(2) && o.includes(3) || o.includes(4) && o.includes(5) && o.includes(6)  || o.includes(7) && o.includes(8) && o.includes(9)  || o.includes(1) && o.includes(4) && o.includes(7) || o.includes(2) && o.includes(5) && o.includes(8) || o.includes(3) && o.includes(6) && o.includes(9) || o.includes(1) && o.includes(5) && o.includes(9) || o.includes(3) && o.includes(5) && o.includes(7)) {
            document.getElementById("status").innerHTML = "O wins !";
            win = true;
            document.getElementById("reset-button").style.display = "";
        }
        else if (t.length == 9) {
            document.getElementById("status").innerHTML = "Draw"
            win = true
            document.getElementById("reset-button").style.display = "";
        }
    }
}

function reset() {
    n = 0
    x = [];
    o = [];
    t = [];
    win = false;
    document.getElementById("status").innerHTML = "X's turn";
    var y = document.getElementsByClassName("grid-text");
    var i;
    for (i = 0; i < y.length; i++) {
        y[i].innerHTML = "";
        y[i].style.color = "lightblue";
    }
    document.getElementById("reset-button").style.display = "none";
}