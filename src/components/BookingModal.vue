<template>
  <div class="modal-overlay" @click="$emit('close')">
    <div class="modal-container" @click.stop>
      <div class="modal-header">
        <h2>Бронирование: {{ tent.name }}</h2>
        <button class="close-btn" @click="$emit('close')">✕</button>
      </div>

      <div class="modal-body">
        <form @submit.prevent="submitBooking">
          <div class="form-group">
            <label>Дата заезда</label>
            <input type="date" v-model="form.checkIn" required :min="minDate">
          </div>

          <div class="form-group">
            <label>Дата выезда</label>
            <input type="date" v-model="form.checkOut" required :min="form.checkIn">
          </div>

          <div class="form-group">
            <label>Количество гостей</label>
            <input type="number" v-model="form.guests" min="1" :max="maxGuests" required>
          </div>

          <div class="form-group">
            <label>Ваше имя</label>
            <input type="text" v-model="form.name" required>
          </div>

          <div class="form-group">
            <label>Телефон</label>
            <input type="tel" v-model="form.phone" required>
          </div>

          <div class="form-group">
            <label>Email</label>
            <input type="email" v-model="form.email" required>
          </div>

          <div class="form-group">
            <label>Пожелания</label>
            <textarea v-model="form.comments" rows="3"></textarea>
          </div>

          <div class="price-info">
            <p>Стоимость: {{ totalPrice }} ₽</p>
            <small>Включены все налоги и сборы</small>
          </div>

          <div class="modal-actions">
            <AppButton variant="outline" @click="$emit('close')">Отмена</AppButton>
            <AppButton type="submit" variant="primary">Отправить заявку</AppButton>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import AppButton from '@/components/common/AppButton.vue'

const props = defineProps({
  tent: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close', 'book'])

const form = ref({
  checkIn: '',
  checkOut: '',
  guests: 2,
  name: '',
  phone: '',
  email: '',
  comments: ''
})

const minDate = computed(() => {
  const today = new Date()
  return today.toISOString().split('T')[0]
})

const maxGuests = computed(() => {
  if (props.tent.name === 'Семейный' || props.tent.name === 'Премиум Виста') return 6
  if (props.tent.name === 'Озерный бриз') return 4
  return 2
})

const totalPrice = computed(() => {
  if (!form.value.checkIn || !form.value.checkOut) return props.tent.price
  const checkIn = new Date(form.value.checkIn)
  const checkOut = new Date(form.value.checkOut)
  const days = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24))
  if (days <= 0) return props.tent.price
  return props.tent.price * days
})

const submitBooking = () => {
  const bookingData = {
    tent: props.tent,
    ...form.value,
    totalPrice: totalPrice.value
  }
  emit('book', bookingData)
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 1rem;
}

.modal-container {
  background: white;
  border-radius: 20px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
}

.modal-header h2 {
  font-size: 1.5rem;
  color: var(--primary-dark);
  margin: 0;
}

.close-btn {
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #999;
  transition: var(--transition);
}

.close-btn:hover {
  color: #333;
}

.modal-body {
  padding: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-dark);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-family: inherit;
  font-size: 1rem;
  transition: var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--secondary-color);
}

.price-info {
  background: var(--bg-light);
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem 0;
  text-align: center;
}

.price-info p {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.3rem;
}

.price-info small {
  color: var(--text-light);
}

.modal-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1.5rem;
}

@media (max-width: 768px) {
  .modal-container {
    margin: 1rem;
  }

  .modal-header h2 {
    font-size: 1.2rem;
  }

  .modal-actions {
    flex-direction: column;
  }

  .modal-actions button {
    width: 100%;
  }
}
</style>