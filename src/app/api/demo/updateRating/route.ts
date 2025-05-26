import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma'
import { auth } from '@clerk/nextjs/server';


export async function POST(request: Request) {
    await auth.protect();

    const { userId: user_id } = await auth();
    if (!user_id) {
        return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
    }

    const { movie_id, recommend, seen } = await request.json();

    if (!user_id || !movie_id) {
        return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 });
    }

    const prisma = new PrismaClient();
    try {
        // Check if the rating exists
        const existingRating = await prisma.rating.findFirst({
            where: {
                user_id: user_id,
                movie_id: movie_id
            }
        });
        let result;
        if (existingRating) {
            result = await prisma.rating.update({
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
            result = await prisma.rating.create({
                data: {
                    user_id,
                    movie_id,
                    recommend: recommend ?? "na",
                    seen: seen ?? "no"
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
