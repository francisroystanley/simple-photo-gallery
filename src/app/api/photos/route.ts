import { mockPhotos } from "@/models/photo";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const GET = async () => {
  try {
    if (!mockPhotos.length) {
      throw new Error();
    }

    return NextResponse.json({ photos: mockPhotos });
  } catch (error) {
    return NextResponse.json({ message: "No photos found!" }, { status: 404 });
  }
};

export { GET };
