import Folder from '$lib/models/Folder';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    const folders = await Folder.find().lean();
    return {
        folders: folders.map((f) => ({
            slug: f.slug as String,
            lastEdit: f.lastEdit as Number,
        })),
    };
}) satisfies PageServerLoad;
