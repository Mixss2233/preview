// ============================================
// INITIALIZE AOS ANIMATION
// ============================================
AOS.init({
    duration: 800,
    once: false,
    offset: 100,
    easing: 'ease-in-out'
});

// ============================================
// NAVBAR ELEGAN - SCROLL EFFECT
// ============================================
const elegantNav = document.querySelector('.elegant-nav');

function handleNavbarScroll() {
    if (!elegantNav) return;
    if (window.scrollY > 50) {
        elegantNav.classList.add('scrolled');
        elegantNav.classList.remove('transparent');
    } else {
        elegantNav.classList.remove('scrolled');
        elegantNav.classList.add('transparent');
    }
}

window.addEventListener('scroll', handleNavbarScroll);
document.addEventListener('DOMContentLoaded', handleNavbarScroll);

// ============================================
// HAMBURGER MENU TOGGLE
// ============================================
const hamburger = document.querySelector('.hamburger');
const navMenuWrapper = document.querySelector('.nav-menu-wrapper');

if (hamburger && navMenuWrapper) {
    const toggleMenu = () => {
        hamburger.classList.toggle('active');
        navMenuWrapper.classList.toggle('active');
    };
    
    const closeMenu = () => {
        hamburger.classList.remove('active');
        navMenuWrapper.classList.remove('active');
    };
    
    hamburger.addEventListener('click', toggleMenu);
    
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

// ============================================
// HERO SLIDESHOW (FULL BERSIH) - LANGSUNG TAMPIL
// ============================================
const slidesClean = document.querySelectorAll('.hero-slide-clean');
const dotsClean = document.querySelectorAll('.dot-clean');
const prevBtnClean = document.querySelector('.slide-prev-clean');
const nextBtnClean = document.querySelector('.slide-next-clean');
let currentSlideClean = 0;
let slideIntervalClean;

// Slide pertama langsung ditampilkan
function showSlideClean(index) {
    if (!slidesClean.length) return;
    if (index < 0) index = slidesClean.length - 1;
    if (index >= slidesClean.length) index = 0;
    
    slidesClean.forEach(slide => {
        slide.classList.remove('active');
        // Hapus inline style opacity jika ada
        slide.style.opacity = '';
    });
    dotsClean.forEach(dot => dot.classList.remove('active'));
    
    slidesClean[index].classList.add('active');
    dotsClean[index].classList.add('active');
    currentSlideClean = index;
}

function nextSlideClean() { showSlideClean(currentSlideClean + 1); resetIntervalClean(); }
function prevSlideClean() { showSlideClean(currentSlideClean - 1); resetIntervalClean(); }

function resetIntervalClean() { 
    clearInterval(slideIntervalClean); 
    slideIntervalClean = setInterval(() => showSlideClean(currentSlideClean + 1), 5000);
}

// Pastikan slide pertama aktif saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    if (slidesClean.length > 0) {
        // Nonaktifkan semua slide dulu
        slidesClean.forEach(slide => slide.classList.remove('active'));
        // Aktifkan slide pertama
        slidesClean[0].classList.add('active');
        if (dotsClean[0]) dotsClean[0].classList.add('active');
        currentSlideClean = 0;
    }
});

if (prevBtnClean && nextBtnClean && slidesClean.length > 0) {
    prevBtnClean.addEventListener('click', prevSlideClean);
    nextBtnClean.addEventListener('click', nextSlideClean);
    dotsClean.forEach((dot, index) => {
        dot.addEventListener('click', () => { showSlideClean(index); resetIntervalClean(); });
    });
    slideIntervalClean = setInterval(() => showSlideClean(currentSlideClean + 1), 5000);
}

// ============================================
// ABOUT SECTION SLIDESHOW (GAMBAR 9:16)
// ============================================
const aboutSlides = document.querySelectorAll('.about-slide');
const aboutDots = document.querySelectorAll('.about-dot');
const aboutPrevBtn = document.querySelector('.about-slide-prev');
const aboutNextBtn = document.querySelector('.about-slide-next');
let currentAboutSlide = 0;
let aboutInterval;

