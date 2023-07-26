import { API_URL } from './constants';

export async function getAllReviews() {
	const allReviews = await fetch(`${API_URL}/reviews`).then((response) => response.json());

	return allReviews;
}
