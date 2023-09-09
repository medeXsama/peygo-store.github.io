// INI POP UP
// Mendapatkan elemen pop up
var popup = document.getElementById("myPopup");
  
// Mendapatkan elemen body
var body = document.getElementsByTagName("body")[0];

// Memunculkan pop up saat halaman dimuat
window.onload = function() {
  popup.style.display = "block";
}

// Menyembunyikan pop up saat di-klik di luar pop up
body.onclick = function(e) {
  if (e.target !== popup) {
    popup.style.display = "none";
  }
}

// INI ALERT BUTTON ORDER
function showOrderNotification() {
    alert("Peygo Store : Berhasil di order✓");
}
