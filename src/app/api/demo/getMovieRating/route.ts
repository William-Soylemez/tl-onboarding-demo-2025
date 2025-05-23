import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const user_id = searchParams.get('user_id');
    const movie_id = searchParams.get('movie_id');

    if (!user_id || !movie_id) {
        return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 });
    }
    const numericUserId = parseInt(user_id, 10);
    const numericMovieId = parseInt(movie_id, 10);
    if (Number.isNaN(numericUserId) || Number.isNaN(numericMovieId)) {
        return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 });
    }

    const prisma = new PrismaClient();
    try {
        const result = await prisma.ratings.findFirst({
            where: {
                user_id: numericUserId,
                movie_id: numericMovieId
            }
        });
        if (!result) {
            return NextResponse.json({ recommend: "no", seen: "no" });
        }

        return NextResponse.json({ recommend: result.recommend, seen: result.seen });
    } catch (error) {
        console.error('Error updating rating:', error);
        return NextResponse.json({ error: 'Failed to retrieve rating' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
