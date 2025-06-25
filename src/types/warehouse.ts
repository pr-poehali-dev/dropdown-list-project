export interface WarehouseItem {
  id: string;
  name: string;
  series: string;
  manufacturer: string;
  quantity: number;
  packageCount: number;
  itemsPerPackage: number;
  expiryDate: string;
  category: string;
  status: "in-stock" | "low-stock" | "out-of-stock" | "expired";
}

export interface WarehouseStats {
  totalItems: number;
  lowStockItems: number;
  expiredItems: number;
  totalValue: number;
}
