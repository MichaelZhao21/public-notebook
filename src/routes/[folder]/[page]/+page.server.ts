import Page from '$lib/models/Page';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    // Check the db to see if the page exists
    const page = await Page.findOne({ slug: params.page, folder: params.folder }).lean();
    if (!page) {
        error(404);
    }

    return {
        pageName: page.name as string,
        page: page.slug as string,
        folder: page.folder as string,
        tags: page.tags as string[],
        content: page.content as string,
        lastEdit: page.lastEdit as number,
    };
};
