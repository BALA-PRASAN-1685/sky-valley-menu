import { ShoppingCart } from "lucide-react";
import type { CartItem } from "@/data/menuData";

interface CartBarProps {
  cart: CartItem[];
  tableNumber: number;
}

const CartBar = ({ cart, tableNumber }: CartBarProps) => {
  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const handleOrder = () => {
    const lines = cart.map(
      (i) => `• ${i.name} x${i.quantity} — ₹${i.price * i.quantity}`
    );
    const message = [
      `🏨 *Sky Valley Resort*`,
      `📋 *New Order — Table ${tableNumber}*`,
      ``,
      ...lines,
      ``,
      `*Total: ₹${totalPrice}*`,
    ].join("\n");

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/918886362815?text=${encoded}`, "_blank");
  };

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-30 p-4">
      <button
        onClick={handleOrder}
        className="flex w-full items-center justify-between rounded-2xl bg-secondary px-6 py-4 font-body text-secondary-foreground shadow-xl transition-transform active:scale-[0.98]"
      >
        <div className="flex items-center gap-3">
          <ShoppingCart size={22} />
          <span className="font-semibold">
            {totalItems} item{totalItems > 1 ? "s" : ""} — ₹{totalPrice}
          </span>
        </div>
        <span className="rounded-xl bg-primary px-5 py-2 text-sm font-bold text-primary-foreground">
          ORDER NOW
        </span>
      </button>
    </div>
  );
};

export default CartBar;
