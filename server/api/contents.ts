import { db } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
    if (event.node.req.method === 'GET') {
        const stmt = db.prepare('SELECT * FROM contents');
        const rows = stmt.all();

        if (rows.length === 0) {
            console.warn('No data found in contents table.');
        }

        return rows;
    } else if (event.node.req.method === 'POST') {
        const body = await readBody(event);
        const stmt = db.prepare('INSERT INTO contents (title, description) VALUES (?, ?)');
        const result = stmt.run(body.title, body.description);
        return { success: result.changes > 0 };
    } else if (event.node.req.method === 'PUT') {
        const body = await readBody(event);
        const stmt = db.prepare('UPDATE contents SET title = ?, description = ? WHERE id = ?');
        const result = stmt.run(body.title, body.description, body.id);
        return { success: result.changes > 0 };
    } else if (event.node.req.method === 'PATCH') {
        const body = await readBody(event);
        const updates = [];
        const params = [];
        
        if (body.title) {
            updates.push('title = ?');
            params.push(body.title);
        }
        if (body.description) {
            updates.push('description = ?');
            params.push(body.description);
        }
        
        if (updates.length === 0) {
            return { success: false, message: 'No fields to update' };
        }
        
        params.push(body.id);
        const stmt = db.prepare(`UPDATE contents SET ${updates.join(', ')} WHERE id = ?`);
        const result = stmt.run(...params);
        return { success: result.changes > 0 };
    } else if (event.node.req.method === 'DELETE') {
        const body = await readBody(event);
        const stmt = db.prepare('DELETE FROM contents WHERE id = ?');
        const result = stmt.run(body.id);
        return { success: result.changes > 0 };
    }
});
  