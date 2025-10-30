# Punk Rock Online Store

A React-based e-commerce store with a punk rock theme. Add products to your cart, manage quantities, and checkout!

## What This Project Has

### Pages
- [x] **Home** - Landing page
- [x] **Catalog** - Browse and shop products
- [x] **About** - Learn about the store
- [x] **Contact** - Get in touch
- [x] **Admin** - Add new products (admin panel)
- [x] **Cart** - Review items and checkout

### Features
- Add products to cart
- Adjust quantities in cart
- Remove items from cart
- Cart persists after page refresh (localStorage)
- Shopping cart modal when adding items
- Responsive design (works on mobile, tablet, desktop)
- Punk rock themed UI

## Built With

- **React** - Frontend framework
- **React Router** - Page navigation
- **Context API** - State management (cart & user)
- **localStorage** - Data persistence
- **CSS** - Custom styling

## How to Run This Project

### 1. Clone the repository
Download the project to your computer:
```bash
git clone https://github.com/micahweathers/-109-My-React-Store
```

### 2. Go into the project folder
Navigate to the project:
```bash
cd -109-My-React-Store
```

### 3. Install dependencies
Download all the packages the project needs:
```bash
npm install
```

### 4. Start the development server
Run the project locally:
```bash
npm run dev
```

## How to Use

1. **Browse Products** - Go to the Catalog page
2. **Add to Cart** - Click "Add to Cart" on any product
3. **View Cart** - Click the cart icon in the navbar
4. **Adjust Quantities** - Use the quantity selector in cart
5. **Remove Items** - Click "Remove" to delete items
6. **Checkout** - Click the checkout button (currently non-functional)

## Data Storage

- Cart items are saved to your browser's localStorage
- Data persists even after closing the browser
- Refresh the page and your cart will still be there!

## Notes

- This is a learning project for Course 109
- Checkout button is styled but not connected to payment processing
- Product data is stored in component state (not a real database)

## Author

**Micah Weathers**  
Cohort 61
