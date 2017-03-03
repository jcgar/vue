<template>
  <div id="app">
  
<md-layout md-gutter>
  <md-layout md-column md-flex="33" md-hide-xsmall>
	  <md-toolbar class="md-warn">
		<md-button class="md-icon-button" @click.native="toggleLeftSidenav">
		  <md-icon>menu</md-icon>
		</md-button>

		<h2 class="md-title">My App</h2>
	  </md-toolbar>
  
		<p>hola </p>
    <md-layout md-flex="5"></md-layout>
    <md-layout>
		
		
		<md-list class="md-dense">
			<md-list-item>
				<md-avatar>
					<img src="https://placeimg.com/40/40/people/5" alt="People">
				</md-avatar>

				<span>Abbey Christansen</span>

				<md-button class="md-icon-button md-list-action">
					<md-icon class="md-primary">chat_bubble</md-icon>
				</md-button>
			</md-list-item>
			
			<md-list-item>
				<md-avatar>
					<img src="https://placeimg.com/40/40/people/8" alt="People">
				</md-avatar>

				<span>Simon & Garfunkel</span>

				<md-button class="md-icon-button md-list-action">
					<md-icon class="md-primary">chat_bubble</md-icon>
				</md-button>
			</md-list-item>
		</md-list>
		
	</md-layout>
  </md-layout>

  <md-layout md-column md-flex>
		<md-toolbar>
			<h2 class="md-title">...</h2>
		</md-toolbar>
	  
		<md-button md-raised class="md-fab md-mini md-fab-bottom-right">
			<md-icon>add</md-icon>
		</md-button>
	  
    <md-layout md-flex="50">
	
	
		
	<md-list>
      <md-list-item class="md-primary">
        <md-icon>insert_drive_file</md-icon> <span>My files</span>
      </md-list-item>
  
      <md-list-item>
        <md-icon>people</md-icon> <span>Shared with me</span>
      </md-list-item>
	</md-list>  
	  
	</md-layout>
    <md-layout>
	
		<div>
		<md-button class="md-raised md-accent" @click.native="toggleRightSidenav">Toggle right</md-button>
		<p>Open console to see the events tpoitpoitpotipotiptoiptoitpoti ptoip toi ptoi ptoipoipoitpoi ptoi p</p>
	  </div>
  
	</md-layout>
    <md-layout></md-layout>
  </md-layout>
</md-layout>

	<md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
		<my-left-nav></my-left-nav>
  	</md-sidenav>
	
	<md-sidenav class="md-right" ref="rightSidenav" @open="open('Right')" @close="close('Right')">
		<my-right-nav @close="closeRightSidenav"></my-right-nav>
	</md-sidenav>
  

  

  

	
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
    toggleRightSidenav() {
      this.$refs.rightSidenav.toggle();
    },
    closeRightSidenav() {
      this.$refs.rightSidenav.close();
    },
    open(ref) {
      console.log(`Opened, ${ref}!`);
    },
    close(ref) {
      console.log(`Closed, ${ref}!`);
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
