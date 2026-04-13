<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <div class="container header-container">
      <router-link to="/" class="logo">
        <span class="logo-icon">⛺</span>
        <span class="logo-text">Glamping Forest</span>
      </router-link>

      <nav class="nav" :class="{ 'nav-active': mobileMenuOpen }">
        <router-link to="/" class="nav-link" @click="closeMenu">Главная</router-link>
        <router-link to="/tents" class="nav-link" @click="closeMenu">Шатры</router-link>
        <router-link to="/about" class="nav-link" @click="closeMenu">О нас</router-link>
        <router-link to="/contacts" class="nav-link" @click="closeMenu">Контакты</router-link>
        <AppButton @click="handleBooking" class="booking-btn-mobile">Забронировать</AppButton>
      </nav>

      <AppButton @click="handleBooking" class="booking-btn-desktop">Забронировать</AppButton>

      <button class="mobile-menu-btn" @click="toggleMenu" aria-label="Меню">
        <span class="menu-icon" :class="{ 'menu-icon-active': mobileMenuOpen }"></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import AppButton from './AppButton.vue'

const router = useRouter()
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleBooking = () => {
  router.push('/tents')
  closeMenu()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--bg-white);
  box-shadow: var(--shadow-sm);
  z-index: 1000;
  transition: var(--transition);
}

.header-scrolled {
  box-shadow: var(--shadow-md);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Playfair Display', serif;
}

.logo-icon {
  font-size: 2rem;
}

.logo-text {
  color: var(--primary-color);
}

.nav {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  font-weight: 500;
  transition: var(--transition);
  position: relative;
}

.nav-link:hover {
  color: var(--secondary-color);
}

.nav-link.router-link-active {
  color: var(--secondary-color);
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--secondary-color);
}

.booking-btn-desktop {
  display: block;
}

.booking-btn-mobile {
  display: none;
}

.mobile-menu-btn {
  display: none;
  width: 30px;
  height: 20px;
  position: relative;
  z-index: 1001;
}

.menu-icon {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 2px;
  background: var(--text-dark);
  transition: var(--transition);
}

.menu-icon::before,
.menu-icon::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: var(--text-dark);
  transition: var(--transition);
}

.menu-icon::before {
  top: -8px;
}

.menu-icon::after {
  bottom: -8px;
}

.menu-icon-active {
  background: transparent;
}

.menu-icon-active::before {
  top: 0;
  transform: rotate(45deg);
}

.menu-icon-active::after {
  bottom: 0;
  transform: rotate(-45deg);
}

@media (max-width: 768px) {
  .header-container {
    height: 70px;
  }

  .logo-text {
    display: none;
  }

  .logo-icon {
    font-size: 1.8rem;
  }

  .booking-btn-desktop {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 300px;
    height: 100vh;
    background: var(--bg-white);
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    transition: right 0.3s ease;
    box-shadow: var(--shadow-lg);
    z-index: 1000;
  }

  .nav-active {
    right: 0;
  }

  .nav-link {
    font-size: 1.2rem;
  }

  .booking-btn-mobile {
    display: block;
    margin-top: 1rem;
  }
}
</style>