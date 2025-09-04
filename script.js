// FILE: script.js
// 🚀 TrueLife ULTRA-BEAST E-commerce Platform 🚀
// Premium Features | Gen-Z UX | High-Conversion | Mobile-First | EPIC Animations
// Production-Ready Static MVP with CLEAN REAL IMAGES ONLY!

(function() {
  'use strict';

  // 💎 ULTRA-PREMIUM CONSTANTS
  const CURRENCY = 'INR';
  const FREE_SHIPPING_THRESHOLD = 999;
  const FLAT_SHIPPING = 49;
  const COUNTDOWN_HOURS = 24;
  const ANIMATION_SPEED = 300;
  const HEARTBEAT_DURATION = 2500;

  // 🎯 CATCHY PROMO CODES COLLECTION
  const PROMOS = {
    // Launch Specials
    FIRST50: { type: 'fixed', value: 50, min: 199, label: '₹50 Off First Order!', emoji: '🎉', category: 'launch' },
    LAUNCH50: { type: 'fixed', value: 50, min: 299, label: '₹50 Launch Special!', emoji: '🚀', category: 'launch' },
    NEWBIE: { type: 'percent', value: 15, max: 150, min: 199, label: '15% Off Welcome!', emoji: '👋', category: 'welcome' },
    
    // Sports & Performance
    SPORTS20: { type: 'percent', value: 20, max: 200, min: 399, label: '20% Sports Discount!', emoji: '🏆', category: 'sports' },
    ATHLETE: { type: 'percent', value: 25, max: 300, min: 599, label: '25% Athlete Special!', emoji: '💪', category: 'sports' },
    CHAMPION: { type: 'fixed', value: 100, min: 799, label: '₹100 Champion Savings!', emoji: '🏅', category: 'sports' },
    
    // Seasonal & Trendy
    SUMMER: { type: 'percent', value: 18, max: 180, min: 299, label: '18% Summer Vibes!', emoji: '☀️', category: 'seasonal' },
    MONSOON: { type: 'fixed', value: 75, min: 499, label: '₹75 Monsoon Magic!', emoji: '🌧️', category: 'seasonal' },
    WEEKEND: { type: 'percent', value: 12, max: 120, min: 199, label: '12% Weekend Treat!', emoji: '🎈', category: 'weekend' },
    
    // Gen-Z Catchy Codes
    SLAY: { type: 'percent', value: 22, max: 220, min: 399, label: '22% Slay Discount!', emoji: '💅', category: 'genz' },
    VIBES: { type: 'fixed', value: 60, min: 349, label: '₹60 Good Vibes Only!', emoji: '✨', category: 'genz' },
    FLEX: { type: 'percent', value: 17, max: 170, min: 299, label: '17% Flex Savings!', emoji: '💎', category: 'genz' },
    GOALS: { type: 'fixed', value: 80, min: 599, label: '₹80 Goals Achieved!', emoji: '🎯', category: 'genz' },
    
    // VIP & Premium
    VIP: { type: 'percent', value: 30, max: 400, min: 999, label: '30% VIP Access!', emoji: '👑', category: 'vip' },
    PREMIUM: { type: 'fixed', value: 150, min: 1199, label: '₹150 Premium Member!', emoji: '🌟', category: 'vip' },
    
    // Flash & Limited Time
    FLASH: { type: 'percent', value: 20, max: 200, min: 299, label: '20% Flash Sale!', emoji: '⚡', category: 'flash' },
    BLITZ: { type: 'fixed', value: 90, min: 599, label: '₹90 Blitz Deal!', emoji: '💥', category: 'flash' },
    
    // Loyalty & Referral
    LOYAL: { type: 'percent', value: 16, max: 160, min: 399, label: '16% Loyalty Bonus!', emoji: '🤝', category: 'loyalty' },
    FRIEND: { type: 'fixed', value: 70, min: 499, label: '₹70 Friend Referral!', emoji: '👥', category: 'loyalty' }
  };

  // 🌟 ENHANCED PRODUCT CATALOG WITH REAL IMAGES
  const PRODUCTS = [
    {
      id: 1, sku: 'TL-ACH-001', name: 'Anti-Chlorine Shampoo', category: 'Hair Care',
      was: 549, now: 349, stock: 3, benefit: 'Flush chlorine & hydrate hair',
      image: 'images/anti-chlorine-shampoo.jpg',
      rating: 4.8, reviews: 127, trending: true,
      tags: ['chlorine-protection', 'swimmers', 'hair-care'], 
      description: 'Professional-grade shampoo that removes chlorine buildup and restores moisture.',
      features: ['Removes 99% chlorine', 'Deep hydration', 'Color protection', 'Daily use safe']
    },
    {
      id: 2, sku: 'TL-HSS-002', name: 'Hair Sunscreen', category: 'Sun Protection', 
      was: 549, now: 399, stock: 12, benefit: 'SPF30 UV hair shield',
      image: 'images/hair-sunscreen.JPG',
      rating: 4.6, reviews: 94, newArrival: true,
      tags: ['sun-protection', 'outdoor', 'uv-shield'],
      description: 'Lightweight spray providing comprehensive UV protection for hair.',
      features: ['SPF 30 protection', 'Water-resistant', 'Non-greasy formula', 'All hair types']
    },
    {
      id: 3, sku: 'TL-HSE-003', name: 'Hair Serum', category: 'Hair Care',
      was: 699, now: 449, stock: 8, benefit: 'Repair & ultra shine',
      image: 'images/hair-serum.jpg',
      rating: 4.9, reviews: 156, bestSeller: true,
      tags: ['repair', 'shine', 'anti-frizz', 'premium'],
      description: 'Advanced recovery serum with keratin and natural oils for damaged hair.',
      features: ['Instant shine', 'Frizz control', 'Heat protection', 'Keratin enriched']
    },
    {
      id: 4, sku: 'TL-BC-004', name: 'Barrier Cream', category: 'Skin Protection',
      was: 699, now: 499, stock: 15, benefit: 'Ultimate skin barrier',
      image: 'https://via.placeholder.com/600x400?text=Testing',
      rating: 4.7, reviews: 203, 
      tags: ['protection', 'barrier', 'weather-proof', 'long-lasting'],
      description: 'Multi-purpose barrier cream protecting against environmental damage.',
      features: ['24h protection', 'Weather resistant', 'Anti-chafing', 'Healing botanicals']
    },
    {
      id: 5, sku: 'TL-SNS-005', name: 'Sweat Neutralizing Skin Spray', category: 'Body Care',
      was: 399, now: 299, stock: 2, benefit: 'Neutralize odor instantly',
      image: 'images/sweat-spray.jpg',
      rating: 4.5, reviews: 89, limitedEdition: true,
      tags: ['odor-control', 'fresh', 'antibacterial', 'sport'],
      description: 'Revolutionary spray that neutralizes odor-causing bacteria naturally.',
      features: ['12h freshness', 'Natural ingredients', 'Skin-friendly', 'Quick absorption']
    }
  ];

  // 🎨 STATE MANAGEMENT
  let cart = JSON.parse(localStorage.getItem('truelife_cart')) || [];
  let wishlist = JSON.parse(localStorage.getItem('truelife_wishlist')) || [];
  let recentlyViewed = JSON.parse(localStorage.getItem('truelife_recent')) || [];
  let appliedPromo = JSON.parse(localStorage.getItem('truelife_promo')) || null;
  let userPreferences = JSON.parse(localStorage.getItem('truelife_preferences')) || {
    currency: 'INR',
    notifications: true,
    animations: true,
    theme: 'light'
  };

  // 🔧 ULTRA-UTILITIES
  const $ = id => document.getElementById(id);
  const $$ = sel => document.querySelectorAll(sel);
  const formatINR = n => `₹${Number(n).toLocaleString('en-IN')}`;
  const findProduct = id => PRODUCTS.find(p => p.id === Number(id));
  const percentOff = (was, now) => Math.round(((was - now) / was) * 100);
  const randomId = () => Math.random().toString(36).substr(2, 9);
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => { clearTimeout(timeout); func(...args); };
      clearTimeout(timeout); timeout = setTimeout(later, wait);
    };
  };

  // 💾 STORAGE HELPERS
  const save = (key, data) => localStorage.setItem(`truelife_${key}`, JSON.stringify(data));
  const load = key => { try { return JSON.parse(localStorage.getItem(`truelife_${key}`)) || null; } catch { return null; } };
  const saveCart = () => save('cart', cart);
  const saveWishlist = () => save('wishlist', wishlist);
  const saveRecent = () => save('recent', recentlyViewed.slice(0, 10));
  const savePromo = () => appliedPromo ? save('promo', appliedPromo) : localStorage.removeItem('truelife_promo');
  const savePrefs = () => save('preferences', userPreferences);

  // 🎯 ORDER ID GENERATOR (TRL-YYYYMMDD-XXXX format)
  function generateOrderId() {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    const xxxx = Math.floor(1000 + Math.random() * 9000);
    return `TRL-${yyyy}${mm}${dd}-${xxxx}`;
  }

  // 🎪 EPIC ANIMATIONS & EFFECTS
  function heartbeatLoaderOn() {
    const loader = $('loading-screen');
    if (loader) {
      loader.style.display = 'flex';
      loader.classList.remove('fade-out');
      loader.querySelector('.heartbeat-pulse')?.classList.add('mega-pulse');
    }
  }

  function heartbeatLoaderOff() {
    const loader = $('loading-screen');
    if (loader) {
      loader.classList.add('fade-out');
      setTimeout(() => {
        loader.style.display = 'none';
        loader.querySelector('.heartbeat-pulse')?.classList.remove('mega-pulse');
      }, 500);
    }
  }

  // 🎉 ENHANCED TOAST NOTIFICATIONS
  function showToast(message, type = 'success', duration = 4000) {
    const container = $('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'polite');

    const icons = {
      success: 'fa-check-circle',
      error: 'fa-exclamation-circle', 
      warning: 'fa-exclamation-triangle',
      info: 'fa-info-circle',
      love: 'fa-heart',
      fire: 'fa-fire',
      star: 'fa-star'
    };

    toast.innerHTML = `
      <div class="toast-icon">
        <i class="fas ${icons[type] || icons.success}"></i>
      </div>
      <div class="toast-content">
        <div class="toast-message">${message}</div>
      </div>
      <button class="toast-close" onclick="this.parentElement.remove()">
        <i class="fas fa-times"></i>
      </button>
    `;

    container.appendChild(toast);
    
    requestAnimationFrame(() => {
      toast.classList.add('toast-show');
    });

    setTimeout(() => {
      toast.classList.add('toast-fadeout');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, duration);

    if (userPreferences.notifications) {
      playNotificationSound(type);
    }
  }

  // 🔊 SOUND EFFECTS
  function playNotificationSound(type) {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      const frequencies = {
        success: 800,
        error: 400,
        warning: 600,
        info: 700
      };
      
      oscillator.frequency.setValueAtTime(frequencies[type] || 700, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
      // Gracefully handle browsers without audio support
    }
  }

  // 🛍️ ENHANCED PRODUCT RENDERING WITH CLEAN IMAGES
  function renderProductsGrid() {
    const grid = $('product-container');
    if (!grid) return;

    grid.innerHTML = PRODUCTS.map(product => {
      const saveAmount = product.was - product.now;
      const discountPercent = percentOff(product.was, product.now);
      
      let stockBadge = '';
      if (product.stock <= 0) {
        stockBadge = '<div class="stock-badge out-of-stock">Out of Stock</div>';
      } else if (product.stock <= 5) {
        stockBadge = `<div class="stock-badge low-stock pulse-glow">Only ${product.stock} left!</div>`;
      } else {
        stockBadge = '<div class="stock-badge in-stock">In Stock</div>';
      }

      let specialBadges = '';
      if (product.bestSeller) specialBadges += '<div class="special-badge best-seller">🏆 Best Seller</div>';
      if (product.newArrival) specialBadges += '<div class="special-badge new-arrival">✨ New</div>';
      if (product.trending) specialBadges += '<div class="special-badge trending">🔥 Trending</div>';
      if (product.limitedEdition) specialBadges += '<div class="special-badge limited">💎 Limited</div>';

      const fullStars = Math.floor(product.rating);
      const hasHalf = product.rating % 1 >= 0.5;
      let stars = '';
      for (let i = 0; i < fullStars; i++) stars += '★';
      if (hasHalf) stars += '½';
      for (let i = Math.ceil(product.rating); i < 5; i++) stars += '☆';

      return `
        <div class="product-card epic-hover" data-id="${product.id}">
          <div class="product-image-container">
            <div class="product-image">
              <img src="${product.image}" alt="${product.name}" class="product-img" 
                   onerror="this.style.display='none';" loading="lazy">
              <div class="discount-badge mega-shine">-${discountPercent}%</div>
              ${stockBadge}
              ${specialBadges}
            </div>
            
            <div class="product-overlay">
              <button class="quick-view-btn" onclick="app.quickView(${product.id})" aria-label="Quick view">
                <i class="fas fa-eye"></i>
              </button>
              <button class="wishlist-btn ${wishlist.includes(product.id) ? 'active' : ''}" 
                      onclick="app.toggleWishlist(${product.id})" aria-label="Add to wishlist">
                <i class="fas fa-heart"></i>
              </button>
            </div>
          </div>
          
          <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-benefit">${product.benefit}</p>
            
            <div class="product-rating">
              <span class="stars">${stars}</span>
              <span class="rating-number">${product.rating}</span>
              <span class="reviews-count">(${product.reviews})</span>
            </div>
            
            <div class="product-pricing animate-pulse">
              <span class="original-price">${formatINR(product.was)}</span>
              <span class="current-price glow-text">${formatINR(product.now)}</span>
              <span class="savings-badge rainbow-bg">Save ${formatINR(saveAmount)}</span>
            </div>
            
            <div class="product-actions">
              <button class="btn-add-to-cart epic-btn" 
                      onclick="app.addToCart(${product.id})" 
                      ${product.stock <= 0 ? 'disabled' : ''}>
                <i class="fas fa-cart-plus"></i>
                <span class="btn-text">${product.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}</span>
                <div class="btn-shine"></div>
              </button>
              
              <button class="btn-buy-now fire-btn" 
                      onclick="app.buyNow(${product.id})" 
                      ${product.stock <= 0 ? 'disabled' : ''}>
                <i class="fas fa-bolt"></i>
                <span>Buy Now</span>
              </button>
            </div>
            
            <div class="demo-pricing">*demo pricing for development*</div>
          </div>
        </div>
      `;
    }).join('');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    grid.querySelectorAll('.product-card').forEach(card => {
      observer.observe(card);
    });
  }

  // 🛒 ULTRA-ENHANCED CART OPERATIONS
  function addToCart(productId, quantity = 1, showFeedback = true) {
    const product = findProduct(productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    const currentQty = existing ? existing.qty : 0;
    
    if (product.stock <= 0) {
      showToast('Sorry, this item is out of stock! 😔', 'error');
      return;
    }

    if (currentQty + quantity > product.stock) {
      showToast(`Only ${product.stock} items available! 📦`, 'warning');
      return;
    }

    if (existing) {
      existing.qty += quantity;
    } else {
      cart.push({
        id: product.id,
        sku: product.sku,
        name: product.name,
        price: product.now,
        originalPrice: product.was,
        qty: quantity,
        addedAt: Date.now(),
        image: product.image
      });
    }

    addToRecentlyViewed(productId);
    saveCart();
    updateCartUI();
    
    if (showFeedback) {
      showToast(`${product.name} added to cart! 🛒✨`, 'success');
      animateCartButton();
      triggerSuccessConfetti();
    }
  }

  function removeFromCart(productId) {
    const product = findProduct(productId);
    cart = cart.filter(item => item.id !== Number(productId));
    saveCart();
    updateCartUI();
    
    if (window.location.pathname.includes('cart.html')) {
      renderCartPage();
    }
    
    showToast(`${product?.name || 'Item'} removed from cart 🗑️`, 'info');
  }

  function updateQuantity(productId, newQty) {
    const item = cart.find(item => item.id === Number(productId));
    const product = findProduct(productId);
    
    if (!item || !product) return;
    
    const quantity = Math.max(1, Math.min(Number(newQty) || 1, product.stock));
    
    if (quantity > product.stock) {
      showToast(`Only ${product.stock} available! 📦`, 'warning');
      return;
    }
    
    item.qty = quantity;
    saveCart();
    updateCartUI();
    
    if (window.location.pathname.includes('cart.html')) {
      updateCartTotals();
    }
  }

  // 💝 WISHLIST OPERATIONS
  function toggleWishlist(productId) {
    const product = findProduct(productId);
    const index = wishlist.indexOf(productId);
    
    if (index !== -1) {
      wishlist.splice(index, 1);
      showToast(`${product.name} removed from wishlist 💔`, 'info');
    } else {
      wishlist.push(productId);
      showToast(`${product.name} added to wishlist! 💖`, 'love');
    }
    
    saveWishlist();
    updateWishlistUI();
  }

  function addToRecentlyViewed(productId) {
    recentlyViewed = recentlyViewed.filter(id => id !== productId);
    recentlyViewed.unshift(productId);
    recentlyViewed = recentlyViewed.slice(0, 10);
    saveRecent();
  }

  // 📊 CART CALCULATIONS
  function getSubtotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  }

  function getShipping() {
    const subtotal = getSubtotal();
    return subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : FLAT_SHIPPING;
  }

  function getPromoDiscount() {
    if (!appliedPromo) return 0;
    
    const promo = PROMOS[appliedPromo.code];
    if (!promo) return 0;
    
    const subtotal = getSubtotal();
    if (subtotal < (promo.min || 0)) return 0;
    
    if (promo.type === 'fixed') {
      return promo.value;
    } else if (promo.type === 'percent') {
      const discount = Math.floor((subtotal * promo.value) / 100);
      return Math.min(discount, promo.max || discount);
    }
    
    return 0;
  }

  function getTotals() {
    const subtotal = getSubtotal();
    const shipping = getShipping();
    const discount = getPromoDiscount();
    const total = Math.max(0, subtotal + shipping - discount);
    
    return { subtotal, shipping, discount, total };
  }

  // 🎨 UI UPDATES
  function updateCartUI() {
    const itemCount = cart.reduce((total, item) => total + item.qty, 0);
    const { total } = getTotals();
    
    const cartCount = $('cart-count');
    const miniCartCount = $('mini-cart-count');
    const miniCartTotal = $('mini-cart-total');
    
    if (cartCount) cartCount.textContent = itemCount;
    if (miniCartCount) miniCartCount.textContent = itemCount;
    if (miniCartTotal) miniCartTotal.textContent = total.toLocaleString('en-IN');
    
    const miniCart = $('mini-cart');
    if (miniCart) {
      miniCart.style.display = itemCount > 0 ? 'flex' : 'none';
      if (itemCount > 0) {
        miniCart.classList.add('cart-pulse');
        setTimeout(() => miniCart.classList.remove('cart-pulse'), 600);
      }
    }
    
    updateShippingProgress();
  }

  function updateWishlistUI() {
    $$('.wishlist-btn').forEach(btn => {
      const card = btn.closest('.product-card');
      if (card) {
        const productId = Number(card.dataset.id);
        btn.classList.toggle('active', wishlist.includes(productId));
      }
    });
  }

  function updateShippingProgress() {
    const subtotal = getSubtotal();
    const progressFill = $('shipping-progress-fill') || $('progress-fill');
    const progressText = $('shipping-progress-text') || $('progress-text');
    
    if (!progressFill || !progressText) return;
    
    const progress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
    progressFill.style.width = `${progress}%`;
    
    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
      progressText.innerHTML = '🎉 You qualify for FREE shipping!';
      progressFill.classList.add('complete');
    } else {
      const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
      progressText.innerHTML = `Add ${formatINR(remaining)} more for FREE shipping! 🚚`;
      progressFill.classList.remove('complete');
    }
  }

  // 🎪 MEGA ANIMATIONS
  function animateCartButton() {
    const cartBtn = $('cart-btn');
    if (cartBtn) {
      cartBtn.classList.add('cart-bounce', 'glow-pulse');
      setTimeout(() => {
        cartBtn.classList.remove('cart-bounce', 'glow-pulse');
      }, 600);
    }
  }

  function triggerSuccessConfetti() {
    const colors = ['#0066cc', '#4CAF50', '#FF9800', '#e91e63'];
    for (let i = 0; i < 15; i++) {
      createConfettiPiece(colors[Math.floor(Math.random() * colors.length)]);
    }
  }

  function createConfettiPiece(color) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece';
    confetti.style.cssText = `
      position: fixed;
      width: 8px;
      height: 8px;
      background: ${color};
      left: ${Math.random() * window.innerWidth}px;
      top: -10px;
      z-index: 10000;
      border-radius: 50%;
      pointer-events: none;
      animation: confetti-fall ${2 + Math.random() * 2}s linear forwards;
    `;
    
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4000);
  }

  // 🛒 CART PAGE RENDERING WITH CLEAN IMAGES
  function renderCartPage() {
    const cartItemsContainer = $('cart-items');
    const emptyCartMessage = $('empty-cart');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '';
      if (emptyCartMessage) emptyCartMessage.style.display = 'block';
      return;
    }
    
    if (emptyCartMessage) emptyCartMessage.style.display = 'none';
    
    cartItemsContainer.innerHTML = cart.map(item => {
      const product = findProduct(item.id);
      const maxStock = product ? product.stock : 99;
      
      return `
        <div class="cart-item animate-slide-in" data-id="${item.id}">
          <div class="cart-item-image">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img" 
                 onerror="this.style.display='none';" loading="lazy">
          </div>
          
          <div class="cart-item-details">
            <h4 class="cart-item-name">${item.name}</h4>
            <p class="cart-item-sku">SKU: ${item.sku}</p>
            <div class="cart-item-price">
              ${item.originalPrice > item.price ? 
                `<span class="was-price">${formatINR(item.originalPrice)}</span>` : ''}
              <span class="current-price">${formatINR(item.price)}</span>
            </div>
          </div>
          
          <div class="cart-item-controls">
            <div class="quantity-controls">
              <button class="qty-btn decrease" onclick="app.updateQuantity(${item.id}, ${item.qty - 1})" 
                      ${item.qty <= 1 ? 'disabled' : ''}>
                <i class="fas fa-minus"></i>
              </button>
              <input type="number" class="qty-input" value="${item.qty}" min="1" max="${maxStock}"
                     onchange="app.updateQuantity(${item.id}, this.value)">
              <button class="qty-btn increase" onclick="app.updateQuantity(${item.id}, ${item.qty + 1})"
                      ${item.qty >= maxStock ? 'disabled' : ''}>
                <i class="fas fa-plus"></i>
              </button>
            </div>
            
            <div class="item-total">${formatINR(item.price * item.qty)}</div>
            
            <button class="remove-item-btn" onclick="app.removeFromCart(${item.id})" 
                    title="Remove item" aria-label="Remove from cart">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');
    
    updateCartTotals();
    setupPromoCode();
    updateShippingProgress();
  }

  function updateCartTotals() {
    const { subtotal, shipping, discount, total } = getTotals();
    
    const elements = {
      'cart-subtotal': formatINR(subtotal),
      'cart-shipping': shipping === 0 ? 'FREE' : formatINR(shipping),
      'cart-total': formatINR(total)
    };
    
    Object.keys(elements).forEach(id => {
      const element = $(id);
      if (element) element.textContent = elements[id];
    });
    
    const promoRow = $('promo-discount-row');
    const promoDiscount = $('promo-discount');
    const promoLabel = $('promo-label');
    
    if (promoRow && promoDiscount && promoLabel && discount > 0) {
      promoRow.style.display = 'flex';
      promoLabel.textContent = `Discount (${appliedPromo.code}):`;
      promoDiscount.textContent = `- ${formatINR(discount)}`;
    } else if (promoRow) {
      promoRow.style.display = 'none';
    }
    
    const checkoutBtn = $('checkout-btn');
    if (checkoutBtn) {
      checkoutBtn.disabled = cart.length === 0;
    }
  }

  // 🎫 ENHANCED PROMO CODE SYSTEM
  function setupPromoCode() {
    const promoInput = $('promo-input');
    const applyBtn = $('apply-promo');
    const promoMessage = $('promo-message');
    
    if (!promoInput || !applyBtn || !promoMessage) return;
    
    showPromoSuggestions();
    
    applyBtn.addEventListener('click', applyPromoCode);
    promoInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') applyPromoCode();
    });
    
    promoInput.addEventListener('input', debounce(() => {
      const code = promoInput.value.trim().toUpperCase();
      if (code.length >= 3) {
        validatePromoLive(code);
      }
    }, 500));
  }

  function showPromoSuggestions() {
    const subtotal = getSubtotal();
    const suggestionsContainer = $('promo-suggestions');
    if (!suggestionsContainer) return;
    
    const applicablePromos = Object.entries(PROMOS)
      .filter(([code, promo]) => subtotal >= (promo.min || 0))
      .slice(0, 3);
    
    if (applicablePromos.length === 0) return;
    
    suggestionsContainer.innerHTML = `
      <div class="promo-suggestions-header">💡 Available Offers:</div>
      <div class="promo-chips">
        ${applicablePromos.map(([code, promo]) => `
          <button class="promo-chip" onclick="app.applyPromoQuick('${code}')">
            <span class="promo-emoji">${promo.emoji}</span>
            <span class="promo-code">${code}</span>
            <span class="promo-desc">${promo.label}</span>
          </button>
        `).join('')}
      </div>
    `;
  }

  function validatePromoLive(code) {
    const promoMessage = $('promo-message');
    if (!promoMessage) return;
    
    const promo = PROMOS[code];
    const subtotal = getSubtotal();
    
    if (!promo) {
      promoMessage.innerHTML = '<span class="promo-error">❌ Invalid code</span>';
      return;
    }
    
    if (subtotal < (promo.min || 0)) {
      promoMessage.innerHTML = `<span class="promo-warning">⚠️ Minimum ₹${promo.min} required</span>`;
      return;
    }
    
    promoMessage.innerHTML = `<span class="promo-preview">✅ ${promo.label} - Ready to apply!</span>`;
  }

  function applyPromoCode() {
    const promoInput = $('promo-input');
    const promoMessage = $('promo-message');
    
    if (!promoInput || !promoMessage) return;
    
    const code = promoInput.value.trim().toUpperCase();
    const promo = PROMOS[code];
    const subtotal = getSubtotal();
    
    if (!code) {
      promoMessage.innerHTML = '<span class="promo-error">❌ Please enter a promo code</span>';
      return;
    }
    
    if (!promo) {
      promoMessage.innerHTML = '<span class="promo-error">❌ Invalid promo code</span>';
      triggerShakeAnimation(promoInput);
      return;
    }
    
    if (subtotal < (promo.min || 0)) {
      promoMessage.innerHTML = `<span class="promo-error">❌ Minimum order ₹${promo.min} required</span>`;
      triggerShakeAnimation(promoInput);
      return;
    }
    
    appliedPromo = { code, appliedAt: Date.now() };
    savePromo();
    updateCartTotals();
    
    promoMessage.innerHTML = `<span class="promo-success">🎉 ${promo.label} applied!</span>`;
    promoInput.value = '';
    
    showToast(`Promo code applied! ${promo.emoji}`, 'success');
    triggerSuccessAnimation(promoInput);
  }

  function applyPromoQuick(code) {
    const promoInput = $('promo-input');
    if (promoInput) {
      promoInput.value = code;
      applyPromoCode();
    }
  }

  function removePromoCode() {
    appliedPromo = null;
    savePromo();
    updateCartTotals();
    showPromoSuggestions();
    
    const promoMessage = $('promo-message');
    if (promoMessage) {
      promoMessage.innerHTML = '<span class="promo-info">💡 Enter a promo code for discounts</span>';
    }
    
    showToast('Promo code removed', 'info');
  }

  // 🎨 ANIMATION HELPERS
  function triggerShakeAnimation(element) {
    element.classList.add('shake-animation');
    setTimeout(() => element.classList.remove('shake-animation'), 600);
  }

  function triggerSuccessAnimation(element) {
    element.classList.add('success-glow');
    setTimeout(() => element.classList.remove('success-glow'), 1000);
  }

  // ⏰ COUNTDOWN TIMER (24 HOURS)
  function startCountdownTimer() {
    const hoursEl = $('hours');
    const minutesEl = $('minutes'); 
    const secondsEl = $('seconds');
    
    if (!hoursEl || !minutesEl || !secondsEl) return;
    
    const endTime = Date.now() + (COUNTDOWN_HOURS * 60 * 60 * 1000);
    
    function updateTimer() {
      const now = Date.now();
      const timeLeft = Math.max(0, endTime - now);
      
      if (timeLeft === 0) {
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        return;
      }
      
      const hours = Math.floor(timeLeft / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      
      hoursEl.textContent = String(hours).padStart(2, '0');
      minutesEl.textContent = String(minutes).padStart(2, '0');
      secondsEl.textContent = String(seconds).padStart(2, '0');
      
      if (hours === 0 && minutes < 30) {
        document.querySelector('.countdown-timer')?.classList.add('urgent-pulse');
      }
      
      requestAnimationFrame(() => setTimeout(updateTimer, 1000));
    }
    
    updateTimer();
  }

  // 📱 NAVIGATION & MOBILE MENU
  function setupNavigation() {
    const hamburger = $('hamburger');
    const navMenu = $('nav-menu');
    
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        toggleMobileOverlay();
      });
    }
    
    $$('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          if (navMenu?.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger?.classList.remove('active');
            toggleMobileOverlay();
          }
        }
      });
    });
  }

  function toggleMobileOverlay() {
    let overlay = $('mobile-overlay');
    
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'mobile-overlay';
      overlay.className = 'mobile-overlay';
      overlay.addEventListener('click', () => {
        $('nav-menu')?.classList.remove('active');
        $('hamburger')?.classList.remove('active');
        overlay.remove();
      });
      document.body.appendChild(overlay);
    } else {
      overlay.remove();
    }
  }

  // 🛍️ BUY NOW FUNCTIONALITY  
  function buyNow(productId) {
    addToCart(productId, 1, false);
    showToast('Redirecting to cart... 🚀', 'info', 1500);
    
    setTimeout(() => {
      window.location.href = 'cart.html';
    }, 800);
  }

  // 🎯 QUICK VIEW MODAL WITH CLEAN IMAGES
  function quickView(productId) {
    const product = findProduct(productId);
    if (!product) return;
    
    addToRecentlyViewed(productId);
    
    const modalHTML = `
      <div id="quick-view-modal" class="modal-overlay">
        <div class="modal-content quick-view-content">
          <button class="modal-close" onclick="app.closeQuickView()">
            <i class="fas fa-times"></i>
          </button>
          
          <div class="quick-view-body">
            <div class="quick-view-image">
              <img src="${product.image}" alt="${product.name}" class="quick-view-img"
                   onerror="this.style.display='none';" loading="lazy">
              ${product.bestSeller ? '<div class="badge best-seller">🏆 Best Seller</div>' : ''}
              ${product.newArrival ? '<div class="badge new-arrival">✨ New Arrival</div>' : ''}
            </div>
            
            <div class="quick-view-info">
              <div class="product-category">${product.category}</div>
              <h2 class="product-title">${product.name}</h2>
              <p class="product-description">${product.description}</p>
              
              <div class="product-rating">
                <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}</span>
                <span class="rating-number">${product.rating}</span>
                <span class="reviews-count">(${product.reviews} reviews)</span>
              </div>
              
              <div class="product-features">
                <h4>Key Features:</h4>
                <ul>
                  ${product.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                </ul>
              </div>
              
              <div class="pricing-section">
                <div class="price-display">
                  ${product.was > product.now ? `<span class="was-price">${formatINR(product.was)}</span>` : ''}
                  <span class="current-price">${formatINR(product.now)}</span>
                  ${product.was > product.now ? `<span class="save-amount">Save ${formatINR(product.was - product.now)}</span>` : ''}
                </div>
              </div>
              
              <div class="quantity-selector">
                <label>Quantity:</label>
                <div class="quantity-controls">
                  <button onclick="app.changeQuickViewQty(-1)">-</button>
                  <input type="number" id="quick-view-qty" value="1" min="1" max="${product.stock}">
                  <button onclick="app.changeQuickViewQty(1)">+</button>
                </div>
                <span class="stock-info">${product.stock} available</span>
              </div>
              
              <div class="quick-view-actions">
                <button class="btn-add-to-cart-modal" onclick="app.addToCartFromQuickView(${product.id})">
                  <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
                <button class="btn-buy-now-modal" onclick="app.buyNowFromQuickView(${product.id})">
                  <i class="fas fa-bolt"></i> Buy Now
                </button>
                <button class="btn-wishlist-modal ${wishlist.includes(product.id) ? 'active' : ''}" 
                        onclick="app.toggleWishlistFromQuickView(${product.id})">
                  <i class="fas fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.body.style.overflow = 'hidden';
    
    requestAnimationFrame(() => {
      $('quick-view-modal').classList.add('show');
    });
  }

  function closeQuickView() {
    const modal = $('quick-view-modal');
    if (modal) {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.remove();
        document.body.style.overflow = '';
      }, 300);
    }
  }

  function changeQuickViewQty(delta) {
    const qtyInput = $('quick-view-qty');
    if (qtyInput) {
      const currentQty = parseInt(qtyInput.value) || 1;
      const newQty = Math.max(1, Math.min(currentQty + delta, parseInt(qtyInput.max)));
      qtyInput.value = newQty;
    }
  }

  function addToCartFromQuickView(productId) {
    const qty = parseInt($('quick-view-qty')?.value) || 1;
    addToCart(productId, qty);
    closeQuickView();
  }

  function buyNowFromQuickView(productId) {
    const qty = parseInt($('quick-view-qty')?.value) || 1;
    addToCart(productId, qty, false);
    closeQuickView();
    setTimeout(() => window.location.href = 'cart.html', 500);
  }

  function toggleWishlistFromQuickView(productId) {
    toggleWishlist(productId);
    const btn = $('.btn-wishlist-modal');
    if (btn) {
      btn.classList.toggle('active', wishlist.includes(productId));
    }
  }

  // 💳 CHECKOUT FUNCTIONALITY WITH CLEAN IMAGES
  function renderCheckoutSummary() {
    const checkoutItems = $('checkout-items');
    if (!checkoutItems) return;
    
    checkoutItems.innerHTML = cart.map(item => {
      const product = findProduct(item.id);
      return `
        <div class="checkout-item">
          <div class="checkout-item-image">
            <img src="${item.image}" alt="${item.name}" class="checkout-item-img"
                 onerror="this.style.display='none';" loading="lazy">
          </div>
          <div class="checkout-item-info">
            <div class="checkout-item-name">${item.name}</div>
            <div class="checkout-item-qty">Quantity: ${item.qty}</div>
          </div>
          <div class="checkout-item-price">${formatINR(item.price * item.qty)}</div>
        </div>
      `;
    }).join('');
    
    updateCheckoutTotals();
  }

  function updateCheckoutTotals() {
    const { subtotal, shipping, discount, total } = getTotals();
    
    const elements = {
      'checkout-subtotal': formatINR(subtotal),
      'checkout-shipping': shipping === 0 ? 'FREE' : formatINR(shipping),
      'checkout-total': formatINR(total)
    };
    
    Object.keys(elements).forEach(id => {
      const element = $(id);
      if (element) element.textContent = elements[id];
    });
    
    const promoRow = $('checkout-promo-row');
    const promoDiscount = $('checkout-discount');
    const promoLabel = $('checkout-promo-label');
    
    if (promoRow && promoDiscount && promoLabel && discount > 0) {
      promoRow.style.display = 'flex';
      promoLabel.textContent = `Discount (${appliedPromo.code}):`;
      promoDiscount.textContent = `- ${formatINR(discount)}`;
    } else if (promoRow) {
      promoRow.style.display = 'none';
    }
  }

  function setupCheckoutForm() {
    const form = $('checkout-form');
    const placeOrderBtn = $('place-order-btn');
    
    if (!form || !placeOrderBtn) return;
    
    const phoneInput = $('phone');
    if (phoneInput) {
      phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 10) value = value.slice(0, 10);
        
        if (value.length >= 6) {
          e.target.value = `+91 ${value.slice(0, 5)} ${value.slice(5)}`;
        } else if (value.length > 0) {
          e.target.value = `+91 ${value}`;
        }
      });
    }
    
    const pincodeInput = $('pincode');
    if (pincodeInput) {
      pincodeInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '').slice(0, 6);
      });
    }
    
    placeOrderBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      if (!validateCheckoutForm(form)) {
        showToast('Please fill all required fields correctly', 'error');
        return;
      }
      
      processOrder(form);
    });
  }

  function validateCheckoutForm(form) {
    const requiredFields = form.querySelectorAll('input[required], select[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
      const value = field.value.trim();
      
      if (!value) {
        markFieldAsInvalid(field, 'This field is required');
        isValid = false;
        return;
      }
      
      if (field.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          markFieldAsInvalid(field, 'Please enter a valid email address');
          isValid = false;
        }
      }
      
      if (field.id === 'pincode') {
        if (!/^\d{6}$/.test(value)) {
          markFieldAsInvalid(field, 'Please enter a valid 6-digit PIN code');
          isValid = false;
        }
      }
      
      if (field.type === 'tel') {
        const phoneRegex = /^\+91 \d{5} \d{5}$/;
        if (!phoneRegex.test(value)) {
          markFieldAsInvalid(field, 'Please enter a valid phone number');
          isValid = false;
        }
      }
      
      if (isValid) {
        markFieldAsValid(field);
      }
    });
    
    return isValid;
  }

  function markFieldAsInvalid(field, message) {
    field.classList.add('error');
    
    let errorDiv = field.parentNode.querySelector('.error-message');
    if (!errorDiv) {
      errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      field.parentNode.appendChild(errorDiv);
    }
    
    errorDiv.textContent = message;
    triggerShakeAnimation(field);
  }

  function markFieldAsValid(field) {
    field.classList.remove('error');
    const errorDiv = field.parentNode.querySelector('.error-message');
    if (errorDiv) {
      errorDiv.remove();
    }
  }

  function processOrder(form) {
    heartbeatLoaderOn();
    
    const processingTime = HEARTBEAT_DURATION + Math.random() * 500;
    
    setTimeout(() => {
      completeOrder(form);
    }, processingTime);
  }

  function completeOrder(form) {
    const { subtotal, shipping, discount, total } = getTotals();
    
    const orderData = {
      orderNumber: generateOrderId(),
      orderDate: new Date().toISOString(),
      items: [...cart],
      subtotal, shipping, discount, total,
      shipping: getCustomerInfo(form),
      payment: { method: getSelectedPaymentMethod() },
      appliedPromo: appliedPromo
    };
    
    save('last_order', orderData);
    
    cart = [];
    appliedPromo = null;
    saveCart();
    savePromo();
    
    heartbeatLoaderOff();
    
    window.location.href = 'thanks.html';
  }

  function getCustomerInfo(form) {
    const formData = new FormData(form);
    return {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'), 
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      city: formData.get('city'),
      state: formData.get('state'),
      pincode: formData.get('pincode')
    };
  }

  function getSelectedPaymentMethod() {
    const selectedPayment = document.querySelector('input[name="payment"]:checked');
    const methods = {
      cod: 'Cash on Delivery',
      upi: 'UPI Payment',
      netbanking: 'Net Banking',
      card: 'Credit/Debit Card'
    };
    
    return methods[selectedPayment?.value] || 'Cash on Delivery';
  }

  // 🎉 THANKS PAGE WITH CLEAN IMAGES
  function renderThanksPage() {
    const orderData = load('last_order');
    
    if (!orderData) {
      window.location.href = 'index.html';
      return;
    }
    
    const elements = {
      'display-order-number': orderData.orderNumber,
      'order-date': new Date(orderData.orderDate).toLocaleDateString('en-IN'),
      'payment-method': orderData.payment?.method || 'Not specified',
      'total-amount': formatINR(orderData.total)
    };
    
    Object.keys(elements).forEach(id => {
      const element = $(id);
      if (element) element.textContent = elements[id];
    });
    
    const itemsList = $('ordered-items-list');
    if (itemsList && orderData.items) {
      itemsList.innerHTML = orderData.items.map(item => {
        const product = findProduct(item.id);
        return `
          <div class="order-item">
            <div class="order-item-image">
              <img src="${item.image}" alt="${item.name}" class="order-item-img"
                   onerror="this.style.display='none';" loading="lazy">
            </div>
            <div class="order-item-info">
              <div class="order-item-name">${item.name}</div>
              <div class="order-item-details">Quantity: ${item.qty} × ${formatINR(item.price)}</div>
            </div>
            <div class="order-item-price">${formatINR(item.price * item.qty)}</div>
          </div>
        `;
      }).join('');
    }
    
    const addressDetails = $('shipping-address-details');
    if (addressDetails && orderData.shipping) {
      const customer = orderData.shipping;
      addressDetails.innerHTML = `
        <strong>${customer.firstName} ${customer.lastName}</strong><br>
        ${customer.address}<br>
        ${customer.city}, ${customer.state} ${customer.pincode}<br>
        Phone: ${customer.phone}<br>
        Email: ${customer.email}
      `;
    }
    
    launchMegaConfetti();
    setupOrderTracking();
  }

  function launchMegaConfetti() {
    const colors = ['#0066cc', '#4CAF50', '#FF9800', '#e91e63', '#9c27b0', '#00bcd4'];
    
    for (let burst = 0; burst < 3; burst++) {
      setTimeout(() => {
        for (let i = 0; i < 50; i++) {
          createConfettiPiece(colors[Math.floor(Math.random() * colors.length)]);
        }
      }, burst * 500);
    }
    
    if (!$('confetti-styles')) {
      const style = document.createElement('style');
      style.id = 'confetti-styles';
      style.textContent = `
        @keyframes confetti-fall {
          0% { 
            transform: translateY(-100vh) rotateZ(0deg); 
            opacity: 1; 
          }
          100% { 
            transform: translateY(100vh) rotateZ(720deg); 
            opacity: 0; 
          }
        }
        
        .confetti-piece {
          animation: confetti-fall 3s linear forwards !important;
        }
      `;
      document.head.appendChild(style);
    }
  }

  function setupOrderTracking() {
    const trackingSteps = [
      { status: 'Order Confirmed', time: '2 minutes ago', completed: true },
      { status: 'Payment Processed', time: '1 minute ago', completed: true },
      { status: 'Preparing for Shipment', time: 'In progress...', completed: false },
      { status: 'Out for Delivery', time: 'Estimated in 2-3 days', completed: false },
      { status: 'Delivered', time: 'Pending', completed: false }
    ];
    
    const trackingContainer = $('order-tracking');
    if (trackingContainer) {
      trackingContainer.innerHTML = `
        <h3>Order Tracking</h3>
        <div class="tracking-steps">
          ${trackingSteps.map((step, index) => `
            <div class="tracking-step ${step.completed ? 'completed' : ''}">
              <div class="step-icon">
                <i class="fas ${step.completed ? 'fa-check' : 'fa-circle'}"></i>
              </div>
              <div class="step-info">
                <div class="step-title">${step.status}</div>
                <div class="step-time">${step.time}</div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }
  }

  // 🎪 PAGE INITIALIZATION ROUTER
  function initializePage() {
    setTimeout(heartbeatLoaderOff, 1000);
    
    setupNavigation();
    updateCartUI();
    updateWishlistUI();
    startCountdownTimer();
    
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch(currentPage) {
      case 'index.html':
      case '':
        initializeHomePage();
        break;
        
      case 'cart.html':
        initializeCartPage();
        break;
        
      case 'checkout.html':
        initializeCheckoutPage();
        break;
        
      case 'thanks.html':
        initializeThanksPage();
        break;
    }
    
    setupKeyboardShortcuts();
    initializeScrollEffects();
  }

  function initializeHomePage() {
    renderProductsGrid();
    setupProductFilters();
    setupScrollToTopButton();
  }

  function initializeCartPage() {
    if (cart.length === 0) {
      setTimeout(() => {
        showToast('Your cart is empty! Redirecting to shop...', 'info');
        setTimeout(() => window.location.href = 'index.html', 2000);
      }, 1000);
      return;
    }
    
    renderCartPage();
    setupCheckoutFlow();
  }

  function initializeCheckoutPage() {
    if (cart.length === 0) {
      window.location.href = 'cart.html';
      return;
    }
    
    renderCheckoutSummary();
    setupCheckoutForm();
  }

  function initializeThanksPage() {
    renderThanksPage();
  }

  // 🎨 ADDITIONAL FEATURES
  function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeQuickView();
      }
      
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = $('search-input');
        if (searchInput) {
          searchInput.focus();
        }
      }
    });
  }

  function initializeScrollEffects() {
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', debounce(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (header) {
        if (scrollTop > lastScrollTop && scrollTop > 100) {
          header.classList.add('header-hidden');
        } else {
          header.classList.remove('header-hidden');
        }
      }
      
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, 100));
  }

  function setupScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scroll-to-top';
    scrollBtn.className = 'scroll-to-top-btn';
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', debounce(() => {
      if (window.pageYOffset > 300) {
        scrollBtn.classList.add('show');
      } else {
        scrollBtn.classList.remove('show');
      }
    }, 100));
  }

  // PLACEHOLDER FUNCTIONS
  function setupProductFilters() {
    console.log('Product filters setup...');
  }

  function setupCheckoutFlow() {
    console.log('Checkout flow setup...');
  }

  // 🚀 GLOBAL API EXPOSURE
  window.app = {
    // Cart operations
    addToCart,
    removeFromCart,
    updateQuantity,
    buyNow,
    
    // Wishlist operations
    toggleWishlist,
    
    // Quick view
    quickView,
    closeQuickView,
    changeQuickViewQty,
    addToCartFromQuickView,
    buyNowFromQuickView,
    toggleWishlistFromQuickView,
    
    // Promo operations
    applyPromoQuick,
    removePromoCode,
    
    // Utilities
    showToast,
    formatINR,
    getTotals,
    
    // Data access
    cart,
    PRODUCTS,
    findProduct
  };

  // 🎯 INITIALIZE APPLICATION
  document.addEventListener('DOMContentLoaded', initializePage);
  
  // Add CSS for clean image handling + epic animations
  const epicStyles = document.createElement('style');
  epicStyles.textContent = `
    /* 🖼️ CLEAN IMAGE STYLES */
    .product-img, .cart-item-img, .quick-view-img, .checkout-item-img, .order-item-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
      transition: opacity 0.3s ease;
    }
    
    .product-image img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: var(--radius-lg);
    }
    
    .cart-item-image, .checkout-item-image, .order-item-image {
      width: 120px;
      height: 120px;
      border-radius: var(--radius-lg);
      overflow: hidden;
      position: relative;
      background: #f8f9fa;
    }
    
    .cart-item-image img, .checkout-item-img, .order-item-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .quick-view-image {
      width: 300px;
      height: 300px;
      position: relative;
      border-radius: var(--radius-2xl);
      overflow: hidden;
      background: #f8f9fa;
    }
    
    .quick-view-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    /* Debug border for testing */
    .product-image, .cart-item-image, .quick-view-image, .checkout-item-image, .order-item-image {
      position: relative;
      background: #f6f6f6;
      outline: 1px dashed #ddd;
    }
    
    /* EPIC ANIMATIONS & EFFECTS */
    .epic-hover {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .epic-hover:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }
    
    .mega-shine {
      position: relative;
      overflow: hidden;
    }
    
    .mega-shine::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
      transition: left 0.5s;
    }
    
    .mega-shine:hover::before {
      left: 100%;
    }
    
    .pulse-glow {
      animation: pulse-glow 2s ease-in-out infinite;
    }
    
    @keyframes pulse-glow {
      0%, 100% { 
        box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4);
      }
      50% { 
        box-shadow: 0 0 0 15px rgba(239, 68, 68, 0);
      }
    }
    
    .glow-text {
      text-shadow: 0 0 10px currentColor;
    }
    
    .rainbow-bg {
      background: linear-gradient(45deg, #ff6b35, #f7931e, #ffd23f, #4caf50, #2196f3, #9c27b0);
      background-size: 400% 400%;
      animation: rainbow-flow 3s ease infinite;
    }
    
    @keyframes rainbow-flow {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    .cart-bounce {
      animation: cart-bounce 0.6s ease;
    }
    
    @keyframes cart-bounce {
      0%, 20%, 60%, 100% { transform: translateY(0); }
      40% { transform: translateY(-10px); }
      80% { transform: translateY(-5px); }
    }
    
    .shake-animation {
      animation: shake 0.6s ease-in-out;
    }
    
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
      20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    
    .success-glow {
      animation: success-glow 1s ease-in-out;
    }
    
    @keyframes success-glow {
      0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
      50% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
    }
    
    .animate-slide-in {
      animation: slide-in 0.5s ease-out;
    }
    
    @keyframes slide-in {
      from { transform: translateX(-20px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    
    .animate-in {
      animation: fade-in-up 0.6s ease-out;
    }
    
    @keyframes fade-in-up {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    
    .cart-pulse {
      animation: cart-pulse 0.6s ease;
    }
    
    @keyframes cart-pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
    
    .urgent-pulse {
      animation: urgent-pulse 1s ease-in-out infinite;
    }
    
    @keyframes urgent-pulse {
      0%, 100% { 
        background-color: #ef4444;
        transform: scale(1);
      }
      50% { 
        background-color: #dc2626;
        transform: scale(1.05);
      }
    }
    
    .header-hidden {
      transform: translateY(-100%);
    }
    
    .scroll-to-top-btn {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      background: var(--primary);
      color: white;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      z-index: 1000;
      opacity: 0;
      transform: translateY(100px);
      transition: all 0.3s ease;
    }
    
    .scroll-to-top-btn.show {
      opacity: 1;
      transform: translateY(0);
    }
    
    .scroll-to-top-btn:hover {
      background: var(--primary-dark);
      transform: translateY(-5px) scale(1.1);
    }
    
    /* 📱 RESPONSIVE IMAGE ADJUSTMENTS */
    @media (max-width: 768px) {
      .quick-view-image {
        width: 250px;
        height: 250px;
      }
      
      .cart-item-image, .checkout-item-image, .order-item-image {
        width: 80px;
        height: 80px;
      }
    }
    
    @media (max-width: 480px) {
      .product-image img {
        height: 150px;
      }
      
      .cart-item-image, .checkout-item-image, .order-item-image {
        width: 60px;
        height: 60px;
      }
      
      .quick-view-image {
        width: 200px;
        height: 200px;
      }
    }
  `;
  
  document.head.appendChild(epicStyles);

})();
