
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { writeFileSync } from 'fs';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
    default: async ({ request, locals }) => {
        const formData = Object.fromEntries(await request.formData());

        if (
            !(formData.song as File) ||
            (formData.song) === 'undefined'
        ) {
            console.log(formData.song)
            return fail(400, {
                error: true,
                message: 'You must provide a file to upload'
            });
        }

        const { song } = formData as { song: File };
        console.log(song);

        // Write the file to the static folder
        writeFileSync(`static/media/${song.name}`, Buffer.from(await song.arrayBuffer()));
    }
} satisfies Actions;