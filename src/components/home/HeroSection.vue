<template>
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <h1 class="hero-title">
        Отдых на природе<br>
        <span class="hero-highlight">с комфортом 5 звезд</span>
      </h1>
      <p class="hero-description">
        Уникальные шатры в окружении леса, полное уединение и все удобства для незабываемого отдыха
      </p>
      <div class="hero-buttons">
        <AppButton variant="primary" @click="handleBooking">Забронировать сейчас</AppButton>
        <AppButton variant="outline" @click="handleLearnMore">Узнать подробнее</AppButton>
      </div>
      <div class="hero-stats">
        <div class="stat-item">
          <div class="stat-number">50+</div>
          <div class="stat-label">шатров</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">1000+</div>
          <div class="stat-label">гостей</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">4.9</div>
          <div class="stat-label">рейтинг</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import AppButton from '@/components/common/AppButton.vue'

const router = useRouter()

const handleBooking = () => {
  router.push('/tents')
}

const handleLearnMore = () => {
  router.push('/about')
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #1e3a1f 0%, #2c5f2d 100%);
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3') center/cover;
  opacity: 0.2;
  mix-blend-mode: overlay;
}

.hero-content {
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  padding: 4rem 0;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  animation: fadeInUp 0.8s ease;
}

.hero-highlight {
  color: var(--accent-color);
}

.hero-description {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  opacity: 0.9;
  animation: fadeInUp 0.8s ease 0.2s both;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  animation: fadeInUp 0.8s ease 0.4s both;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  animation: fadeInUp 0.8s ease 0.6s both;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent-color);
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-top: 0.5rem;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .hero-stats {
    gap: 1.5rem;
  }

  .stat-number {
    font-size: 1.5rem;
  }
}
</style>