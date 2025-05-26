import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import { auth } from '@clerk/nextjs/server';

export async function GET(request: Request) {
    await auth.protect();

    const { searchParams } = new URL(request.url);
    const movie_id = searchParams.get('movie_id');

    // Get user_id from the authenticated session
    const { userId: user_id } = await auth();
    if (!user_id) {
        return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
    }

    console.log("User ID:", user_id);
    console.log("Movie ID:", movie_id);

    if (!user_id || !movie_id) {
        return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 });
    }
    const numericMovieId = parseInt(movie_id, 10);

    const prisma = new PrismaClient();
    try {
        const result = await prisma.rating.findFirst({
            where: {
                user_id: user_id,
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
