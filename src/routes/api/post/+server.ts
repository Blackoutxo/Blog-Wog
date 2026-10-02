import { json } from '@sveltejs/kit';
import db from '$lib/server/db';

export async function POST({ request }) {
	const { username, title, description, date } = await request.json();

	const statement = db.prepare(
		'INSERT INTO post-info (username, title, description, date) VALUES (@name, @address, @phone)'
	);
	statement.run({ name, title, description, date });

	return json({ success: true }, { status: 201 });
}