import { categories } from "@/data/menuData";

interface CategoryNavProps {
  activeCategory: string;
  onSelect: (cat: string) => void;
}

const CategoryNav = ({ activeCategory, onSelect }: CategoryNavProps) => (
  <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border">
    <div className="flex gap-2 overflow-x-auto px-4 py-3 scrollbar-hide">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`shrink-0 rounded-full px-4 py-2 font-body text-sm font-medium transition-colors ${
            activeCategory === cat
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  </div>
);

export default CategoryNav;
