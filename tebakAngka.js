var mainLagi = true;
var kesempatan = 3;

while(mainLagi){
    alert("Selamat datang di Permainan Tebak Angka\nTebak angka 1-10");

    while(kesempatan!=0){
        var pilPlayer = parseInt(prompt("Kesempatan kamu sisa: "+ kesempatan +"\nMasukkan angka tebakan:"));
        var comp = Math.floor(Math.random()*10)+1;
        var hasil;

        if(pilPlayer !== comp){
            if (pilPlayer > comp){
                hasil = "Nilai terlalu tinggi";
                kesempatan = kesempatan - 1;
            }
            else{
                hasil = "Nilai terlalu rendah";
                kesempatan = kesempatan - 1;
            }
        }
        else{
            hasil = "Tebakan Kamu Benar!";
            break;
        }
        alert(hasil);
    }

    alert("Player: " + pilPlayer + "\nComputer: " + comp + "\nHasil: "+ hasil); 
    //Main Lagi
    mainLagi = confirm("Mau main lagi?")
}

alert("Terima kasih sudah bermain!")

