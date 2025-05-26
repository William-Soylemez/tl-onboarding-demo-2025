import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import { auth } from '@clerk/nextjs/server';

export async function GET(request: Request) {
    await auth.protect();

    const { searchParams } = new URL(request.url);
    const { userId: user_id } = await auth();

    if (!user_id) {
        return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 });
    }

    const prisma = new PrismaClient();
    try {
        const result = await prisma.rating.findMany({
            where: {
                user_id,
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
