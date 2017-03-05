<template>
	<md-input-container>
		<label :for="name">{{label}}</label>
		<md-select :name="name" :id="name" v-model="_model">
		  <md-option v-for="option in options" :value="option.value">{{option.name}}</md-option>
		</md-select>
	</md-input-container>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: Array,
      default() { return []; },
    },
  },
  computed: {
    _model: {
      get() { return this.value; },
      set(newValue) {
        this.$emit('input', newValue);
      },
    },
  },

};
</script>

<style scoped>
.md-input-container {
    float: left;
	height: 3rem;
	border: 1px solid #b6b6b6;
	border-radius: 3px;
	cursor: pointer;
	font-size: 1.6rem;
	color: #4d4d4d;
}

.md-input-container > label{
}
</style>
