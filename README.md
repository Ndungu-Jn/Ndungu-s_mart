# 🛒 Electronics Store - Product Listing App

A modern, responsive product listing interface for electronics built with **React + Vite**, styled using **Tailwind CSS**, and powered by **Redux Toolkit** for state management. It features product CRUD operations, image upload, search filtering, pagination and a shopping cart system — all using **dummy JSON data**.

---

## 🚀 Features

- 🧩 Product CRUD (Create, Read, Update, Delete)
- 🖼️ Image upload (via FileReader base64)
- 📦 Shopping cart (add/remove items)
- 🔍 Search bar (filter by product name)
- 📄 Pagination (custom page navigation)
- 🧠 State management with Redux Toolkit
- 🧭 Routing with React Router
- 🎨 Clean, responsive UI with TailwindCSS

---

## 🧠 Technologies Used

| Tech             | Purpose                   |
| ---------------- | ------------------------- |
| React            | Component-based UI        |
| Vite             | Fast bundler/dev server   |
| Tailwind CSS     | Utility-first CSS styling |
| Redux Toolkit    | State management          |
| React Router DOM | SPA routing               |

---

## 🧪 Dummy Product Example

```js
// src/data/dummyData.js
export const products = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    price: 999,
    description: "Latest Apple smartphone",
    image: "",
  },
  {
    id: 2,
    name: "Samsung Galaxy S22",
    price: 899,
    description: "High-end Android phone",
    image: "",
  },
];
```

---

## 🧰 CRUD via Redux

- `productsSlice.js` manages adding, editing, and deleting products.
- `cartSlice.js` manages the shopping cart items.

---

## 🖼️ Image Upload

Handled in the product form using `<input type="file">` and `FileReader` to convert to base64:

---

## 🛒 Cart Management

Redux-powered cart lets you:

- Add product to cart
- Remove individual items
- Clear the entire cart
- Display cart total

---

## 🙋‍♂️ Author

**John Ndungu**  
[GitHub](https://github.com/Ndungu-Jn) 
