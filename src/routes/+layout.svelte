<script lang="ts">
	import '../app.css';
	import BottomNav from '$lib/components/BottomNav.svelte';
	import TopBar from '$lib/components/TopBar.svelte';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import RightBar from '$lib/components/RightBar.svelte';
	import LeftBar from '$lib/components/LeftBar.svelte';
	import Player from '$lib/components/Player.svelte';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
	// import type { LayoutData } from './$types';

	// export let data: LayoutData;
</script>

<svelte:head>
	<title>Raina Villareal</title>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
</svelte:head>

<body class="h-full w-full bg-secondary-highlight lg:bg-secondary-background text-main-60">
	<div class="lg:p-4 bg-black gap-2 flex">
		<div class="w-18 hidden flex-none lg:block rounded-lg"><LeftBar /></div>
		<div class="w-full rounded-lg bg-secondary-highlight">
			<TopBar />

			<div class=" ">
				<slot />
			</div>

			<nav class="h-16 lg:hidden">
				<BottomNav />
			</nav>
		</div>
		<div class="p-4 hidden flex-initial rounded-lg lg:block w-1/3 bg-secondary-highlight">
			<RightBar />
		</div>
	</div>

	<Player />
</body>
