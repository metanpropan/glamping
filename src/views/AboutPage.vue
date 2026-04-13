<template>
  <div class="about-page">
    <div class="container">
      <div class="about-hero">
        <h1 class="about-title">О нас</h1>
        <p class="about-subtitle">История создания и наша философия</p>
      </div>

      <div class="about-content">
        <div class="about-story">
          <div class="story-text">
            <h2>Наша история</h2>
            <p>Glamping Forest был основан в 2020 году с одной простой идеей — создать место, где люди могут наслаждаться природой, не отказываясь от комфорта. Мы верим, что отдых на природе должен быть доступным и комфортным для каждого.</p>
            <p>За четыре года работы мы приняли более 1000 гостей, каждый из которых оставил частичку своей души в нашем лесу. Мы постоянно развиваемся, добавляем новые услуги и улучшаем сервис, чтобы каждый визит становился незабываемым.</p>
          </div>
          <div class="story-image">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3" alt="Наша история">
          </div>
        </div>

        <div class="about-values">
          <h2>Наши ценности</h2>
          <div class="values-grid">
            <div v-for="value in values" :key="value.title" class="value-card">
              <div class="value-icon">{{ value.icon }}</div>
              <h3>{{ value.title }}</h3>
              <p>{{ value.description }}</p>
            </div>
          </div>
        </div>

        <div class="about-team">
          <h2>Наша команда</h2>
          <div class="team-grid">
            <div v-for="member in team" :key="member.name" class="team-card">
              <div class="team-photo">
                <div class="photo-placeholder">{{ member.photo }}</div>
              </div>
              <h3>{{ member.name }}</h3>
              <p>{{ member.position }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const values = [
  {
    icon: '🌿',
    title: 'Экологичность',
    description: 'Мы заботимся о природе и используем экологически чистые материалы'
  },
  {
    icon: '❤️',
    title: 'Забота о гостях',
    description: 'Каждый гость для нас особенный, мы создаем индивидуальный подход'
  },
  {
    icon: '✨',
    title: 'Качество',
    description: 'Мы не идем на компромиссы в вопросах комфорта и сервиса'
  }
]

const team = [
  {
    name: 'Алексей Смирнов',
    position: 'Основатель и директор',
    photo: '👨‍💼'
  },
  {
    name: 'Мария Иванова',
    position: 'Менеджер по бронированию',
    photo: '👩‍💼'
  },
  {
    name: 'Дмитрий Петров',
    position: 'Шеф-повар',
    photo: '👨‍🍳'
  }
]
</script>

<style scoped>
.about-page {
  padding: 4rem 0;
}

.about-hero {
  text-align: center;
  margin-bottom: 4rem;
}

.about-title {
  font-size: 3rem;
  color: var(--primary-dark);
  margin-bottom: 1rem;
}

.about-subtitle {
  font-size: 1.2rem;
  color: var(--text-light);
}

.about-story {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 5rem;
  align-items: center;
}

.story-text h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--primary-dark);
}

.story-text p {
  margin-bottom: 1rem;
  line-height: 1.8;
  color: var(--text-light);
}

.story-image img {
  width: 100%;
  border-radius: 20px;
  box-shadow: var(--shadow-lg);
}

.about-values h2,
.about-team h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: var(--primary-dark);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;
}

.value-card {
  text-align: center;
  padding: 2rem;
  background: var(--bg-white);
  border-radius: 20px;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.value-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.value-card h3 {
  margin-bottom: 1rem;
  color: var(--primary-dark);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.team-card {
  text-align: center;
  background: var(--bg-white);
  padding: 2rem;
  border-radius: 20px;
  transition: var(--transition);
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.team-photo {
  width: 150px;
  height: 150px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  overflow: hidden;
}

.photo-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
}

.team-card h3 {
  margin-bottom: 0.5rem;
  color: var(--primary-dark);
}

@media (max-width: 768px) {
  .about-page {
    padding: 2rem 0;
  }

  .about-title {
    font-size: 2rem;
  }

  .about-story {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .story-text h2 {
    font-size: 1.8rem;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }

  .team-grid {
    grid-template-columns: 1fr;
  }
}
</style>