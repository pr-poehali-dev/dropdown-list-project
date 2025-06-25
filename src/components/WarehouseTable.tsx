import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockWarehouseItems } from "@/data/warehouseData";
import Icon from "@/components/ui/icon";

const WarehouseTable = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "in-stock":
        return "bg-green-100 text-green-800";
      case "low-stock":
        return "bg-yellow-100 text-yellow-800";
      case "out-of-stock":
        return "bg-red-100 text-red-800";
      case "expired":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "in-stock":
        return "В наличии";
      case "low-stock":
        return "Мало";
      case "out-of-stock":
        return "Нет в наличии";
      case "expired":
        return "Просрочен";
      default:
        return "Неизвестно";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="List" size={20} />
          Все товары на складе
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Наименование</TableHead>
              <TableHead>Производитель</TableHead>
              <TableHead>Серия</TableHead>
              <TableHead>Количество</TableHead>
              <TableHead>Срок годности</TableHead>
              <TableHead>Статус</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockWarehouseItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.manufacturer}</TableCell>
                <TableCell>{item.series}</TableCell>
                <TableCell>{item.quantity} шт.</TableCell>
                <TableCell>
                  {new Date(item.expiryDate).toLocaleDateString("ru-RU")}
                </TableCell>
                <TableCell>
                  <Badge className={getStatusColor(item.status)}>
                    {getStatusText(item.status)}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default WarehouseTable;
