<template>
  <div class="section-title-wrapper">
    <h2 class="section-title" :class="{ 'text-left': align === 'left' }">
      <slot></slot>
    </h2>
  </div>
</template>

<script setup>
defineProps({
  align: {
    type: String,
    default: 'center',
    validator: (value) => ['left', 'center', 'right'].includes(value)
  }
})
</script>

<style scoped>
.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--primary-dark);
  position: relative;
  padding-bottom: 1rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: var(--secondary-color);
}

.section-title.text-left::after {
  left: 0;
  transform: none;
}

.section-title.text-left {
  text-align: left;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
}
</style>