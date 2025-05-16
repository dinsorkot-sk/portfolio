import { db } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
    if (event.node.req.method === 'GET') {
        const stmt = db.prepare('SELECT * FROM contracts');
        const rows = stmt.all();
        return rows;
    } else if (event.node.req.method === 'POST') {
        const body = await readBody(event);
        const stmt = db.prepare('INSERT INTO contracts (title, link) VALUES (?, ?)');
        const result = stmt.run(body.title, body.link);
        return { success: result.changes > 0 };
    } else if (event.node.req.method === 'PUT') {
        const body = await readBody(event);
        const stmt = db.prepare('UPDATE contracts SET title = ?, link = ? WHERE id = ?');
        const result = stmt.run(body.title, body.link, body.id);
        return { success: result.changes > 0 };
    } else if (event.node.req.method === 'PATCH') {
        const body = await readBody(event);
        const stmt = db.prepare('UPDATE contracts SET title = ?, link = ? WHERE id = ?');
        const result = stmt.run(body.title, body.link, body.id);
        return { success: result.changes > 0 };
    } else if (event.node.req.method === 'DELETE') {
        const body = await readBody(event);
        const stmt = db.prepare('DELETE FROM contracts WHERE id = ?');
        const result = stmt.run(body.id);
        return { success: result.changes > 0 };
    }
});

