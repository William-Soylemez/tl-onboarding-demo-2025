import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const user_id = searchParams.get('user_id');

    if (!user_id) {
        return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 });
    }
    const numericUserId = parseInt(user_id, 10);

    const prisma = new PrismaClient();
    try {
        const result = await prisma.ratings.findMany({
            where: {
                user_id: numericUserId,
                seen: "yes",
                recommend: "yes"
            }
        });
        if (!result) {
            return NextResponse.json([]);
        }

        return NextResponse.json(result.map((rating) => rating.movie_id,));
    } catch (error) {
        console.error('Error updating rating:', error);
        return NextResponse.json({ error: 'Failed to retrieve rating' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
