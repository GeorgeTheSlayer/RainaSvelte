// src/routes/+layout.server.ts
import type { Config } from '@sveltejs/adapter-vercel';
export const load = async ({ locals: { getSession } }) => {
    return {
        session: await getSession(),
    }
}

export const config: Config = {
    runtime: 'nodejs18.x'
};