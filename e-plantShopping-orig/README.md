# e-plantShopping

## Project Description

**e-plantShopping** is a full-featured, production-ready online plant shopping application built with **React** and **Redux Toolkit**. The application allows users to browse a rich catalog of plants organized into multiple categories, manage a dynamic **shopping cart**, update item quantities, remove items, and view real-time **total cost calculations** — all without any page reloads.

---

## Features

### React-Powered UI
The entire application is built using **React** functional components with hooks. State management for UI toggling (landing page vs. product listing) is handled with React's `useState` hook, enabling seamless, dynamic view transitions without routing or page reloads. Clicking the **Get Started** button on the landing page dynamically switches the view to the ProductList without requiring a page reload.

### Redux Toolkit State Management
Global cart state is managed using **Redux Toolkit**. A dedicated `CartSlice` defines reducers for all cart operations: adding items, removing items, and updating quantities. The Redux store is configured with `configureStore` and provided to the entire React component tree via the `Provider` component.

### Shopping Cart
The shopping cart page (`CartItem`) reads directly from the Redux store and displays all items the user has added. Each cart item shows the plant name, image, unit price, current quantity, and the line total. Users can increment or decrement quantities or remove items entirely. All changes are reflected immediately in the UI.

### Plant Categories
The product catalog (`ProductList`) is organized into **multiple plant categories**:
- **Air Purifying Plants** — plants known for improving indoor air quality
- **Aromatic Fragrant Plants** — plants prized for their scent and sensory appeal
- **Insect Repellent Plants** — plants that naturally deter pests
- **Medicinal Plants** — plants with known health and wellness uses
- **Low Maintenance Plants** — ideal for busy plant owners or beginners
- **Pet Friendly Plants** — safe choices for households with cats and dogs

Each category contains a minimum of six plants, totaling over 18 plants across the catalog. Every plant entry includes a unique `id`, `name`, `price`, `thumbnail` image, and `category`.

### Quantity Updates
Users can increment or decrement the quantity of any item directly from the cart using dedicated buttons. Quantity changes dispatch the `updateQuantity` action to the Redux store, and the UI updates immediately to reflect the new quantity and recalculated line total.

### Remove Item Functionality
Each cart item includes a **Remove** button that dispatches the `removeItem` action to the Redux store, completely removing that plant from the cart. The grand total recalculates automatically after removal.

### Total Cost Calculations
The cart page calculates and displays:
- **Item total** — unit price × quantity for each individual item
- **Cart grand total** — the sum of all item totals, updated dynamically whenever quantities change or items are removed

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI components and local state (`useState`) |
| Redux Toolkit | Global cart state management |
| React-Redux | Connecting React components to the Redux store |
| Vite | Development server and build tooling |
| CSS3 | Styling, layout, and background imagery |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

---

## Project Structure

```
e-plantShopping/
├── public/
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx        # Company information page
│   │   ├── CartItem.jsx       # Shopping cart page
│   │   └── ProductList.jsx    # Plant catalog with categories
│   ├── redux/
│   │   ├── CartSlice.jsx      # Redux Toolkit slice (addItem, removeItem, updateQuantity)
│   │   └── store.js           # Redux store configuration
│   ├── App.jsx                # Root component with landing page and useState
│   └── App.css                # Global styles and background image
├── README.md
└── package.json
```

---

## License

MIT
