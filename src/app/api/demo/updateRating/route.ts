import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma'



export async function POST(request: Request) {
    const { user_id, movie_id, recommend, seen } = await request.json();

    if (!user_id || !movie_id) {
        return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 });
    }

    const prisma = new PrismaClient();
    try {
        // Check if the rating exists
        const existingRating = await prisma.ratings.findFirst({
            where: {
                user_id: user_id,
                movie_id: movie_id
            }
        });
        let result;
        if (existingRating) {
            result = await prisma.ratings.update({
                where: {
                    id: existingRating.id // Use the ID of the existing rating
                },
                data: {
                    user_id,
                    movie_id,
                    recommend,
                    seen
                }
            });
        } else {
            // Create a new rating if it doesn't exist
            result = await prisma.ratings.create({
                data: {
                    user_id,
                    movie_id,
                    recommend: recommend ?? "no",
                    seen: seen ?? "yes"
                }
            });
        }

        return NextResponse.json(result);
    } catch (error) {
        console.error('Error updating rating:', error);
        return NextResponse.json({ error: 'Failed to update rating' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
