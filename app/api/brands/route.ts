import { NextResponse } from 'next/server';
import { brands } from '@/app/data/products';

export async function GET() {
  return NextResponse.json({
    brands,
    updatedAt: Date.now(),
  });
} 