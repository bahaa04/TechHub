async function initLayout() {
  const cartCount = await fetch('/api/cart').then(r => r.json()).then(items => items.reduce((sum, item) => sum + item.qty, 0)).catch(() => 0);

  document.body.insertAdjacentHTML('afterbegin', `
    <header>
      <div class="container">
        <h1>TechHub</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/products.html">Products</a>
          <a href="/cart.html">Cart${cartCount > 0 ? `<span class="badge">${cartCount}</span>` : ''}</a>
          <a href="/about.html">About</a>
        </nav>
      </div>
    </header>
  `);

  document.body.insertAdjacentHTML('beforeend', `
    <footer>
      <div class="container">
        <p>&copy; 2026 TechHub. All rights reserved.</p>
      </div>
    </footer>
  `);
}

initLayout();
