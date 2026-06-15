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
// NAVBAR SCROLL EFFECT
// ============================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.premium-nav, .elegant-nav');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.classList.remove('transparent');
        } else {
            navbar.classList.remove('scrolled');
            navbar.classList.add('transparent');
        }
    }
});

// ============================================
// HAMBURGER MENU TOGGLE - DIPERBAIKI
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Cari hamburger dengan berbagai kemungkinan ID/class
    let hamburger = document.getElementById('hamburger');
    if (!hamburger) hamburger = document.querySelector('.hamburger');
    if (!hamburger) hamburger = document.querySelector('.hamburger-premium');
    
    let navWrapper = document.querySelector('.nav-menu-wrapper');
    
    console.log('Hamburger ditemukan:', hamburger);
    console.log('NavWrapper ditemukan:', navWrapper);
    
    if (hamburger && navWrapper) {
        // Hapus semua event listener lama dengan clone
        const newHamburger = hamburger.cloneNode(true);
        hamburger.parentNode.replaceChild(newHamburger, hamburger);
        hamburger = newHamburger;
        
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Hamburger diklik!');
            
            hamburger.classList.toggle('active');
            navWrapper.classList.toggle('active');
            
            if (navWrapper.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
                // Tutup semua dropdown saat menu ditutup
                document.querySelectorAll('.dropdown.active').forEach(d => {
                    d.classList.remove('active');
                });
            }
        });
        
        // Tutup menu saat klik link di dalam menu
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navWrapper.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    } else {
        console.error('Hamburger atau NavWrapper tidak ditemukan! Periksa HTML.');
    }
    
    // ============================================
    // DROPDOWN MOBILE
    // ============================================
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (toggle) {
            // Hapus event listener lama
            const newToggle = toggle.cloneNode(true);
            toggle.parentNode.replaceChild(newToggle, toggle);
            
            newToggle.addEventListener('click', function(e) {
                if (window.innerWidth <= 850) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    dropdowns.forEach(d => {
                        if (d !== dropdown && d.classList.contains('active')) {
                            d.classList.remove('active');
                        }
                    });
                    
                    dropdown.classList.toggle('active');
                }
            });
        }
    });
});

// ============================================
// HERO SLIDESHOW
// ============================================
const slidesClean = document.querySelectorAll('.hero-slide-clean');
const dotsClean = document.querySelectorAll('.dot-clean');
const prevBtnClean = document.querySelector('.slide-prev-clean');
const nextBtnClean = document.querySelector('.slide-next-clean');
let currentSlideClean = 0;
let slideIntervalClean;

function showSlideClean(index) {
    if (!slidesClean.length) return;
    if (index < 0) index = slidesClean.length - 1;
    if (index >= slidesClean.length) index = 0;
    
    slidesClean.forEach(slide => slide.classList.remove('active'));
    dotsClean.forEach(dot => dot.classList.remove('active'));
    
    slidesClean[index].classList.add('active');
    if (dotsClean[index]) dotsClean[index].classList.add('active');
    currentSlideClean = index;
}

function nextSlideClean() { showSlideClean(currentSlideClean + 1); resetIntervalClean(); }
function prevSlideClean() { showSlideClean(currentSlideClean - 1); resetIntervalClean(); }
function resetIntervalClean() { 
    clearInterval(slideIntervalClean); 
    slideIntervalClean = setInterval(() => showSlideClean(currentSlideClean + 1), 5000);
}

document.addEventListener('DOMContentLoaded', function() {
    if (slidesClean.length > 0) {
        showSlideClean(0);
        slideIntervalClean = setInterval(() => showSlideClean(currentSlideClean + 1), 5000);
    }
});

if (prevBtnClean && nextBtnClean && slidesClean.length > 0) {
    prevBtnClean.addEventListener('click', prevSlideClean);
    nextBtnClean.addEventListener('click', nextSlideClean);
    dotsClean.forEach((dot, index) => {
        dot.addEventListener('click', () => { showSlideClean(index); resetIntervalClean(); });
    });
}

// ============================================
// ABOUT SECTION SLIDESHOW
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
// CONTACT FORM - KIRIM KE WHATSAPP
// ============================================

