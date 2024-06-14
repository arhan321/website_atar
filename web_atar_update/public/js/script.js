//toggle class active
const headerExtra = document.querySelector('.header-extra');
headerExtra.classList.remove('active');

//Pada saat buregr menu di click
//di tambahin event event) => {
    // event.preventDefault() biar ga ke atas pas di klik hamburgeernya
document.querySelector('#hamburger').onclick = (event) => {
    event.preventDefault(); // Mencegah perilaku default dari link
    headerExtra.classList.toggle('active');
}; 

//clik di luar sidbar biar ga muncul side bar
const burger = document.querySelector ('hamburger');

document.addEventListener('click',function(e) {
    
    if(!hamburger.contains(e.target) &&!headerExtra.contains(e.target)) {
        headerExtra.classList.remove('active');
    }
    
});

//mencegah melihat source code 
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    
    // Menampilkan notifikasi
    const notification = new Notification('Klik Kanan Dinonaktifkan', {
      body: 'Klik kanan telah dinonaktifkan di halaman ini.'
    });
  });
  
      // Mencegah kombinasi tombol Ctrl + U
  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.key === "u") {
     e.preventDefault();
      showNotification();
       }
     });
  
   // Kode JavaScript yang dienkripsi dengan base64
   const encryptedCode = "ZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbigpIHsNCiAgICBhbGVydCgiUHJvdGVzdCBkYXRhYWJsZSIpOw0KICAgIGFsZXJ0KCJSaWdodC1jbGljayBpcyBkaXNhYmxlZC4gWW91IGNhbid0IHZpZXcgeW91ciBjb2RlIGFuZCBpbiBiaWRkb3V0aCBkYXRhYmFjayBhcHBsaWNhdGlvbnMgYW5kIGNoYWluIHRoaXMgc3RpdHMgd2hlbiBhIHNlcmllcyBhcHBsaWNhdGlvbiwgb3IgaW5kaWdlcnMgYW5kIGVuayB0aGVyZSBhcyBpdXMgYWxsIGludGVybmV0OyAiKTsNCn0=";
      
  // Dekripsi dan jalankan kode
   const decodedCode = atob(encryptedCode);
   eval(decodedCode);
  

document.getElementById("jsphone").querySelector("input[type=telfon]").oninput = function(event) {
    // Hanya membiarkan input angka
    this.value = this.value.replace(/\D/g, '');
};

