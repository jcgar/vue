<template>
	<my-select :label="label" :name="name" :options="options"></my-select>
</template>

<script>
export default {
  name: 'input-marca',
  data() {
    return {
      name: 'marcas',
      label: 'Marca',
      options: [{
        name: 'Ford',
        value: 'ford',
      },
      {
        name: 'Renault',
        value: 'renault',
      }],
    };
  },
};
</script>

<style scoped>
</style>
