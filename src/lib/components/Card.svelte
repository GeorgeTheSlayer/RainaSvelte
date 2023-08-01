<script lang="ts">
	import { Howl, Howler } from 'howler';
	let dur = '0:00';
	let isPlaying = false;
	// var jsmediatags = require('jsmediatags');

	import { onMount } from 'svelte';
	export const args = {
		index: 1,
		imgFile: 'https://picsum.photos/48',
		artistName: 'Artist Name',
		songTitle: 'Song Title',
		datePublished: 'XX/XX/XXXX',
		songFile:
			'https://puvxqpxdhzllboqkucwm.supabase.co/storage/v1/object/public/Music/16356701_I%20Go_(DJ%20Koze%20Remix).mp3?t=2023-07-31T22%3A23%3A28.781Z'
	};

	const sound = new Howl({
		src: [args.songFile],
		html5: true,
		preload: true,
		onload: async () => {
			// console.log('loaded');
			dur = await sound.duration().toString();
		}
	});
	onMount(async () => {
		// const metadata = await parseFile(args.songFile);
		// console.log(metadata);
	});

	function playAudio() {
		if (sound.playing()) {
			sound.pause();
			isPlaying = false;
			console.log(isPlaying);
		} else {
			sound.play();
			isPlaying = true;
		}
	}
</script>

<div class="flex items-center w-full h-full hover:bg-secondary-hover">
	<button on:click={playAudio} class=" w-full flex h-16 max-h-16 items-center text-left">
		<p class="p-4">{args.index}</p>
		<img class="square h-12" src={args.imgFile} alt="Album Art" />
		<div class="flex flex-col pl-2">
			<p class=" font-bold text-lg">Song Title</p>
			<p class=" font-thin text-main-30 text-sm tracking-wide">
				<span>{args.artistName}</span>
			</p>
		</div>
		<p class="lg:block hidden font-thin text-main-30 text-sm tracking-wide ml-auto w-fit mr-8">
			{args.datePublished}
		</p>
		<p class="lg:block hidden font-thin text-main-30 text-sm tracking-wide ml-auto w-fit mr-8">
			{dur}
		</p>
	</button>
	<div class="ml-auto mr-4 lg:hidden w-fit">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-dots-vertical"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
		</svg>
	</div>
</div>
