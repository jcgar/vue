<template>
	<my-select :label="label" :name="name" :options="options"></my-select>
</template>

<script>
export default {
  name: 'input-combustible',
  data() {
    return {
      name: 'combustibles',
      label: 'Combustible',
      options: [{
        name: 'Diesel',
        value: 'diesel',
      },
      {
        name: 'Gasolina',
        value: 'gasolina',
      }],
    };
  },
};
</script>

<style scoped>
</style>
