<template>
  <div class="counter">
    <button class="counter__button" @click="count--">-</button>
    <span class="counter__value">{{ count }}</span>
    <button class="counter__button" @click="count++">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style scoped>
.counter {
  display: flex;
  align-items: center;
}

.counter__button {
  border: none;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
}

.counter__value {
  font-size: 2rem;
  margin: 0 1rem;
}
</style>
