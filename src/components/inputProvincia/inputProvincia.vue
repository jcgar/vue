<template>
	<my-select :label="label" :name="name" :options="options"></my-select>
</template>

<script>
export default {
  name: 'input-provincia',
  data() {
    return {
      name: 'provincias',
      label: 'Provincia',
      options: [{
        name: 'Madrid',
        value: 'madrid',
      },
      {
        name: 'Barcelona',
        value: 'barcelona',
      }],
    };
  },
};
</script>

<style scoped>
</style>
