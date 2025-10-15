import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest){
  // TODO: verify signature, amounts, and origin; then mark order paid.
  return NextResponse.json({ ok: true });
}