const contactForm = document.getElementById('whatsappForm');
const whatsappNumber = '6282249581766'; // Nomor WA tujuan

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Ambil nilai dari form
        const nama = document.getElementById('nama').value;
        const wa = document.getElementById('wa').value;
        const email = document.getElementById('email').value;
        const tanggal = document.getElementById('tanggal').value;
        const paket = document.getElementById('paket').value;
        const peserta = document.getElementById('peserta').value;
        const pesan = document.getElementById('pesan').value;
        
        // Validasi wajib
        if (!nama || !wa || !tanggal) {
            alert('⚠️ Harap isi Nama, Nomor WhatsApp, dan Tanggal Keberangkatan!');
            return;
        }
        
        // Format tanggal ke Indonesia
        let formattedDate = '';
        if (tanggal) {
            const dateObj = new Date(tanggal);
            formattedDate = dateObj.toLocaleDateString('id-ID', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
        
        // Buat pesan WhatsApp dengan format rapi
        let message = `*📋 NEW BOOKING - Sumatra Happy Track Tour*%0A%0A`;
        message += `*────────────────────*%0A`;
        message += `*👤 DATA PELANGGAN*%0A`;
        message += `*────────────────────*%0A`;
        message += `*Nama Lengkap:* ${nama}%0A`;
        message += `*Nomor WhatsApp:* ${wa}%0A`;
        message += `*Email:* ${email || '-'}%0A%0A`;
        
        message += `*────────────────────*%0A`;
        message += `*📅 DETAIL PERJALANAN*%0A`;
        message += `*────────────────────*%0A`;
        message += `*Tanggal Keberangkatan:* ${formattedDate}%0A`;
        message += `*Paket Trekking:* ${paket || 'Belum dipilih'}%0A`;
        message += `*Jumlah Peserta:* ${peserta || '1'} orang%0A%0A`;
        
        message += `*────────────────────*%0A`;
        message += `*💬 PESAN*%0A`;
        message += `*────────────────────*%0A`;
        message += `${pesan || '-'}%0A%0A`;
        
        message += `*────────────────────*%0A`;
        message += `📞 *Butuh bantuan? Hubungi kami kembali*%0A`;
        message += `*────────────────────*%0A`;
        message += `_Pesan dikirim dari website Sumatra Happy Track Tour_`;
        
        // Redirect ke WhatsApp
        const waUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(waUrl, '_blank');
        
        // Feedback ke user
        alert('✅ Anda akan diarahkan ke WhatsApp. Silakan kirim pesan untuk melanjutkan booking!');
        
        // Reset form (opsional, komentar jika tidak ingin direset)
        // contactForm.reset();
    });
}

// ============================================
// GALLERY LIGHTBOX
// ============================================
const lightboxSlide = document.getElementById('lightbox-slide');
const lightboxImgSlide = document.getElementById('lightbox-img-slide');
const lightboxTitleSlide = document.getElementById('lightbox-title-slide');
const lightboxDescSlide = document.getElementById('lightbox-desc-slide');
const lightboxCloseSlide = document.querySelector('.lightbox-close-slide');

function openLightboxSlide(imgUrl, title, desc) {
    if (lightboxImgSlide) lightboxImgSlide.src = imgUrl;
    if (lightboxTitleSlide) lightboxTitleSlide.textContent = title;
    if (lightboxDescSlide) lightboxDescSlide.textContent = desc;
    if (lightboxSlide) lightboxSlide.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLightboxSlide() {
    if (lightboxSlide) lightboxSlide.style.display = 'none';
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
if (lightboxSlide) {
    lightboxSlide.addEventListener('click', function(e) {
        if (e.target === lightboxSlide) closeLightboxSlide();
    });
}
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightboxSlide && lightboxSlide.style.display === 'flex') {
        closeLightboxSlide();
    }
});

// ============================================
// FAQ ACCORDION
// ============================================
const faqItems = document.querySelectorAll('.faq-item-accordion');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question-accordion');
    if (question) {
        question.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    }
});

// ============================================
// WHATSAPP POPUP
// ============================================
const chatBtn = document.getElementById('chatWaBtn');
if (chatBtn) {
    chatBtn.addEventListener('click', () => {
        alert('Silakan pilih nomor WhatsApp:\n\n1. +62 822-4958-1766 (John - Senior Guide)\n2. +62 823-7478-0570 (Rina - Tour Coordinator)\n3. +62 813-6093-1471 (Budi - Reservation)');
    });
}

console.log('✅ Website siap digunakan!');

