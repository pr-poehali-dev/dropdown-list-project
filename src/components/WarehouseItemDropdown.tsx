import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockWarehouseItems } from "@/data/warehouseData";
import { WarehouseItem } from "@/types/warehouse";
import Icon from "@/components/ui/icon";

const WarehouseItemDropdown = () => {
  const [selectedItem, setSelectedItem] = useState<WarehouseItem | null>(null);

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
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Package" size={20} />
            Выбор товара
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Select
            onValueChange={(value) => {
              const item = mockWarehouseItems.find((item) => item.id === value);
              setSelectedItem(item || null);
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Выберите товар из списка" />
            </SelectTrigger>
            <SelectContent className="max-h-80">
              {mockWarehouseItems.map((item) => (
                <SelectItem key={item.id} value={item.id} className="p-4">
                  <div className="w-full space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-base">
                        {item.name}
                      </span>
                      <Badge
                        className={`${getStatusColor(item.status)} text-xs`}
                      >
                        {getStatusText(item.status)}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Серия:</span>{" "}
                        {item.series}
                      </div>
                      <div>
                        <span className="font-medium">Количество:</span>{" "}
                        {item.quantity} шт.
                      </div>
                      <div>
                        <span className="font-medium">Производитель:</span>{" "}
                        {item.manufacturer}
                      </div>
                      <div>
                        <span className="font-medium">Упаковок:</span>{" "}
                        {item.packageCount} ({item.itemsPerPackage} шт.)
                      </div>
                      <div className="col-span-2">
                        <span className="font-medium">Срок годности:</span>{" "}
                        {new Date(item.expiryDate).toLocaleDateString("ru-RU")}
                      </div>
                    </div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {selectedItem && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Информация о товаре</span>
              <Badge className={getStatusColor(selectedItem.status)}>
                {getStatusText(selectedItem.status)}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Наименование
                  </label>
                  <p className="text-lg font-semibold">{selectedItem.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Серия
                  </label>
                  <p className="text-gray-900">{selectedItem.series}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Производитель
                  </label>
                  <p className="text-gray-900">{selectedItem.manufacturer}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Категория
                  </label>
                  <p className="text-gray-900">{selectedItem.category}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Количество
                  </label>
                  <p className="text-lg font-semibold text-blue-600">
                    {selectedItem.quantity} шт.
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Количество упаковок
                  </label>
                  <p className="text-gray-900">
                    {selectedItem.packageCount} упак.
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Количество в упаковке
                  </label>
                  <p className="text-gray-900">
                    {selectedItem.itemsPerPackage} шт.
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Срок годности
                  </label>
                  <p className="text-gray-900">
                    {new Date(selectedItem.expiryDate).toLocaleDateString(
                      "ru-RU",
                    )}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default WarehouseItemDropdown;
