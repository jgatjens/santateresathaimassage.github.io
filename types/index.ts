export interface Post {
  body: string;
  id: number;
  title: string;
}

export interface ISeo {
  id: number;
  metaTitle: string;
  metaDescription: string;
  metaKeyboards: string;
  metaImage: any;
}

export interface IHireMe {
  id: number;
  external: boolean;
  image: any | null;
  text: string;
  url: string;
}

export interface IProfile {
  id: number;
  title: string;
  description: string;
  location: string;
  image: any | null;
}

