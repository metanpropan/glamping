<template>
  <section class="features">
    <div class="container">
      <SectionTitle>Почему выбирают нас</SectionTitle>
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/ui/SectionTitle.vue'

const features = [
  {
    icon: '🏕️',
    title: 'Комфортные шатры',
    description: 'Просторные шатры с отоплением, кондиционером и собственной террасой'
  },
  {
    icon: '🍽️',
    title: 'Ресторан на территории',
    description: 'Шеф-повар готовит блюда из фермерских продуктов'
  },
  {
    icon: '🔥',
    title: 'Костер и мангалы',
    description: 'Зоны для барбекю и вечерние посиделки у костра'
  },
  {
    icon: '🚿',
    title: 'Спа-зона',
    description: 'Сауна, хаммам и открытый подогреваемый бассейн'
  }
]
</script>

<style scoped>
.features {
  padding: 5rem 0;
  background: var(--bg-white);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  text-align: center;
  padding: 2rem;
  border-radius: 20px;
  transition: var(--transition);
  background: var(--bg-light);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--primary-dark);
}

.feature-description {
  color: var(--text-light);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .features {
    padding: 3rem 0;
  }

  .feature-card {
    padding: 1.5rem;
  }
}
</style>