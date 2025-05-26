import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const user_id = searchParams.get('user_id');
    const movie_id = searchParams.get('movie_id');
    console.log("user_id: ", user_id);
    console.log("user_id type", typeof user_id);

    if (!user_id || !movie_id) {
        return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 });
    }
    const numericMovieId = parseInt(movie_id, 10);

    const prisma = new PrismaClient();
    try {
        const result = await prisma.rating.findFirst({
            where: {
                user_id: "abcd",
                movie_id: numericMovieId
            }
        });
        if (!result) {
            return NextResponse.json({ recommend: "na", seen: "no" });
        }

        return NextResponse.json({ recommend: result.recommend, seen: result.seen });
    } catch (error) {
        console.error('Error updating rating:', error);
        return NextResponse.json({ error: 'Failed to retrieve rating' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
