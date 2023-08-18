const carousel = document.getElementById('carousel');
const contents = carousel.getElementsByClassName('content');
let currentIndex = 0;

function showContent(index) {
  currentIndex = index % contents.length;

  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = i === currentIndex ? 'flex' : 'none';
  }
}

function nextContent() {
  showContent(currentIndex + 1);
}

function prevContent() {
  showContent(currentIndex - 1);
}

// Tampilkan konten pertama saat halaman dimuat
showContent(currentIndex);

// Ganti konten setiap 5 detik
setInterval(nextContent, 5000);