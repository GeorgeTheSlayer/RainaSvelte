<script>
	let imgFile = 'https://picsum.photos/200';
</script>

<div class="flex flex-col p-4 w-1/5 bg-secondary-round rounded-lg hover:bg-secondary-hover">
	<img src={imgFile} alt="Art" class="square" />
	<p class=" font-bold">Title</p>
	<p class=" text-main-30">Album date</p>
</div>

<style lang="postcss">
	.square {
		aspect-ratio: 1 / 1;
	}
</style>