function showAboutSlide(index) {
    if (!aboutSlides.length) return;
    if (index < 0) index = aboutSlides.length - 1;
    if (index >= aboutSlides.length) index = 0;
    
    aboutSlides.forEach(slide => slide.classList.remove('active'));
    aboutDots.forEach(dot => dot.classList.remove('active'));
    
    aboutSlides[index].classList.add('active');
    aboutDots[index].classList.add('active');
    currentAboutSlide = index;
}

function nextAboutSlide() { showAboutSlide(currentAboutSlide + 1); resetAboutInterval(); }
function prevAboutSlide() { showAboutSlide(currentAboutSlide - 1); resetAboutInterval(); }

function resetAboutInterval() { 
    clearInterval(aboutInterval); 
    aboutInterval = setInterval(() => showAboutSlide(currentAboutSlide + 1), 5000);
}

if (aboutPrevBtn && aboutNextBtn && aboutSlides.length > 0) {
    aboutPrevBtn.addEventListener('click', prevAboutSlide);
    aboutNextBtn.addEventListener('click', nextAboutSlide);
    aboutDots.forEach((dot, index) => {
        dot.addEventListener('click', () => { showAboutSlide(index); resetAboutInterval(); });
    });
    aboutInterval = setInterval(() => showAboutSlide(currentAboutSlide + 1), 5000);
}

// ============================================
// CLICK ANIMATION FOR CARDS
// ============================================
const clickableCards = document.querySelectorAll('.gallery-card, .team-card, .activity-card, .testimonial-card, .faq-item, .transport-card, .accom-card');

clickableCards.forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('h3')?.innerText || this.querySelector('span')?.innerText || 'Info';
        alert(`✨ ${title} ✨\n\nTemukan petualangan seru bersama Sumatra Happy Track Tour!\nHubungi kami untuk informasi lebih lanjut.`);
        this.style.transform = 'scale(0.98)';
        setTimeout(() => { this.style.transform = ''; }, 200);
    });
});

// ============================================
// CONTACT FORM HANDLER
// ============================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
        btn.disabled = true;
        
        setTimeout(() => {
            alert('✅ Terima kasih! Pesan Anda akan segera kami respon via WhatsApp.\n\nTim Sumatra Happy Track Tour akan menghubungi Anda dalam 1x24 jam.');
            this.reset();
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 1000);
    });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS (TANPA # DI URL)
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;
        
        let targetId = href;
        if (href.includes('#')) {
            targetId = href.split('#')[1];
        }
        
        const target = document.getElementById(targetId);
        if (target) {
            // Scroll ke target
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Hapus semua # dari URL tanpa reload
            const cleanUrl = window.location.pathname + window.location.search;
            history.pushState(null, null, cleanUrl);
        }
    });
});

// Untuk link yang mengandung index.html#something
document.querySelectorAll('a[href*="index.html#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        const targetId = href.split('#')[1];
        
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Hapus semua # dari URL
            const cleanUrl = window.location.pathname + window.location.search;
            history.pushState(null, null, cleanUrl);
        }
    });
});

// Untuk link paket.html dan lainnya (biarkan normal)
document.querySelectorAll('a[href*=".html"]:not([href*="#"])').forEach(anchor => {
    // Biarkan berfungsi normal
});

console.log('✅ Website Sumatra Happy Track Tour siap digunakan!');

// ============================================
// GALLERY SLIDE - TEKS DARI KANAN KE KIRI
// ============================================

const lightboxSlide = document.getElementById('lightbox-slide');
const lightboxImgSlide = document.getElementById('lightbox-img-slide');
const lightboxTitleSlide = document.getElementById('lightbox-title-slide');
const lightboxDescSlide = document.getElementById('lightbox-desc-slide');
const lightboxCloseSlide = document.querySelector('.lightbox-close-slide');

function openLightboxSlide(imgUrl, title, desc) {
    lightboxImgSlide.src = imgUrl;
    lightboxTitleSlide.textContent = title;
    lightboxDescSlide.textContent = desc;
    lightboxSlide.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLightboxSlide() {
    lightboxSlide.style.display = 'none';
    document.body.style.overflow = '';
}

document.querySelectorAll('.slide-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const imgUrl = btn.getAttribute('data-img');
        const title = btn.getAttribute('data-title');
        const desc = btn.getAttribute('data-desc');
        openLightboxSlide(imgUrl, title, desc);
    });
});

if (lightboxCloseSlide) {
    lightboxCloseSlide.addEventListener('click', closeLightboxSlide);
}

