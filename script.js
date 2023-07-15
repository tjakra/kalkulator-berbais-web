var iskoma = false
var isoprator = false
var ismines = false
var isnull =false
var jumlah

// input nomer
function num(nomer){
    input = document.getElementById("total").innerHTML

    if(isoprator && isnull){
        cek = input.substring(jumlah.length, input.length)
        if(cek >= 1){
            isi = input + nomer
            document.getElementById("total").innerHTML = isi
        }
        else {
            isidi = input.substring(0,input.length-1)
            isi = isidi + nomer
            document.getElementById("total").innerHTML = isi
            isnull = false
        }
    }
    else if(ismines && input.substring(1,2) == 0){
        isi = "-"+nomer
        document.getElementById("total").innerHTML = isi
        ismines = false
        console.log("true")
    }
    else if(iskoma||input.substring(0, 2) != 0){
        isi = input+nomer
        document.getElementById("total").innerHTML = isi
        isnull = false
    }
    else{
        isi = nomer
        document.getElementById("total").innerHTML = isi
    }
}

// reset variable
function resetvar(){
    iskoma = false
    isoprator = false
    ismines = false
    isnull = false
}

// hapus semua
function hapus(){
    document.getElementById("total").innerHTML = "0"
    resetvar()
}

// hapus sebagian
function delpart(){
    input = document.getElementById("total").innerHTML
    if(input.length == 1){
        document.getElementById("total").innerHTML = 0
    }
    else{
        isi = input.substring(0,input.length - 1)
        document.getElementById("total").innerHTML = isi
        iskoma = false
        isnull = false
        ismines = false
    }
}

// oprator
function oprator(value){
    input = document.getElementById("total").innerHTML
    cek = input.substring(input.length -1, input.length) 
    if(cek == '*'|| cek == '+'|| cek == '-'|| cek == '/'){
        isidi = jumlah.substring(0,jumlah.length-1)
        isi = isidi + value
        console.log(jumlah)
        document.getElementById("total").innerHTML = isi
        jumlah = input.substring(0, input.length - 1) +value
        isoprator = true
        isnull = false
        iskoma= false
        return isoprator,jumlah
    }else{
        isi = input+ value
        document.getElementById("total").innerHTML = isi
        jumlah = input.substring(0, input.length)+ value
        isoprator = true
        isnull = false
        iskoma = false
        return isoprator,jumlah
    }
}

function mines(){
    input = document.getElementById("total").innerHTML
    if(isoprator){
        cek = jumlah.substring(jumlah.length -1, jumlah.length)
        if(cek == '-'){
            console.log("already mines");
        }
        else if(cek == '*'|| cek == '+'|| cek == '/'){
            console.log(jumlah)
            ceks = input.substring(jumlah.length, input.length)
            update = ceks.substring(0,1)
            if(update == "-"){
                isidi = input.substring(jumlah.length +1,input.length)
                isi = jumlah + isidi
                ismines = false
                document.getElementById("total").innerHTML = isi
                console.log("sudah mines")
            }
            else{
                ismines = false
                isidi = input.substring(jumlah.length, input.length)
                isi = jumlah + "-" + isidi
                document.getElementById("total").innerHTML = isi
            }
        }
    }
    else if(ismines){
        isi = input.substring(1, input.length)
        document.getElementById("total").innerHTML = isi
        ismines = false
    }
    else{
        ismines = true
        isi = "-"+input
        document.getElementById("total").innerHTML = isi
    }
}

function koma(){
    input = document.getElementById("total").innerHTML
    if(iskoma){

    }
    else if(isoprator && input.length == jumlah.length){
        isi = input + "0."
        document.getElementById("total").innerHTML = isi
        isnull = false
        iskoma = true
    }
    else{
        isi = input+"."
        document.getElementById("total").innerHTML = isi
        iskoma = true
        isnull = false
    }
}


// proses perhitungan
function hasil(){
    input = document.getElementById("total").innerHTML
    cek = input.substring(input.length -1, input.length)
    if(cek == '*'|| cek == '+'|| cek == '-'|| cek == '/'){
        isi = input.substring(0, input.length -1)
        console.log(isi)
        document.getElementById("total").innerHTML = eval(isi)
        resetvar()
    }
    else{
        console.log(jumlah)
        console.log(input)
        document.getElementById("total").innerHTML = eval(input)
        resetvar()
    }
}