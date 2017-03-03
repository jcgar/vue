<template>
	<div>
		<md-toolbar class="md-large">
		  <div class="md-toolbar-container">
			<h3 class="md-title">{{title}}</h3>
		  </div>
		</md-toolbar>

		<md-list class="md-dense">
			<md-list-item>
			  <md-icon>move_to_inbox</md-icon> <span>Inbox</span>
			</md-list-item>

			<md-list-item>
			  <md-icon>send</md-icon> <span>Sent Mail</span>
			</md-list-item>
			
			<md-list-item>
				<md-icon>error</md-icon> <span>Spam</span>
				
				<md-divider class="md-inset"></md-divider>
			</md-list-item>
		</md-list>
		
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>
	</div>
</template>

<script>
export default {
  name: 'left-nav',
  data() {
    return {
      title: 'Sidenav content',
    };
  },
};
</script>

<style scoped>
</style>
