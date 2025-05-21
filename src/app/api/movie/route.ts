import { NextResponse } from 'next/server';
import movies from '../../data/movies.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const numericId = parseInt(id || '', 10);

  if (Number.isNaN(numericId)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  const data = movies[numericId];

  return NextResponse.json(data);
}

