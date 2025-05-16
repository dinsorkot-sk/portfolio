import { db } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
    if (event.node.req.method === 'GET') {
        const stmt = db.prepare('SELECT * FROM users');
        const rows = stmt.all();
        return rows;
    } else if (event.node.req.method === 'POST') {
        const body = await readBody(event);
        const stmt = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)');
        const result = stmt.run(body.username, body.password);
        return { success: result.changes > 0 };
    } else if (event.node.req.method === 'PUT') {
        const body = await readBody(event);
        const stmt = db.prepare('UPDATE users SET username = ?, password = ? WHERE id = ?');
        const result = stmt.run(body.username, body.password, body.id);
        return { success: result.changes > 0 };
    } else if (event.node.req.method === 'DELETE') {
        const body = await readBody(event);
        const stmt = db.prepare('DELETE FROM users WHERE id = ?');
        const result = stmt.run(body.id);
        return { success: result.changes > 0 };
    }
});

