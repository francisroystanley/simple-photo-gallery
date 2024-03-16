import Image from "next/image";
import { Photo } from "@/models/photo";

type Props = {
  photos: Photo[];
};

// Future improvements to consider:
// - Dynamic Image Sourcing: Optimize images on-the-fly based on user's device and viewport
// - Pagination / Infinite Scrolling: To handle large sets of photos more efficiently
// - Error Handling: Proper error handling for API request failures and image loading errors
// - Accessibility: Enhance support for screen readers to improve accessibility
// - Responsive Design: Ensure better responsiveness across different screen sizes

/**
 * PhotoGallery component that displays a collection of images.
 * @param photos Array of Photo objects used to display images in the gallery.
 * @returns A JSX element rendering the photos in a responsive grid.
 */
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
