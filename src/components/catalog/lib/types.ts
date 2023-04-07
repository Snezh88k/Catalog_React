export interface Filter {
  startPrice?: number;
  endPrice?: number;
  manufacturers: string[];
  search: string;
  sort: string;
  sortOrder: "asc" | "desc";
}

export interface Item {
  id: string;
  imageUrl: string;
  name: string;
  typeSize: string;
  size: string;
  barcode: string;
  maker: string;
  brend: string;
  description: string;
  price: number;
  scopeOfApplication: string[];
}
