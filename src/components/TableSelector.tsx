interface TableSelectorProps {
  tableNumber: number;
  onChange: (t: number) => void;
}

const TableSelector = ({ tableNumber, onChange }: TableSelectorProps) => (
  <div className="px-4 py-3">
    <label className="font-body text-sm font-medium text-muted-foreground mb-2 block">
      Select Your Table
    </label>
    <div className="grid grid-cols-5 gap-2">
      {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          onClick={() => onChange(n)}
          className={`rounded-xl py-2.5 font-body text-sm font-semibold transition-colors ${
            tableNumber === n
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-muted text-muted-foreground hover:bg-accent"
          }`}
        >
          {n}
        </button>
      ))}
    </div>
  </div>
);

export default TableSelector;
