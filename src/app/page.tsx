import { PhotoGallery } from "@/components/PhotoGallery";

const getPhotos = async () => {
  const res = await fetch("http://localhost:3000/api/photos", {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });

  if (!res.ok) {
    return [];
  }

  return res.json();
};

const Page = async () => {
  const { photos } = await getPhotos();

  return <PhotoGallery photos={photos} />;
};

export default Page;
