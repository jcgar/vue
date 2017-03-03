<template>
	<div>
		<md-toolbar>
			<div class="md-toolbar-container">
				<h3 class="md-title">{{title}}</h3>
			</div>
		</md-toolbar>
		<md-button class="md-raised md-accent" @click.native="closeRightSidenav">Close</md-button>
	</div>
</template>

<script>
export default {
  name: 'right-nav',
  data() {
    return {
      title: 'Sidenav right content',
    };
  },
  methods: {
    closeRightSidenav() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
</style>
