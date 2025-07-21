import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  const items = await prisma.menuItem.findMany();
  return Response.json(items);
}

export async function POST(req: Request) {
  const data = await req.json();
  const newItem = await prisma.menuItem.create({ data });
  return Response.json(newItem);
}