lightboxSlide.addEventListener('click', function(e) {
    if (e.target === lightboxSlide) {
        closeLightboxSlide();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightboxSlide.style.display === 'flex') {
        closeLightboxSlide();
    }
});

console.log('✅ Gallery slide siap!');

// ============================================
// FAQ ACCORDION - PANAH & JAWABAN
// ============================================

const faqItems = document.querySelectorAll('.faq-item-accordion');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question-accordion');
    
    question.addEventListener('click', () => {
        // Tutup semua FAQ lain (opsional, untuk solo open)
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle active pada item yang diklik
        item.classList.toggle('active');
    });
});

// ============================================
// CONTACT FORM - KIRIM KE WHATSAPP
// ============================================

const whatsappForm = document.getElementById('whatsappForm');
const waNumber = '6282249581766'; // Nomor WhatsApp tujuan

if (whatsappForm) {
    whatsappForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Ambil nilai dari form
        const nama = document.getElementById('nama').value;
        const wa = document.getElementById('wa').value;
        const email = document.getElementById('email').value;
        const tanggal = document.getElementById('tanggal').value;
        const paket = document.getElementById('paket').value;
        const peserta = document.getElementById('peserta').value;
        const pesan = document.getElementById('pesan').value;
        
        // Validasi
        if (!nama || !wa || !tanggal) {
            alert('⚠️ Harap isi Nama, Nomor WhatsApp, dan Tanggal Keberangkatan!');
            return;
        }
        
        // Format tanggal
        const formattedDate = tanggal ? new Date(tanggal).toLocaleDateString('id-ID') : '';
        
        // Buat pesan WhatsApp
        let message = `*📞 NEW BOOKING - Sumatra Happy Track Tour*%0A%0A`;
        message += `*👤 Nama:* ${nama}%0A`;
        message += `*📱 WhatsApp:* ${wa}%0A`;
        message += `*📧 Email:* ${email || '-'}%0A`;
        message += `*📅 Tanggal Keberangkatan:* ${formattedDate}%0A`;
        message += `*🎒 Paket:* ${paket || 'Belum dipilih'}%0A`;
        message += `*👥 Jumlah Peserta:* ${peserta} orang%0A`;
        message += `*💬 Pesan:* ${pesan || '-'}%0A%0A`;
        message += `_Pesan dikirim dari website Sumatra Happy Track Tour_`;
        
        // Redirect ke WhatsApp
        const waUrl = `https://wa.me/${waNumber}?text=${message}`;
        window.open(waUrl, '_blank');
        
        // Feedback
        alert('✅ Anda akan diarahkan ke WhatsApp. Silakan kirim pesan untuk melanjutkan booking!');
        
        // Reset form (opsional)
        // whatsappForm.reset();
    });
}

// ============================================
// WHATSAPP POPUP & COPY NOMOR
// ============================================

// Data nomor WhatsApp
const waNumbersList = [
    { number: '6282249581766', display: '+62 822-4958-1766', name: 'John - Senior Guide' },
    { number: '6282374780570', display: '+62 823-7478-0570', name: 'Rina - Tour Coordinator' },
    { number: '6281360931471', display: '+62 813-6093-1471', name: 'Budi - Reservation' }
];

// Buat elemen popup
function createPopup() {
    const popup = document.createElement('div');
    popup.className = 'popup-overlay';
    popup.id = 'waPopup';
    popup.innerHTML = `
        <div class="popup-wa-card">
            <div class="popup-header">
                <i class="fab fa-whatsapp"></i>
                <h3>Pilih Nomor WhatsApp</h3>
                <p>Pilih salah satu admin untuk chat</p>
            </div>
            <div class="popup-body">
                ${waNumbersList.map(wa => `
                    <div class="popup-wa-option" data-number="${wa.number}">
                        <div class="wa-option-info">
                            <i class="fab fa-whatsapp"></i>
                            <span>${wa.display}</span>
                        </div>
                        <div class="wa-option-arrow">
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>
                `).join('')}
                <button class="popup-close">Tutup</button>
            </div>
        </div>
    `;
    document.body.appendChild(popup);
    return popup;
}

// Tampilkan popup
function showPopup() {
    let popup = document.getElementById('waPopup');
    if (!popup) {
        popup = createPopup();
    }
    popup.classList.add('active');
}

