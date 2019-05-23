export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  media: {
    images: Array<IImageData>;
  };
}

interface IImageData {
  id: number;
  description: string;
  thumbnailUrl: string;
  regularUrl: string;
}
