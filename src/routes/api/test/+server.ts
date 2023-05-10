import { json } from '@sveltejs/kit';

export const GET = ({ cookies }) => {
	cookies.set('endpoint', 'value', {
		httpOnly: false,
		path: '/'
	});

	return json(
		{
			hello: 'world'
		},
		{
			headers: {
				'set-cookie': cookies.serialize('endpoint-headers', 'value', {
					httpOnly: false,
					path: '/'
				})
			}
		}
	);
};
