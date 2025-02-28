interface Book {
  id: Number;
  title: string;
  author: string;
  genre: string;
  rating: Number;
  totalCopies: Number;
  availableCopies: Number;
  description: string;
  coverColor: string;
  coverUrl: string;
  video?: string;
  summary: string;
  isLoanedBook?: Boolean;
}

interface AuthCredentials {
  fullName: string;
  email: string;
  password: string;
  universityId: number;
  universityCard: string;
}
