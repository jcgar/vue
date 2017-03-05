<template>
	<my-select :label="label" :name="name" :options="options"></my-select>
</template>

<script>
export default {
  name: 'input-modelo',
  data() {
    return {
      name: 'modelos',
      label: 'Modelo',
      options: [{
        name: 'Megane',
        value: 'ford',
      },
      {
        name: 'Focus',
        value: 'focus',
      }],
    };
  },
};
</script>

<style scoped>
</style>
