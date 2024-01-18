import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    return {
        folder: params.folder,
        page: params.page,
        pageName: params.page.toUpperCase(),
    };
};
