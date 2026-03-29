export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  isVeg: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export const categories = [
  "Veg Starters",
  "Chicken Starters",
  "Prawns Starters",
  "Apollo Fish Starters",
  "Egg Starters",
  "Veg Soups",
  "Non Veg Soups",
  "Veg Curries",
  "Non Veg Curries",
  "Egg Curries",
  "Veg Biryani",
  "Non Veg Biryani",
  "Fried Rice",
  "Roti",
  "Mojitos, Milkshakes & Juices",
] as const;

export const menuItems: MenuItem[] = [
  // === VEG STARTERS ===
  { id: "vs1", name: "Classic Fries", price: 99, category: "Veg Starters", isVeg: true },
  { id: "vs2", name: "Peri Peri Fries", price: 109, category: "Veg Starters", isVeg: true },
  { id: "vs3", name: "Veg Onion Pakoda", price: 169, category: "Veg Starters", isVeg: true },
  { id: "vs4", name: "Veg Stics", price: 189, category: "Veg Starters", isVeg: true },
  { id: "vs5", name: "Crispy Veg", price: 189, category: "Veg Starters", isVeg: true },
  { id: "vs6", name: "Cheese Balls (10 pcs)", price: 249, category: "Veg Starters", isVeg: true },
  { id: "vs7", name: "Veg Bullets (10 pcs)", price: 249, category: "Veg Starters", isVeg: true },
  { id: "vs8", name: "Gobi Manchurian", price: 189, category: "Veg Starters", isVeg: true },
  { id: "vs9", name: "Gobi Chilli", price: 189, category: "Veg Starters", isVeg: true },
  { id: "vs10", name: "Gobi 65", price: 189, category: "Veg Starters", isVeg: true },
  { id: "vs11", name: "Gobi Salt & Pepper", price: 189, category: "Veg Starters", isVeg: true },
  { id: "vs12", name: "Mushroom Pepper Dry", price: 229, category: "Veg Starters", isVeg: true },
  { id: "vs13", name: "Mushroom Manchurian", price: 229, category: "Veg Starters", isVeg: true },
  { id: "vs14", name: "Chilli Mushroom", price: 229, category: "Veg Starters", isVeg: true },
  { id: "vs15", name: "Mushroom - 65", price: 229, category: "Veg Starters", isVeg: true },
  { id: "vs16", name: "Mushroom Salt & Pepper", price: 239, category: "Veg Starters", isVeg: true },
  { id: "vs17", name: "Mushroom Hot Garlic", price: 239, category: "Veg Starters", isVeg: true },
  { id: "vs18", name: "Paneer Manchurian", price: 289, category: "Veg Starters", isVeg: true },
  { id: "vs19", name: "Chilli Paneer", price: 289, category: "Veg Starters", isVeg: true },
  { id: "vs20", name: "Paneer 65", price: 289, category: "Veg Starters", isVeg: true },
  { id: "vs21", name: "Paneer Salt & Pepper", price: 289, category: "Veg Starters", isVeg: true },
  { id: "vs22", name: "Paneer Majestic", price: 289, category: "Veg Starters", isVeg: true },
  { id: "vs23", name: "Paneer KFC", price: 289, category: "Veg Starters", isVeg: true },
  { id: "vs24", name: "Drago Paneer", price: 299, category: "Veg Starters", isVeg: true },
  { id: "vs25", name: "Babycorn Manchurian", price: 249, category: "Veg Starters", isVeg: true },
  { id: "vs26", name: "Chilli Babycorn", price: 249, category: "Veg Starters", isVeg: true },
  { id: "vs27", name: "Babycorn 65", price: 249, category: "Veg Starters", isVeg: true },
  { id: "vs28", name: "Babycorn Majestic", price: 249, category: "Veg Starters", isVeg: true },
  { id: "vs29", name: "Gold Fried Babycorn", price: 269, category: "Veg Starters", isVeg: true },

  // === CHICKEN STARTERS ===
  { id: "cs1", name: "Chicken Paper Dry", price: 329, category: "Chicken Starters", isVeg: false },
  { id: "cs2", name: "Chill Chicken", price: 329, category: "Chicken Starters", isVeg: false },
  { id: "cs3", name: "Chicken Manchurian", price: 299, category: "Chicken Starters", isVeg: false },
  { id: "cs4", name: "Chicken Pakoda", price: 299, category: "Chicken Starters", isVeg: false },
  { id: "cs5", name: "Chicken Fry", price: 299, category: "Chicken Starters", isVeg: false },
  { id: "cs6", name: "Chicken - 65", price: 299, category: "Chicken Starters", isVeg: false },
  { id: "cs7", name: "Chicken - 555", price: 329, category: "Chicken Starters", isVeg: false },
  { id: "cs8", name: "Chicken Lollipop (5pcs)", price: 349, category: "Chicken Starters", isVeg: false },
  { id: "cs9", name: "Chicken Drumsticks", price: 349, category: "Chicken Starters", isVeg: false },
  { id: "cs10", name: "Chicken Majestic", price: 349, category: "Chicken Starters", isVeg: false },
  { id: "cs11", name: "Kaju Chicken", price: 359, category: "Chicken Starters", isVeg: false },
  { id: "cs12", name: "Chicken Ghee Roast", price: 349, category: "Chicken Starters", isVeg: false },
  { id: "cs13", name: "Lemon Chicken", price: 329, category: "Chicken Starters", isVeg: false },
  { id: "cs14", name: "Garlic Chicken", price: 329, category: "Chicken Starters", isVeg: false },
  { id: "cs15", name: "Ginger Chicken", price: 329, category: "Chicken Starters", isVeg: false },
  { id: "cs16", name: "Hon Kong Chicken", price: 359, category: "Chicken Starters", isVeg: false },
  { id: "cs17", name: "Dragon Chicken", price: 359, category: "Chicken Starters", isVeg: false },

  // === PRAWNS STARTERS ===
  { id: "ps1", name: "Prawns Manchurian", price: 359, category: "Prawns Starters", isVeg: false },
  { id: "ps2", name: "Chilli Prawns", price: 359, category: "Prawns Starters", isVeg: false },
  { id: "ps3", name: "Prawns - 65", price: 359, category: "Prawns Starters", isVeg: false },
  { id: "ps4", name: "Loose Prawns", price: 349, category: "Prawns Starters", isVeg: false },
  { id: "ps5", name: "Prawns Fry", price: 349, category: "Prawns Starters", isVeg: false },
  { id: "ps6", name: "Golden Fried Prawns", price: 359, category: "Prawns Starters", isVeg: false },

  // === APOLLO FISH STARTERS ===
  { id: "af1", name: "Fish Manchurian", price: 329, category: "Apollo Fish Starters", isVeg: false },
  { id: "af2", name: "Chilli Fish", price: 329, category: "Apollo Fish Starters", isVeg: false },
  { id: "af3", name: "Fish Fry", price: 329, category: "Apollo Fish Starters", isVeg: false },
  { id: "af4", name: "Fish - 65", price: 329, category: "Apollo Fish Starters", isVeg: false },
  { id: "af5", name: "Fish Finger", price: 339, category: "Apollo Fish Starters", isVeg: false },
  { id: "af6", name: "Fish Tawa", price: 339, category: "Apollo Fish Starters", isVeg: false },

  // === EGG STARTERS ===
  { id: "es1", name: "Egg Manchurian", price: 179, category: "Egg Starters", isVeg: false },
  { id: "es2", name: "Egg Pakoda", price: 179, category: "Egg Starters", isVeg: false },
  { id: "es3", name: "Egg - 65", price: 179, category: "Egg Starters", isVeg: false },
  { id: "es4", name: "Chilli Egg", price: 179, category: "Egg Starters", isVeg: false },
  { id: "es5", name: "Egg Bhurji", price: 189, category: "Egg Starters", isVeg: false },
  { id: "es6", name: "Egg Omlet", price: 59, category: "Egg Starters", isVeg: false },
  { id: "es7", name: "Egg Poach", price: 59, category: "Egg Starters", isVeg: false },

  // === VEG SOUPS ===
  { id: "vsp1", name: "Cream of Tomato Soup", price: 119, category: "Veg Soups", isVeg: true },
  { id: "vsp2", name: "Cream of Mushroom Soup", price: 119, category: "Veg Soups", isVeg: true },
  { id: "vsp3", name: "Veg Sweet Corn Soup", price: 119, category: "Veg Soups", isVeg: true },
  { id: "vsp4", name: "Veg Manchow Soup", price: 119, category: "Veg Soups", isVeg: true },
  { id: "vsp5", name: "Veg Lemon Coriender Soup", price: 119, category: "Veg Soups", isVeg: true },
  { id: "vsp6", name: "Veg Hot and Sour Soup", price: 119, category: "Veg Soups", isVeg: true },

  // === NON VEG SOUPS ===
  { id: "nsp1", name: "Chicken Hot and Sour Soup", price: 129, category: "Non Veg Soups", isVeg: false },
  { id: "nsp2", name: "Chicken Sweet Corn Soup", price: 129, category: "Non Veg Soups", isVeg: false },
  { id: "nsp3", name: "Chicken Manchow Soup", price: 129, category: "Non Veg Soups", isVeg: false },
  { id: "nsp4", name: "Chicken Lemon Coriander Soup", price: 129, category: "Non Veg Soups", isVeg: false },
  { id: "nsp5", name: "Cream of Chicken Soup", price: 129, category: "Non Veg Soups", isVeg: false },
  { id: "nsp6", name: "Chicken Thai Soup", price: 129, category: "Non Veg Soups", isVeg: false },

  // === VEG CURRIES ===
  { id: "vc1", name: "Dal Fry", price: 159, category: "Veg Curries", isVeg: true },
  { id: "vc2", name: "Dal Tadka", price: 159, category: "Veg Curries", isVeg: true },
  { id: "vc3", name: "Butter Dal", price: 169, category: "Veg Curries", isVeg: true },
  { id: "vc4", name: "Dal Kolhapuri", price: 169, category: "Veg Curries", isVeg: true },
  { id: "vc5", name: "Dal Methi", price: 179, category: "Veg Curries", isVeg: true },
  { id: "vc6", name: "Veg Kurma Curry", price: 199, category: "Veg Curries", isVeg: true },
  { id: "vc7", name: "Kaju Curry", price: 299, category: "Veg Curries", isVeg: true },
  { id: "vc8", name: "Kaju Paneer", price: 299, category: "Veg Curries", isVeg: true },
  { id: "vc9", name: "Kaju Tomato", price: 299, category: "Veg Curries", isVeg: true },
  { id: "vc10", name: "Kaju Kolhapuri", price: 309, category: "Veg Curries", isVeg: true },
  { id: "vc11", name: "Mixed Veg Curry", price: 239, category: "Veg Curries", isVeg: true },
  { id: "vc12", name: "Kadai Veg", price: 239, category: "Veg Curries", isVeg: true },
  { id: "vc13", name: "Veg Kolhapuri", price: 249, category: "Veg Curries", isVeg: true },
  { id: "vc14", name: "Veg Hydrabadi", price: 239, category: "Veg Curries", isVeg: true },
  { id: "vc15", name: "Veg Malai Kofta", price: 309, category: "Veg Curries", isVeg: true },
  { id: "vc16", name: "Paneer Butter Masala", price: 299, category: "Veg Curries", isVeg: true },
  { id: "vc17", name: "Kadai Paneer", price: 299, category: "Veg Curries", isVeg: true },
  { id: "vc18", name: "Paneer Kolhapuri", price: 319, category: "Veg Curries", isVeg: true },
  { id: "vc19", name: "Paneer Tikka Masala", price: 319, category: "Veg Curries", isVeg: true },
  { id: "vc20", name: "Methi Chaman", price: 309, category: "Veg Curries", isVeg: true },
  { id: "vc21", name: "Mushroom Curry", price: 249, category: "Veg Curries", isVeg: true },
  { id: "vc22", name: "Kadai Mushroom", price: 249, category: "Veg Curries", isVeg: true },
  { id: "vc23", name: "Mushroom Kolhapuri", price: 249, category: "Veg Curries", isVeg: true },
  { id: "vc24", name: "Tomato Masala Curry", price: 179, category: "Veg Curries", isVeg: true },

  // === NON VEG CURRIES ===
  { id: "nc1", name: "Prawns Curry", price: 359, category: "Non Veg Curries", isVeg: false },
  { id: "nc2", name: "Fish Curry (Apollo)", price: 339, category: "Non Veg Curries", isVeg: false },
  { id: "nc3", name: "Chicken Curry", price: 359, category: "Non Veg Curries", isVeg: false },
  { id: "nc4", name: "AP Chicken Curry (B)", price: 399, category: "Non Veg Curries", isVeg: false },
  { id: "nc5", name: "AP Chicken Curry (BL)", price: 369, category: "Non Veg Curries", isVeg: false },
  { id: "nc6", name: "Kadai Chicken Curry (B)", price: 309, category: "Non Veg Curries", isVeg: false },
  { id: "nc7", name: "Kadai Chicken Curry (BL)", price: 299, category: "Non Veg Curries", isVeg: false },
  { id: "nc8", name: "Handi Chicken Curry", price: 299, category: "Non Veg Curries", isVeg: false },
  { id: "nc9", name: "Gongura Chicken Curry", price: 319, category: "Non Veg Curries", isVeg: false },
  { id: "nc10", name: "Butter Chicken Curry", price: 319, category: "Non Veg Curries", isVeg: false },
  { id: "nc11", name: "Mughlai Chicken Curry", price: 319, category: "Non Veg Curries", isVeg: false },
  { id: "nc12", name: "Hydrabadi Chicken Curry", price: 319, category: "Non Veg Curries", isVeg: false },
  { id: "nc13", name: "Chicken Holhapuri Curry", price: 319, category: "Non Veg Curries", isVeg: false },
  { id: "nc14", name: "Chicken Chettinad Curry", price: 319, category: "Non Veg Curries", isVeg: false },
  { id: "nc15", name: "Punjabi Chicken Curry", price: 319, category: "Non Veg Curries", isVeg: false },
  { id: "nc16", name: "Aafgani Chicken Curry", price: 319, category: "Non Veg Curries", isVeg: false },
  { id: "nc17", name: "Chicken Tikka Masala", price: 319, category: "Non Veg Curries", isVeg: false },

  // === EGG CURRIES ===
  { id: "ec1", name: "Egg Curry", price: 169, category: "Egg Curries", isVeg: false },
  { id: "ec2", name: "Egg Keema Curry", price: 169, category: "Egg Curries", isVeg: false },
  { id: "ec3", name: "Egg Masala", price: 179, category: "Egg Curries", isVeg: false },

  // === VEG BIRYANI ===
  { id: "vb1", name: "Veg Dum Biriyani", price: 220, category: "Veg Biryani", isVeg: true },
  { id: "vb2", name: "Baby Corn Biriyani", price: 250, category: "Veg Biryani", isVeg: true },
  { id: "vb3", name: "Paneer Biriyani", price: 299, category: "Veg Biryani", isVeg: true },
  { id: "vb4", name: "Kaju Biriyani", price: 329, category: "Veg Biryani", isVeg: true },
  { id: "vb5", name: "Kaju Paneer Biriyani", price: 349, category: "Veg Biryani", isVeg: true },
  { id: "vb6", name: "Mushroom Biriyani", price: 279, category: "Veg Biryani", isVeg: true },
  { id: "vb7", name: "Biriyani Rice", price: 169, category: "Veg Biryani", isVeg: true },

  // === NON VEG BIRYANI ===
  { id: "nb1", name: "Chicken Dum Biriyani", price: 299, category: "Non Veg Biryani", isVeg: false },
  { id: "nb2", name: "Chicken Fry Biriyani", price: 299, category: "Non Veg Biryani", isVeg: false },
  { id: "nb3", name: "SPL Chicken Biriyani", price: 329, category: "Non Veg Biryani", isVeg: false },
  { id: "nb4", name: "Chicken Mughlai Biriyani", price: 349, category: "Non Veg Biryani", isVeg: false },
  { id: "nb5", name: "Chicken Lollipop Biriyani (4pcs)", price: 379, category: "Non Veg Biryani", isVeg: false },
  { id: "nb6", name: "Dilkush Biriyani", price: 379, category: "Non Veg Biryani", isVeg: false },
  { id: "nb7", name: "Chicken Fried Wings Biriyani (6pcs)", price: 369, category: "Non Veg Biryani", isVeg: false },
  { id: "nb8", name: "Rambo Chicken Biriyani", price: 349, category: "Non Veg Biryani", isVeg: false },
  { id: "nb9", name: "Egg Biriyani", price: 249, category: "Non Veg Biryani", isVeg: false },
  { id: "nb10", name: "SPL Apollo Fish Biriyani", price: 379, category: "Non Veg Biryani", isVeg: false },
  { id: "nb11", name: "SPL Prawns Biriyani", price: 379, category: "Non Veg Biryani", isVeg: false },

  // === FRIED RICE ===
  { id: "fr1", name: "Veg Fried Rice", price: 189, category: "Fried Rice", isVeg: true },
  { id: "fr2", name: "Paneer Fried Rice", price: 249, category: "Fried Rice", isVeg: true },
  { id: "fr3", name: "Mushroom Fried Rice", price: 209, category: "Fried Rice", isVeg: true },
  { id: "fr4", name: "Ghee Rice", price: 219, category: "Fried Rice", isVeg: true },
  { id: "fr5", name: "Jeera Rice", price: 209, category: "Fried Rice", isVeg: true },
  { id: "fr6", name: "Kaju Fried Rice", price: 289, category: "Fried Rice", isVeg: true },
  { id: "fr7", name: "Egg Fried Rice", price: 229, category: "Fried Rice", isVeg: false },
  { id: "fr8", name: "Chicken Fried Rice", price: 289, category: "Fried Rice", isVeg: false },
  { id: "fr9", name: "Mixed Veg Fried Rice", price: 279, category: "Fried Rice", isVeg: true },
  { id: "fr10", name: "Mixed Non Veg Fried Rice", price: 369, category: "Fried Rice", isVeg: false },
  { id: "fr11", name: "White Rice", price: 50, category: "Fried Rice", isVeg: true },
  { id: "fr12", name: "Curd Rice", price: 110, category: "Fried Rice", isVeg: true },
  { id: "fr13", name: "Sp Chicken Fried Rice", price: 299, category: "Fried Rice", isVeg: false },

  // === ROTI ===
  { id: "rt1", name: "Roti", price: 29, category: "Roti", isVeg: true },
  { id: "rt2", name: "Butter Roti", price: 39, category: "Roti", isVeg: true },
  { id: "rt3", name: "Pulka", price: 15, category: "Roti", isVeg: true },
  { id: "rt4", name: "Butter Pilka", price: 29, category: "Roti", isVeg: true },
  { id: "rt5", name: "Ghee Pulka", price: 29, category: "Roti", isVeg: true },

  // === MOJITOS, MILKSHAKES & JUICES ===
  { id: "bv1", name: "Vennila Shake", price: 120, category: "Mojitos, Milkshakes & Juices", isVeg: true },
  { id: "bv2", name: "Chocolate Shake", price: 130, category: "Mojitos, Milkshakes & Juices", isVeg: true },
  { id: "bv3", name: "Mango Shake", price: 130, category: "Mojitos, Milkshakes & Juices", isVeg: true },
  { id: "bv4", name: "Butter Scotch Shake", price: 130, category: "Mojitos, Milkshakes & Juices", isVeg: true },
  { id: "bv5", name: "Lime Mint Mojito", price: 119, category: "Mojitos, Milkshakes & Juices", isVeg: true },
  { id: "bv6", name: "Green Apple Mojito", price: 119, category: "Mojitos, Milkshakes & Juices", isVeg: true },
  { id: "bv7", name: "Water Bottle 1L", price: 25, category: "Mojitos, Milkshakes & Juices", isVeg: true },
  { id: "bv8", name: "Water Bottle 0.5L", price: 15, category: "Mojitos, Milkshakes & Juices", isVeg: true },
  { id: "bv9", name: "Lassi (Sweet/Salt)", price: 60, category: "Mojitos, Milkshakes & Juices", isVeg: true },
  { id: "bv10", name: "Butter Milk", price: 45, category: "Mojitos, Milkshakes & Juices", isVeg: true },
  { id: "bv11", name: "Lime Juice", price: 45, category: "Mojitos, Milkshakes & Juices", isVeg: true },
  { id: "bv12", name: "Cool Drinks (250ml)", price: 25, category: "Mojitos, Milkshakes & Juices", isVeg: true },
  { id: "bv13", name: "Cool Drinks (200ml)", price: 15, category: "Mojitos, Milkshakes & Juices", isVeg: true },
];
