import { Plus, Minus } from "lucide-react";
import type { MenuItem, CartItem } from "@/data/menuData";

interface MenuItemCardProps {
  item: MenuItem;
  cartItem?: CartItem;
  onAdd: (item: MenuItem) => void;
  onRemove: (id: string) => void;
}

const MenuItemCard = ({ item, cartItem, onAdd, onRemove }: MenuItemCardProps) => {
  const qty = cartItem?.quantity || 0;

  return (
    <div className="flex items-center justify-between rounded-xl bg-card p-4 shadow-sm border border-border transition-shadow hover:shadow-md">
      <div className="flex items-center gap-3 min-w-0">
        <span
          className={`inline-block h-3 w-3 shrink-0 rounded-sm border-2 ${
            item.isVeg ? "border-green-600 bg-green-600" : "border-red-600 bg-red-600"
          }`}
          title={item.isVeg ? "Vegetarian" : "Non-Vegetarian"}
        />
        <div className="min-w-0">
          <p className="font-body font-semibold text-foreground text-sm truncate">{item.name}</p>
          <p className="font-body font-bold text-primary text-base">₹{item.price}</p>
        </div>
      </div>

      {qty === 0 ? (
        <button
          onClick={() => onAdd(item)}
          className="shrink-0 rounded-lg bg-primary px-4 py-2 font-body text-sm font-semibold text-primary-foreground transition-transform active:scale-95"
        >
          ADD
        </button>
      ) : (
        <div className="flex shrink-0 items-center gap-2 rounded-lg bg-primary/10 px-1 py-1">
          <button
            onClick={() => onRemove(item.id)}
            className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground transition-transform active:scale-90"
          >
            <Minus size={16} />
          </button>
          <span className="w-6 text-center font-body font-bold text-foreground">{qty}</span>
          <button
            onClick={() => onAdd(item)}
            className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground transition-transform active:scale-90"
          >
            <Plus size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuItemCard;
