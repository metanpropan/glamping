<template>
  <div class="contacts-page">
    <div class="container">
      <h1 class="page-title">Контакты</h1>
      <div class="contacts-grid">
        <div class="contacts-info">
          <h2>Свяжитесь с нами</h2>
          <div class="info-item">
            <div class="info-icon">📍</div>
            <div>
              <h3>Адрес</h3>
              <p>Московская область, д. Лесная, ул. Парковая, 15</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">📞</div>
            <div>
              <h3>Телефон</h3>
              <p><a href="tel:+74951234567">+7 (495) 123-45-67</a></p>
              <p><a href="tel:+74957654321">+7 (495) 765-43-21</a></p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">✉️</div>
            <div>
              <h3>Email</h3>
              <p><a href="mailto:info@glamping-forest.ru">info@glamping-forest.ru</a></p>
              <p><a href="mailto:booking@glamping-forest.ru">booking@glamping-forest.ru</a></p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">🕐</div>
            <div>
              <h3>Режим работы</h3>
              <p>Ежедневно: 09:00 - 21:00</p>
              <p>Бронирование: 24/7</p>
            </div>
          </div>
        </div>

        <div class="contacts-form">
          <h2>Напишите нам</h2>
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <input type="text" v-model="form.name" placeholder="Ваше имя" required>
            </div>
            <div class="form-group">
              <input type="email" v-model="form.email" placeholder="Email" required>
            </div>
            <div class="form-group">
              <input type="tel" v-model="form.phone" placeholder="Телефон">
            </div>
            <div class="form-group">
              <textarea v-model="form.message" rows="5" placeholder="Сообщение" required></textarea>
            </div>
            <AppButton type="submit" variant="primary">Отправить сообщение</AppButton>
          </form>
        </div>
      </div>

      <div class="map-section">
        <h2>Как нас найти</h2>
        <div class="map-placeholder">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.1234567890123!2d37.6176!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIwLjgiTiAzN8KwMzcnMDMuNSJF!5e0!3m2!1sru!2sru!4v1234567890123!5m2!1sru!2sru"
              width="100%"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import AppButton from '@/components/common/AppButton.vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Форма отправлена:', form)
  alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.')
  form.name = ''
  form.email = ''
  form.phone = ''
  form.message = ''
}
</script>

<style scoped>
.contacts-page {
  padding: 4rem 0;
}

.page-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--primary-dark);
}

.contacts-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

.contacts-info h2,
.contacts-form h2 {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--primary-dark);
}

.info-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.info-icon {
  font-size: 1.5rem;
  min-width: 40px;
}

.info-item h3 {
  margin-bottom: 0.5rem;
  color: var(--primary-dark);
}

.info-item p {
  color: var(--text-light);
  margin-bottom: 0.3rem;
}

.info-item a {
  color: var(--text-light);
  transition: var(--transition);
}

.info-item a:hover {
  color: var(--secondary-color);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
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

.map-section {
  margin-top: 4rem;
}

.map-section h2 {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--primary-dark);
}

.map-placeholder {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

@media (max-width: 768px) {
  .contacts-page {
    padding: 2rem 0;
  }

  .page-title {
    font-size: 2rem;
  }

  .contacts-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contacts-info h2,
  .contacts-form h2 {
    font-size: 1.5rem;
  }
}
</style>