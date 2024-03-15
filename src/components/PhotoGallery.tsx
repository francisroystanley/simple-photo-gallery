import Image from "next/image";
import { Photo } from "@/models/photo";

type Props = {
  photos: Photo[];
};

// Improvements
// - Dynamic Image Sourcing: Optimize images on-the-fly based on user's device and viewport
// - Pagination / Infinite Scrolling: To handle large sets of photos
// - Error Handling: Proper error handling for API request and image loading
// - Accessibility: Add support to screen readers
// - Responsive Design: Better responsiveness across different screen sizes

const PhotoGallery = ({ photos }: Props) => (
  <div className="flex gap-[20px] justify-center flex-wrap">
    {photos.map(photo => (
      <Image
        key={photo.id}
        src={photo.url}
        alt={photo.caption}
        width={2400}
        height={2400}
        priority
        placeholder="blur"
        blurDataURL={photo.thumbnailUrl}
      />
    ))}
  </div>
);

export { PhotoGallery };
