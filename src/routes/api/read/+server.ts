import { json, type RequestHandler } from '@sveltejs/kit';
import db from '../../../lib/server/db';

export const GET: RequestHandler = async () => {
    const statement = db.prepare('SELECT * FROM posts');
    
    const posts = statement.all();

    return json({ 
        success: true, 
        posts: posts 
    }, { 
        status: 200 
    });
};