import { mockPhotos } from "@/models/photo";
import { NextResponse } from "next/server";

// Define an asynchronous function named 'GET' representing the HTTP GET request handler.
const GET = async () => {
  try {
    // Check if the mockPhotos array is empty. If so, throw an error to handle it in the catch block.
    if (!mockPhotos.length) {
      throw new Error();
    }

    // If mockPhotos is not empty, return a JSON response containing the mock photo data.
    return NextResponse.json({ photos: mockPhotos });
  } catch (error) {
    // Catch any errors that occurred in the try block and return a JSON response with a 404 status code,
    // indicating that no photos were found.
    return NextResponse.json({ message: "No photos found!" }, { status: 404 });
  }
};

export { GET };
