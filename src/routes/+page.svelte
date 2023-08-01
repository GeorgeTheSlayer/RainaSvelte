<script lang="ts">
	import { supabase } from '@supabase/auth-ui-shared';
	import Card from '$lib/components/Card.svelte';
	import About from '$lib/components/About.svelte';
	import RoundedCard from '$lib/components/RoundedCard.svelte';
</script>

<div class="flex items-center pl-4">
	<div class="items-start flex flex-col w-fit">
		<p class="text-sm lg:hidden font-light tracking-wide opacity-50">Chicago, Illinois</p>
		<div class="flex lg:hidden justify-start gap-x-1">
			<a class="" href="/"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-brand-instagram"
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
					<path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
					<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
					<path d="M16.5 7.5l0 .01" />
				</svg></a
			>
			<a href="/"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-brand-soundcloud"
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
					<path d="M17 11h1c1.38 0 3 1.274 3 3c0 1.657 -1.5 3 -3 3l-6 0v-10c3 0 4.5 1.5 5 4z" />
					<path d="M9 8l0 9" />
					<path d="M6 17l0 -7" />
					<path d="M3 16l0 -2" />
				</svg>
			</a>
			<a href="/"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-brand-linkedin"
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
					<path
						d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
					/>
					<path d="M8 11l0 5" />
					<path d="M8 8l0 .01" />
					<path d="M12 16l0 -5" />
					<path d="M16 16v-3a2 2 0 0 0 -4 0" />
				</svg></a
			>
		</div>
	</div>
	<div class="mt-4 w-fit ml-auto mr-4 flex items-center gap-x-4">
		<div class=" bg-play p-2 rounded-full text-secondary-highlight">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-player-play-filled"
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
				<path
					d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
					stroke-width="0"
					fill="currentColor"
				/>
			</svg>
		</div>
	</div>
</div>

<p class="pl-4 mt-4 text-lg font-bold tracking-wider">Popular</p>
<div><Card /> <Card /> <Card /> <Card /></div>
<p class="pl-4 mt-4 text-lg font-bold tracking-wider">Discography</p>
<div class="flex w-full justify-evenly gap-x-4">
	<RoundedCard />
	<RoundedCard />
	<RoundedCard />
	<RoundedCard />
</div>

<div class="lg:hidden">
	<About />
</div>
