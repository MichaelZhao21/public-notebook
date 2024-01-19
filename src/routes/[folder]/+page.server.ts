import Folder from '$lib/models/Folder';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

interface Page {
    pageId: String;
    slug: String;
    name: String;
    tags: [String];
    lastEdit: Number;
}

export const load: PageServerLoad = async ({ params }) => {
    const folder = await Folder.findOne({ slug: params.folder }).lean();
    if (!folder) {
        error(404);
    }

    return {
        folder: folder.slug as String,
        pages: folder.pages.map((page: Page) => ({
            slug: page.slug,
            name: page.name,
            tags: page.tags,
            lastEdit: page.lastEdit,
        })),
        lastEdit: folder.lastEdit as Number,
    };
};
