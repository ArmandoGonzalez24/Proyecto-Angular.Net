export interface IProducto {
  id?: number | undefined;
  name: string;
  price: number;
  categoryId: number;
  score: number;
  imageUrl?: string | undefined;
}
