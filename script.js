
function sec(nomer) {
    input = document.getElementById("total").innerHTML;
    input = input + nomer;
    document.getElementById("total").innerHTML = input;

}

function mines() {
    input = document.getElementById("total").innerHTML;
    input = "-" + input;
    document.getElementById("total").innerHTML = input;
}

function pangkat() {
    input = document.getElementById("total").innerHTML;
    input = input * 1 / 100;
    document.getElementById("total").innerHTML = input;
}

function note() {
    input = document.getElementById("total").innerHTML
    input = input + "."
    document.getElementById("total").innerHTML = input;
}

function hapus(){
    document.getElementById("total").innerHTML = ""
}

function kali() {
    input = document.getElementById("total").innerHTML
    input =  input + "*"
    document.getElementById("total").innerHTML = input;
}

function bagi() {
    input = document.getElementById("total").innerHTML
    input =  input + "/"
    document.getElementById("total").innerHTML = input;
}
function kurang() {
    input = document.getElementById("total").innerHTML
    input =  input + "-"
    document.getElementById("total").innerHTML = input;

}
function tambah() {
    input = document.getElementById("total").innerHTML
    input =  input + "+"
    document.getElementById("total").innerHTML = input;

}



function cek() {
    if (isNaN(eval(hasil)) !== false) {
        alert("input bukan berisi angka")
    }
}

function hasil() {
    hasil = document.getElementById("total").innerHTML
    cek();
    document.getElementById("total").innerHTML = eval(hasil)

}