import { NextResponse } from 'next/server';
import pool from '../../config/db';


export async function GET(request: Request) {
    try {
        const result = await pool.query('SELECT user_id FROM ratings');
        return NextResponse.json(result.rows);
    } catch (err: any) {
        return NextResponse.json({ error: err.message });
    }
}
