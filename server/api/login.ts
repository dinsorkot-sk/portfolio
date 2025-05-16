import { db } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
    if (event.node.req.method === 'POST') {
        const body = await readBody(event);
        const stmt = db.prepare('SELECT * FROM users WHERE username = ? AND password = ?');
        const rows = stmt.all(body.username, body.password);
        if (rows.length > 0) {
            return { success: true, token: randomToken() };
        } else {
            return { success: false, token: null };
        }
    }
});

const randomToken = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}