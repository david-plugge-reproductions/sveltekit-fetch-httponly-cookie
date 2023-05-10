export const load = async ({ fetch, cookies }) => {
	cookies.set('server load', 'value', {
		httpOnly: false,
		path: '/'
	});

	const data = await fetch('/api/test').then((res) => res.json());

	return {
		test: data
	};
};
