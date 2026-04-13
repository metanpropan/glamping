<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">Glamping Forest</h3>
          <p class="footer-description">
            Уютный отдых на природе с комфортом премиум-класса
          </p>
        </div>

        <div class="footer-section">
          <h4 class="footer-subtitle">Контакты</h4>
          <div class="footer-contacts">
            <p>📍 Московская область, д. Лесная, 15</p>
            <p>📞 <a href="tel:+74951234567">+7 (495) 123-45-67</a></p>
            <p>✉️ <a href="mailto:info@glamping-forest.ru">info@glamping-forest.ru</a></p>
          </div>
        </div>

        <div class="footer-section">
          <h4 class="footer-subtitle">Соцсети</h4>
          <div class="footer-social">
            <a href="#" class="social-link">Instagram</a>
            <a href="#" class="social-link">Telegram</a>
            <a href="#" class="social-link">VK</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2024 Glamping Forest. Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--primary-dark);
  color: var(--bg-light);
  padding: 3rem 0 1rem;
  margin-top: 4rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--accent-color);
}

.footer-description {
  opacity: 0.9;
  line-height: 1.6;
}

.footer-subtitle {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--accent-color);
}

.footer-contacts p {
  margin-bottom: 0.5rem;
  opacity: 0.9;
}

.footer-contacts a {
  transition: var(--transition);
}

.footer-contacts a:hover {
  color: var(--accent-color);
}

.footer-social {
  display: flex;
  gap: 1rem;
  flex-direction: column;
}

.social-link {
  opacity: 0.9;
  transition: var(--transition);
}

.social-link:hover {
  opacity: 1;
  color: var(--accent-color);
  transform: translateX(5px);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.8;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-social {
    align-items: center;
  }
}
</style>