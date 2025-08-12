import { NextResponse } from 'next/server';

export async function GET(
  _req: Request,
  context: { params: { width: string; height: string } }
) {
  const { width, height } = context.params;
  const w = encodeURIComponent(width);
  const h = encodeURIComponent(height);
  const url = `https://picsum.photos/${w}/${h}`;
  return NextResponse.redirect(url);
} 