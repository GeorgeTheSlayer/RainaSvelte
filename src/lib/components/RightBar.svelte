<script>
	let imgFile = 'https://picsum.photos/500';
	import About from './About.svelte';
</script>

<div class="w-full h-full mt-2">
	<p>Now Playing</p>
	<img src={imgFile} alt="Album Art" class="square mt-4 mx-auto m-2 rounded-lg" />
	<a href="/" class="font-bold text-xl mt-4 hover:underline">Song Title</a>
	<p class="mt-2 text-gray-400 hover:underline">Artist</p>
	<About />
</div>

<style lang="postcss">
	.square {
		aspect-ratio: 1 / 1;
	}
</style>
