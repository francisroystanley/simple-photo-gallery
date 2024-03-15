type Photo = {
  id: number;
  url: string;
  caption: string;
  thumbnailUrl: string;
};

const mockPhotos: Photo[] = [
  {
    id: 1,
    caption: "Hello Peter!",
    thumbnailUrl: "https://dummyjson.com/image/150x150/A56C78?text=Hello+Peter!&fontFamily=bitter&fontSize=16",
    url: "https://dummyjson.com/image/2400x2400/A56C78?text=Hello+Peter!&fontFamily=bitter&fontSize=128"
  },
  {
    id: 2,
    caption: "Hello James!",
    thumbnailUrl: "https://dummyjson.com/image/150x150/F789D0?text=Hello+James!&fontFamily=cairo&fontSize=16",
    url: "https://dummyjson.com/image/2400x2400/F789D0?text=Hello+James!&fontFamily=cairo&fontSize=128"
  },
  {
    id: 3,
    caption: "Hello Clyde!",
    thumbnailUrl: "https://dummyjson.com/image/150x150/A78901?text=Hello+Clyde!&fontFamily=cookie&fontSize=16",
    url: "https://dummyjson.com/image/2400x2400/A78901?text=Hello+Clyde!&fontFamily=cookie&fontSize=128"
  },
  {
    id: 4,
    caption: "Hello Nathan!",
    thumbnailUrl: "https://dummyjson.com/image/150x150/789456?text=Hello+Nathan!&fontFamily=comfortaa&fontSize=16",
    url: "https://dummyjson.com/image/2400x2400/789456?text=Hello+Nathan!&fontFamily=comfortaa&fontSize=128"
  },
  {
    id: 5,
    caption: "Hello Chris!",
    thumbnailUrl: "https://dummyjson.com/image/150x150/282828?text=Hello+Chris!&fontFamily=cookie&fontSize=16",
    url: "https://dummyjson.com/image/2400x2400/282828?text=Hello+Chris!&fontFamily=cookie&fontSize=128"
  },
  {
    id: 6,
    caption: "Hello Joseph!",
    thumbnailUrl: "https://dummyjson.com/image/150x150/321654?text=Hello+Joseph!&fontFamily=dosis&fontSize=16",
    url: "https://dummyjson.com/image/2400x2400/321654?text=Hello+Joseph!&fontFamily=dosis&fontSize=128"
  },
  {
    id: 7,
    caption: "Hello Shiela!",
    thumbnailUrl: "https://dummyjson.com/image/150x150/741ABF?text=Hello+Shiela!&fontFamily=gotham&fontSize=16",
    url: "https://dummyjson.com/image/2400x2400/741ABF?text=Hello+Shiela!&fontFamily=gotham&fontSize=128"
  },
  {
    id: 8,
    caption: "Hello Catherine!",
    thumbnailUrl: "https://dummyjson.com/image/150x150/F0F8A9?text=Hello+Catherine!&fontFamily=lobster&fontSize=16",
    url: "https://dummyjson.com/image/2400x2400/F0F8A9?text=Hello+Catherine!&fontFamily=lobster&fontSize=128"
  },
  {
    id: 9,
    caption: "Hello Steven!",
    thumbnailUrl: "https://dummyjson.com/image/150x150/C5C6B7?text=Hello+Steven!&fontFamily=marhey&fontSize=16",
    url: "https://dummyjson.com/image/2400x2400/C5C6B7?text=Hello+Steven!&fontFamily=marhey&fontSize=128"
  },
  {
    id: 10,
    caption: "Hello Erika!",
    thumbnailUrl: "https://dummyjson.com/image/150x150/A9F8E5?text=Hello+Erika!&fontFamily=poppins&fontSize=16",
    url: "https://dummyjson.com/image/2400x2400/A9F8E5?text=Hello+Erika!&fontFamily=poppins&fontSize=128"
  }
];

export { mockPhotos, type Photo };
