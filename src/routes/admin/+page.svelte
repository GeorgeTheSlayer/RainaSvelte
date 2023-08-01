<script lang="ts">
	import type { PageData } from './$types';
	import { browser } from '$app/environment';
	import { createClient } from '@supabase/supabase-js';
	let songFile: File | undefined = undefined;
	let albumArt: File | undefined = undefined;

	$: {
		if (browser && songFile != undefined) {
			console.log(songFile);
		}
	}

	export let data: PageData;
</script>

<h1>Upload Stuff Here</h1>

<form method="POST" class="w-full" enctype="multipart/form-data">
	<input bind:value={songFile} type="file" id="song" name="song" accept=".mp3" />
	<input bind:value={albumArt} type="file" id="albumArt" name="albumArt" accept=".jpg,.jpeg,.png" />
	<input type="text" id="title" name="title" />
	<input type="text" id="artist" name="artist" />
	<input type="text" id="date" name="date" />
	<button type="submit">Submit</button>
</form>
