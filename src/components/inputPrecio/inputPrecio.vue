<template>
	<div>
		<my-select :label="label" :name="name" :options="options"></my-select>
		<my-select :label="label2" :name="name2" :options="options"></my-select>
	</div>
</template>

<script>
export default {
  name: 'input-precio',
  data() {
    return {
      name: 'precios-desde',
      name2: 'precios-hasta',
      label: 'Precio desde',
      label2: 'Precio hasta',
      options: [{
        name: '0€',
        value: '0',
      },
      {
        name: '2000€',
        value: '2000',
      }],
    };
  },
};
</script>

<style scoped>
</style>
