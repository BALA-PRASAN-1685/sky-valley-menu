import { useState, useRef, useCallback } from "react";
import heroImg from "@/assets/hero-food.jpg";
import { menuItems, categories, type MenuItem, type CartItem } from "@/data/menuData";
import CategoryNav from "@/components/CategoryNav";
import MenuItemCard from "@/components/MenuItemCard";
import CartBar from "@/components/CartBar";
import TableSelector from "@/components/TableSelector";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [tableNumber, setTableNumber] = useState(1);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const addToCart = useCallback((item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCart((prev) =>
      prev
        .map((c) => (c.id === id ? { ...c, quantity: c.quantity - 1 } : c))
        .filter((c) => c.quantity > 0)
    );
  }, []);

  const handleCategorySelect = (cat: string) => {
    setActiveCategory(cat);
    sectionRefs.current[cat]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background font-body pb-28">
      {/* Hero */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={heroImg}
          alt="Sky Valley Resort cuisine"
          className="h-full w-full object-cover"
          width={1280}
          height={720}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, hsl(213 55% 20% / 0.85), transparent)' }} />
        <div className="absolute bottom-4 left-4 right-4">
          <h1 className="font-display text-2xl font-bold text-white">Sky Valley Resort</h1>
          <p className="font-body text-sm text-white/80">Premium Dining Experience</p>
        </div>
      </div>

      {/* Table Selector */}
      <TableSelector tableNumber={tableNumber} onChange={setTableNumber} />

      {/* Category Nav */}
      <CategoryNav activeCategory={activeCategory} onSelect={handleCategorySelect} />

      {/* Menu Sections */}
      <div className="px-4 pt-4">
        {categories.map((cat) => {
          const items = menuItems.filter((i) => i.category === cat);
          return (
            <div
              key={cat}
              ref={(el) => { sectionRefs.current[cat] = el; }}
              className="mb-6 scroll-mt-16"
            >
              <h2 className="font-display text-lg font-bold text-foreground mb-3">{cat}</h2>
              <div className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    cartItem={cart.find((c) => c.id === item.id)}
                    onAdd={addToCart}
                    onRemove={removeFromCart}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Sticky Cart */}
      <CartBar cart={cart} tableNumber={tableNumber} />
    </div>
  );
};

export default Index;
