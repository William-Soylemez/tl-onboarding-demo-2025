import { NextResponse } from 'next/server';
import movies from '../../data/movies.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page');
  const numericPage = parseInt(page || '', 10);

  if (Number.isNaN(numericPage) || numericPage < 1 || numericPage > 10) {
    return NextResponse.json({ error: 'Invalid page' }, { status: 400 });
  }

  const data = movies.slice((numericPage - 1) * 25, numericPage * 25).map((movie) => {
    return {
      title: movie.title,
      year: movie.year,
      id: movie.id,
      poster: movie.poster,
    };
  });

  return NextResponse.json(data);
}

