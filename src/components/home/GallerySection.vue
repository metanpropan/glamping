<template>
  <section class="gallery">
    <div class="container">
      <SectionTitle>Фотогалерея</SectionTitle>
      <div class="gallery-grid">
        <div v-for="(image, index) in galleryImages" :key="index" class="gallery-item" @click="openModal(index)">
          <img :src="image" :alt="`Галерея ${index + 1}`">
          <div class="gallery-overlay">
            <span class="zoom-icon">🔍</span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="modalOpen" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <img :src="galleryImages[selectedImage]" alt="Полноразмерное изображение">
        <button class="modal-close" @click="closeModal">✕</button>
        <button class="modal-prev" @click="prevImage" v-if="galleryImages.length > 1">❮</button>
        <button class="modal-next" @click="nextImage" v-if="galleryImages.length > 1">❯</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'

const galleryImages = [
  'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1497731809304-3bdeb9c642cf?ixlib=rb-4.0.3&w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?ixlib=rb-4.0.3&w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-4.0.3&w=600&h=400&fit=crop'
]

const modalOpen = ref(false)
const selectedImage = ref(0)

const openModal = (index) => {
  selectedImage.value = index
  modalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  modalOpen.value = false
  document.body.style.overflow = ''
}

const prevImage = () => {
  selectedImage.value = (selectedImage.value - 1 + galleryImages.length) % galleryImages.length
}

const nextImage = () => {
  selectedImage.value = (selectedImage.value + 1) % galleryImages.length
}
</script>

<style scoped>
.gallery {
  padding: 5rem 0;
  background: var(--bg-white);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.gallery-item {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 15px;
  aspect-ratio: 4/3;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.zoom-icon {
  font-size: 2rem;
  color: white;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  cursor: default;
}

.modal-content img {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 10px;
}

.modal-close {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
}

.modal-prev,
.modal-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 2rem;
  padding: 1rem;
  cursor: pointer;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.modal-prev:hover,
.modal-next:hover {
  background: rgba(255, 255, 255, 0.5);
}

.modal-prev {
  left: -60px;
}

.modal-next {
  right: -60px;
}

@media (max-width: 768px) {
  .gallery {
    padding: 3rem 0;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  .modal-prev,
  .modal-next {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }

  .modal-prev {
    left: 10px;
  }

  .modal-next {
    right: 10px;
  }

  .modal-close {
    top: 10px;
    right: 10px;
  }
}
</style>