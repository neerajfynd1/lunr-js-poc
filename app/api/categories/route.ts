import { NextResponse } from 'next/server';
import { categories } from '@/app/data/products';

export async function GET() {
  return NextResponse.json({
    categories,
    updatedAt: Date.now(),
  });
} 