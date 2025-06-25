import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockWarehouseItems } from "@/data/warehouseData";
import Icon from "@/components/ui/icon";

const WarehouseStats = () => {
  const totalItems = mockWarehouseItems.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );
  const lowStockItems = mockWarehouseItems.filter(
    (item) => item.status === "low-stock",
  ).length;
  const expiredItems = mockWarehouseItems.filter(
    (item) => item.status === "expired",
  ).length;
  const inStockItems = mockWarehouseItems.filter(
    (item) => item.status === "in-stock",
  ).length;

  const stats = [
    {
      title: "Всего товаров",
      value: totalItems,
      icon: "Package",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "В наличии",
      value: inStockItems,
      icon: "CheckCircle",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Мало на складе",
      value: lowStockItems,
      icon: "AlertTriangle",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      title: "Просроченные",
      value: expiredItems,
      icon: "XCircle",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-full ${stat.bgColor}`}>
              <Icon name={stat.icon as any} size={16} className={stat.color} />
            </div>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${stat.color}`}>
              {stat.value}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default WarehouseStats;
