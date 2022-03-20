export type Movie = {
  id: string;
  title: string;
  thumbnail: string;
  synopsis: string;
  rating: number;
  year: number;
  duration: number;
  release_date: Date;
  category_id: string;
  category: string;
}

export type GetMoviesData = {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
}