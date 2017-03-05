<template>
	<md-list class="md-dense">
		<md-list-item v-for="person in people">
			<md-avatar>
				<img :src="person.url" :alt="person.name">
			</md-avatar>

			<span>{{person.name}}</span>

			<md-button class="md-icon-button md-list-action">
				<md-icon class="md-primary">chat_bubble</md-icon>
			</md-button>
		</md-list-item>
	</md-list>
</template>

<script>
export default {
  name: 'people-list',
  data() {
    return {
      people: [
        {
          name: 'John Lennon',
          url: 'https://placeimg.com/40/40/people/5',
        },
        {
          name: 'Simon & Garfunkel',
          url: 'https://placeimg.com/40/40/people/12',
        },
        {
          name: 'Mike Myers',
          url: 'https://placeimg.com/40/40/people/17',
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
