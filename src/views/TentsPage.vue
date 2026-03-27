<template>
  <div class="tents-page">
    <div class="container">
      <h1 class="page-title">Наши шатры</h1>
      <p class="page-description">Выберите идеальный вариант для вашего отдыха</p>

      <div class="filters">
        <button
            v-for="filter in filters"
            :key="filter"
            :class="['filter-btn', { active: selectedFilter === filter }]"
            @click="selectedFilter = filter"
        >
          {{ filter }}
        </button>
      </div>

      <div class="tents-grid">
        <div v-for="tent in filteredTents" :key="tent.id" class="tent-card">
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
            <div class="tent-actions">
              <AppButton variant="primary" @click="openBookingModal(tent)">
                Забронировать
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </div>

    <BookingModal
        v-if="showModal"
        :tent="selectedTent"
        @close="closeModal"
        @book="handleBooking"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import AppButton from '@/components/common/AppButton.vue'
import BookingModal from '@/components/BookingModal.vue'

const route = useRoute()
const selectedFilter = ref('Все')
const showModal = ref(false)
const selectedTent = ref(null)

const filters = ['Все', 'Для двоих', 'Семейные', 'Люкс']

const tents = [
  {
    id: 1,
    name: 'Лесной уют',
    price: 8500,
    description: 'Уютный шатер в сосновом лесу с панорамными окнами',
    features: ['2 спальных места', 'Wi-Fi', 'Душ', 'Отопление'],
    category: 'Для двоих',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&w=400&h=300&fit=crop'
  },
  {
    id: 2,
    name: 'Озерный бриз',
    price: 12500,
    description: 'Шатер с видом на озеро, собственная терраса',
    features: ['4 спальных места', 'Джакузи', 'Кухня', 'Камин'],
    category: 'Семейные',
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&w=400&h=300&fit=crop'
  },
  {
    id: 3,
    name: 'Семейный',
    price: 15000,
    description: 'Просторный шатер для большой компании',
    features: ['6 спальных мест', 'BBQ зона', 'Детская площадка', 'Сауна'],
    category: 'Семейные',
    image: 'https://images.unsplash.com/photo-1497731809304-3bdeb9c642cf?ixlib=rb-4.0.3&w=400&h=300&fit=crop'
  },
  {
    id: 4,
    name: 'Премиум Виста',
    price: 25000,
    description: 'Эксклюзивный шатер с панорамным видом и личным поваром',
    features: ['4 спальных места', 'Личный повар', 'Спа-зона', 'Бассейн'],
    category: 'Люкс',
    image: 'https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?ixlib=rb-4.0.3&w=400&h=300&fit=crop'
  }
]

const filteredTents = computed(() => {
  if (selectedFilter.value === 'Все') return tents
  return tents.filter(tent => tent.category === selectedFilter.value)
})

const openBookingModal = (tent) => {
  selectedTent.value = tent
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  selectedTent.value = null
}

const handleBooking = (bookingData) => {
  console.log('Бронирование:', bookingData)
  closeModal()
  alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.')
}

// Проверяем, есть ли tentId в URL
if (route.query.tentId) {
  const tent = tents.find(t => t.id === parseInt(route.query.tentId))
  if (tent) {
    openBookingModal(tent)
  }
}
</script>

<style scoped>
.tents-page {
  padding: 4rem 0;
  min-height: 100vh;
}

.page-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--primary-dark);
}

.page-description {
  text-align: center;
  color: var(--text-light);
  margin-bottom: 2rem;
}

.filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  background: var(--bg-white);
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  font-weight: 600;
  transition: var(--transition);
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--primary-color);
  color: white;
}

.tents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
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
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
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

@media (max-width: 768px) {
  .tents-page {
    padding: 2rem 0;
  }

  .page-title {
    font-size: 2rem;
  }

  .filters {
    gap: 0.5rem;
  }

  .filter-btn {
    padding: 0.4rem 1rem;
    font-size: 0.9rem;
  }

  .tents-grid {
    grid-template-columns: 1fr;
  }

  .tent-image {
    height: 200px;
  }
}
</style>