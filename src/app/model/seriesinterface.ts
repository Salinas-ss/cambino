export interface Serie {
  id: number;
  name: string;
  language: string;
  genres: string[];
  rating: {
    average: number;
  };
  image: {
    medium: string;
    original: string;
  };
}