// Tutup popup
function closePopup() {
    const popup = document.getElementById('waPopup');
    if (popup) {
        popup.classList.remove('active');
    }
}

// Buka WhatsApp dengan nomor tertentu
function openWhatsApp(number) {
    const message = `Halo, saya tertarik dengan paket trekking Sumatra Happy Track Tour. Apakah bisa dibantu?`;
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Copy nomor ke clipboard
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        alert(`✅ Nomor ${text} berhasil disalin!`);
    } catch (err) {
        // Fallback
        const input = document.createElement('input');
        input.value = text;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        alert(`✅ Nomor ${text} berhasil disalin!`);
    }
}

// Event listener untuk tombol Chat Sekarang
const chatBtn = document.getElementById('chatWaBtn');
if (chatBtn) {
    chatBtn.addEventListener('click', showPopup);
}

// Event listener untuk tombol copy
document.querySelectorAll('.copy-wa-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const number = btn.getAttribute('data-number');
        const displayNumber = number.replace(/^62/, '+62').replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3');
        await copyToClipboard(displayNumber);
    });
});

// Event delegation untuk popup options dan close
document.body.addEventListener('click', (e) => {
    // Pilih opsi WA
    if (e.target.closest('.popup-wa-option')) {
        const option = e.target.closest('.popup-wa-option');
        const number = option.getAttribute('data-number');
        openWhatsApp(number);
        closePopup();
    }
    
    // Tombol tutup
    if (e.target.classList.contains('popup-close')) {
        closePopup();
    }
    
    // Klik overlay (background)
    if (e.target.classList.contains('popup-overlay')) {
        closePopup();
    }
});

// Tutup popup dengan tombol ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePopup();
    }
});

// ============================================
// COPY TO CLIPBOARD - SEMUA KONTAK
// ============================================

// Fungsi show toast notifikasi
function showToast(message) {
    // Hapus toast lama jika ada
    const oldToast = document.querySelector('.copy-toast');
    if (oldToast) oldToast.remove();
    
    const toast = document.createElement('div');
    toast.className = 'copy-toast';
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 2000);
}

// Fungsi copy ke clipboard
async function copyToClipboardModern(text) {
    try {
        await navigator.clipboard.writeText(text);
        showToast(`✅ "${text.substring(0, 30)}${text.length > 30 ? '...' : ''}" berhasil disalin!`);
        return true;
    } catch (err) {
        // Fallback untuk browser lama
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`✅ "${text.substring(0, 30)}${text.length > 30 ? '...' : ''}" berhasil disalin!`);
        return true;
    }
}

// Event listener untuk semua tombol copy
document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const textToCopy = btn.getAttribute('data-copy');
        if (textToCopy) {
            await copyToClipboardModern(textToCopy);
        }
    });
});

// Update fungsi copy untuk WA numbers (jika ada class berbeda)
document.querySelectorAll('.copy-wa-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const number = btn.getAttribute('data-number');
        const displayNumber = number.replace(/^62/, '+62').replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3');
        await copyToClipboardModern(displayNumber);
    });
});

console.log('✅ Copy button siap digunakan!');

// ============================================
// DROPDOWN NAVBAR - MOBILE HANDLER
// ============================================

// Handle dropdown untuk mobile (saat hamburger aktif)
function initMobileDropdown() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        
        toggle.addEventListener('click', (e) => {
            // Hanya untuk layar mobile
            if (window.innerWidth <= 850) {
                e.preventDefault();
                e.stopPropagation();
                
                // Tutup dropdown lain
                dropdowns.forEach(d => {
                    if (d !== dropdown && d.classList.contains('active')) {
                        d.classList.remove('active');
                    }
                });
                
                // Toggle dropdown yang diklik
                dropdown.classList.toggle('active');
            }
        });
    });
}

// Inisialisasi
if (document.querySelector('.dropdown')) {
    initMobileDropdown();
}

// Reset dropdown saat resize ke desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 850) {
        const dropdowns = document.querySelectorAll('.dropdown.active');
        dropdowns.forEach(d => d.classList.remove('active'));
    }
});

// Tutup dropdown saat klik di luar (untuk mobile)
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 850) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown.active').forEach(d => {
                d.classList.remove('active');
            });
        }
    }
});