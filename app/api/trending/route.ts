import { NextResponse } from 'next/server';

const trending = [
  // Women
  'black midi dress',
  'summer dresses',
  'pleated midi skirt',
  'wide leg trousers women',
  'satin shirt',
  'linen blazer',
  'oversized t-shirt women',
  'mom jeans',
  'straight fit jeans women',
  'ankle boots women',
  'chelsea boots women',
  'white sneakers women',
  'sports bra high support',
  'high waist leggings',
  'bikini set',
  
  // Men
  'linen shirt men',
  'formal shirt men',
  'work trousers men',
  'cargo pants men',
  'slim fit chinos',
  'oversized hoodie',
  'puffer jacket men',
  'regular fit jeans men',
  'loafers men',
  'white sneakers men',

  // Kids & Baby
  'kids party dress',
  'boys joggers',
  'girls denim jacket',
  'baby onesies',

  // Accessories & Bags
  'crossbody bag',
  'leather tote bag',
  'gold hoop earrings',
  'sunglasses women',

  // Home
  'linen duvet cover',
  'scented candle',
];

export async function GET() {
  return NextResponse.json({
    trending,
    updatedAt: Date.now(),
  });
} 