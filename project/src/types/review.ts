export type Review = {
  hotelId: number;
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
}

export type ReviewComment = {
  hotelId: number;
  comment: string;
  rating: number;
};

export type Reviews = Review[];
