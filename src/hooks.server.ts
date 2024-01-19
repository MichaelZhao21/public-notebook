import type { Handle } from '@sveltejs/kit';
import { connect } from '$lib/db';

await connect();

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);
  return response;
};