// ============================================
// HILANGKAN # DI URL SAAT SCROLL
// ============================================

// Untuk semua link yang menuju ke section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;
        
        const targetId = href.split('#')[1];
        const target = document.getElementById(targetId);
        
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Hapus # dari URL
            history.pushState(null, null, window.location.pathname);
        }
    });
});

// Untuk link yang mengandung index.html#something
document.querySelectorAll('a[href*="index.html#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').split('#')[1];
        const target = document.getElementById(targetId);
        
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Hapus # dari URL
            history.pushState(null, null, 'index.html');
        }
    });
});

// ============================================
// NONAKTIFKAN KLIK KANAN (TANPA PERINGATAN)
// ============================================

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

// Nonaktifkan F12 dan inspect element
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'u')) {
        e.preventDefault();
        return false;
    }
});

// ============================================
// COPY TO CLIPBOARD - UNTUK SEMUA TOMBOL COPY
// ============================================

// Fungsi untuk menampilkan notifikasi
function showCopyNotification(message) {
    // Hapus notifikasi lama jika ada
    const oldNotif = document.querySelector('.copy-notification');
    if (oldNotif) oldNotif.remove();
    
    // Buat notifikasi baru
    const notif = document.createElement('div');
    notif.className = 'copy-notification';
    notif.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    notif.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #2d5a3f;
        color: white;
        padding: 10px 20px;
        border-radius: 30px;
        font-size: 0.85rem;
        z-index: 10000;
        animation: fadeInOut 2s ease;
        white-space: nowrap;
        font-family: 'Comic Neue', cursive;
    `;
    document.body.appendChild(notif);
    
    // Hapus notifikasi setelah 2 detik
    setTimeout(() => {
        notif.remove();
    }, 2000);
}

// Style animasi untuk notifikasi
const copyStyle = document.createElement('style');
copyStyle.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translateX(-50%) translateY(20px); }
        15% { opacity: 1; transform: translateX(-50%) translateY(0); }
        85% { opacity: 1; transform: translateX(-50%) translateY(0); }
        100% { opacity: 0; transform: translateX(-50%) translateY(20px); }
    }
`;
document.head.appendChild(copyStyle);

// Fungsi copy ke clipboard
async function copyToClipboard(text, label) {
    try {
        await navigator.clipboard.writeText(text);
        showCopyNotification(`✅ ${label} berhasil disalin!`);
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
        showCopyNotification(`✅ ${label} berhasil disalin!`);
        return true;
    }
}

// Pasang event listener untuk semua tombol copy
document.addEventListener('DOMContentLoaded', function() {
    // Tombol copy dengan class .copy-btn
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(btn => {
        // Hapus event listener lama (clone & replace)
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        
        newBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const textToCopy = this.getAttribute('data-copy');
            const label = this.getAttribute('data-label') || 'Data';
            
            if (textToCopy) {
                copyToClipboard(textToCopy, label);
            } else {
                // Coba cari teks dari elemen sebelumnya
                const parentRow = this.closest('.info-row');
                if (parentRow) {
                    const textSpan = parentRow.querySelector('.info-text');
                    if (textSpan) {
                        copyToClipboard(textSpan.innerText, label);
                    }
                }
            }
        });
    });
    
    // Tombol copy WhatsApp (jika ada)
    const waCopyButtons = document.querySelectorAll('.copy-wa-btn');
    waCopyButtons.forEach(btn => {
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        
        newBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const number = this.getAttribute('data-number');
            if (number) {
                const displayNumber = number.replace(/^62/, '+62').replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3');
                copyToClipboard(displayNumber, 'Nomor WhatsApp');
            }
        });
    });
});

// ============================================
// FIX NAVIGATION LINKS ON ALL PAGES
// ============================================

document.querySelectorAll('.nav-menu a[href*="index.html#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        const currentPage = window.location.pathname.split('/').pop();
        
        // Jika sedang tidak di index.html
        if (currentPage !== 'index.html' && !currentPage.includes('index')) {
            e.preventDefault();
            // Simpan target section
            const targetSection = href.split('#')[1];
            // Redirect ke index.html dengan parameter
            window.location.href = `../index.html#${targetSection}`;
        }
    });
});

// Fungsi untuk scroll ke section saat halaman index dimuat dengan hash
if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
    const hash = window.location.hash;
    if (hash) {
        setTimeout(() => {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 500);
    }
}
