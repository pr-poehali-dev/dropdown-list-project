import WarehouseItemDropdown from "@/components/WarehouseItemDropdown";
import WarehouseStats from "@/components/WarehouseStats";
import WarehouseTable from "@/components/WarehouseTable";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Icon name="Warehouse" size={32} className="text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              Система управления складом
            </h1>
          </div>
          <p className="text-gray-600">
            Управление товарами и контроль остатков
          </p>
        </div>

        {/* Stats */}
        <div className="mb-8">
          <WarehouseStats />
        </div>

        {/* Item Dropdown */}
        <div className="mb-8">
          <WarehouseItemDropdown />
        </div>

        {/* Items Table */}
        <div>
          <WarehouseTable />
        </div>
      </div>
    </div>
  );
};

export default Index;
