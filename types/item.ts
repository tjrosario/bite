export interface Item {
  alt?: string;
  description: string;
  height?: number;
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  quantity?: number;
  showDescription?: boolean;
  width?: number;
}

export type ItemsState = {
  items: Item[];
};
