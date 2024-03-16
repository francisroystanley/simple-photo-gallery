import { Photo } from "@/models/photo";
import * as handler from "../app/api/photos/route";

// Test suite for /api/photos endpoint
describe("/api/photos", () => {
  it("returns a list of photos under concurrent access", async () => {
    // Concurrently request photos multiple times to simulate concurrent access
    await Promise.all(
      Array.from({ length: 5 }).map(async () => {
        // Perform GET request to retrieve photos
        const res = await handler.GET();
        const { photos } = await res.json();

        // Check if response is successful and photos are in the expected format
        expect(res.status).toBe(200);
        expect(photos).toEqual(
          expect.arrayContaining<Photo>([
            expect.objectContaining({
              id: expect.any(Number),
              url: expect.any(String),
              caption: expect.any(String),
              thumbnailUrl: expect.any(String)
            })
          ])
        );
      })
    );
  });
});
