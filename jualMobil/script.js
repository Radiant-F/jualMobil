var jualMobil = {
    iklan: function () {
        document.write(
            'Halo Bu, saya ' + this.nama + '. Menjual mobil merk ' + this.merkMobil + '. Mobil ini keluaran tahun ' + this.tahun, ', bekas.'
        );
    },
};

var mobil = Object.create(jualMobil);
mobil.nama = 'Tompel'
mobil.merkMobil = 'Avanza'
mobil.tahun = '2017'
console.log(mobil.iklan())