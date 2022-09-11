export interface Photo {
  id: number;
  owner: number;
  secret: number;
  server: number;
  farm: number;
  title: string;
  ispublic: boolean;
  isfriend: boolean;
  isfamily: boolean;
}

export interface Photos {
  page: number;
  pages: number;
  perpage: number;
  total: number;
  photo: Photo[];
}

export interface APIData {
  photos: Photos;
  stat: string;
}
