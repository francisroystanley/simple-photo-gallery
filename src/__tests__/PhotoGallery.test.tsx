import { Photo } from "@/models/photo";
import * as handler from "../app/api/photos/route";

describe("/api/photos", () => {
  it("returns a list of photos under concurrent access", async () => {
    Promise.all(
      Array.from({ length: 5 }).map(async () => {
        const res = await handler.GET();
        const { photos } = await res.json();

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
