<template>
  <section class="tents">
    <div class="container">
      <SectionTitle>Наши шатры</SectionTitle>
      <div class="tents-grid">
        <div v-for="tent in tents" :key="tent.id" class="tent-card">
          <div class="tent-image">
            <img :src="tent.image" :alt="tent.name">
            <span class="tent-price">от {{ tent.price }} ₽/сутки</span>
          </div>
          <div class="tent-info">
            <h3 class="tent-name">{{ tent.name }}</h3>
            <p class="tent-description">{{ tent.description }}</p>
            <div class="tent-features">
              <span v-for="feature in tent.features" :key="feature" class="feature-badge">
                {{ feature }}
              </span>
            </div>
            <AppButton variant="primary" @click="handleBooking(tent.id)" class="booking-btn">
              Забронировать
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import AppButton from '@/components/common/AppButton.vue'

const router = useRouter()

const tents = [
  {
    id: 1,
    name: 'Лесной уют',
    price: 8500,
    description: 'Уютный шатер в сосновом лесу с панорамными окнами',
    features: ['2 спальных места', 'Wi-Fi', 'Душ', 'Отопление'],
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&w=400&h=300&fit=crop'
  },
  {
    id: 2,
    name: 'Озерный бриз',
    price: 12500,
    description: 'Шатер с видом на озеро, собственная терраса',
    features: ['4 спальных места', 'Джакузи', 'Кухня', 'Камин'],
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&w=400&h=300&fit=crop'
  },
  {
    id: 3,
    name: 'Семейный',
    price: 15000,
    description: 'Просторный шатер для большой компании',
    features: ['6 спальных мест', 'BBQ зона', 'Детская площадка', 'Сауна'],
    image: 'https://images.unsplash.com/photo-1497731809304-3bdeb9c642cf?ixlib=rb-4.0.3&w=400&h=300&fit=crop'
  }
]

const handleBooking = (id) => {
  router.push({ name: 'tents', query: { tentId: id } })
}
</script>

<style scoped>
.tents {
  padding: 5rem 0;
  background: var(--bg-light);
}

.tents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.tent-card {
  background: var(--bg-white);
  border-radius: 20px;
  overflow: hidden;
  transition: var(--transition);
  box-shadow: var(--shadow-sm);
}

.tent-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

.tent-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.tent-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.tent-card:hover .tent-image img {
  transform: scale(1.1);
}

.tent-price {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: var(--secondary-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
}

.tent-info {
  padding: 1.5rem;
}

.tent-name {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--primary-dark);
}

.tent-description {
  color: var(--text-light);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.tent-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.feature-badge {
  background: var(--bg-light);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  color: var(--primary-color);
}

.booking-btn {
  width: 100%;
}

@media (max-width: 768px) {
  .tents {
    padding: 3rem 0;
  }

  .tents-grid {
    grid-template-columns: 1fr;
  }

  .tent-image {
    height: 200px;
  }
}
</style>