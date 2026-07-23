// مفتاح السلة الموحد للموقع كله
let cart = JSON.parse(localStorage.getItem('woshwosha_cart')) || [];

function updateCartBadge() {
    const badge = document.getElementById('cartCount');
    if (badge) {
        const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
        badge.innerText = totalQty;
    }
}

function addToCart(productId, quantity = 1, productsList = []) {
    let list = productsList;
    if (!list || list.length === 0) {
        if (typeof productsData !== 'undefined') {
            list = productsData;
        } else if (typeof allProducts !== 'undefined') {
            list = allProducts;
        } else {
            list = [];
        }
    }

    const product = list.find(p => p.id === productId);
    if (!product) {
        alert('عذراً، لم يتم العثور على المنتج!');
        return;
    }

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images ? product.images[0] : (product.image || ''),
            quantity: quantity
        });
    }

    saveCart();
    alert('تمت إضافة المنتج إلى السلة بنجاح! 🛍️');
}

function saveCart() {
    localStorage.setItem('woshwosha_cart', JSON.stringify(cart));
    updateCartBadge();
    if (typeof renderCartItems === 'function') {
        renderCartItems();
    }
}

function renderCartItems() {
    const container = document.getElementById('cartItemsList');
    const summaryBox = document.getElementById('cartSummaryBox');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `<div class="text-center py-5 text-muted">السلة فارغة حالياً 🛒</div>`;
        if (summaryBox) summaryBox.style.display = 'none';
        return;
    }

    if (summaryBox) summaryBox.style.display = 'block';
    let total = 0;

    container.innerHTML = cart.map((item, index) => {
        total += item.price * item.quantity;
        return `
            <div class="card border-0 shadow-sm p-3 mb-3 rounded-4 bg-white d-flex flex-row align-items-center justify-content-between">
                <div class="d-flex align-items-center gap-3">
                    <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 12px; background: #fff0f4;">
                    <div>
                        <h6 class="fw-bold mb-1">${item.name}</h6>
                        <span class="text-danger fw-bold small">${item.price} ج.م × ${item.quantity}</span>
                    </div>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <button class="btn btn-outline-danger btn-sm rounded-circle" onclick="changeQty(${index}, 1)">+</button>
                    <span class="fw-bold px-1">${item.quantity}</span>
                    <button class="btn btn-outline-secondary btn-sm rounded-circle" onclick="changeQty(${index}, -1)">-</button>
                    <button class="btn btn-light text-danger btn-sm ms-2" onclick="removeItem(${index})"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `;
    }).join('');

    const totalPriceEl = document.getElementById('totalCartPrice');
    if (totalPriceEl) totalPriceEl.innerText = total + ' ج.م';
}

function changeQty(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    saveCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
}

function showPage(pageId) {
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
    }
    if (pageId === 'cartPage') {
        renderCartItems();
    }
}

function submitOrder(event) {
    event.preventDefault();

    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const country = document.getElementById('custCountry').value;
    const gov = document.getElementById('custGov').value.trim();
    const address = document.getElementById('custAddress').value.trim();
    const paymentMethodEl = document.querySelector('input[name="paymentMethod"]:checked');
    const paymentMethod = paymentMethodEl ? (paymentMethodEl.value === 'instapay' ? 'تحويل عبر InstaPay 💳' : 'الدفع نقداً عند الاستلام 💵') : 'غير محدد';

    if (cart.length === 0) {
        alert('السلة فارغة!');
        return;
    }

    let itemsText = '';
    let total = 0;
    cart.forEach((item, idx) => {
        let itemTotal = item.price * item.quantity;
        total += itemTotal;
        itemsText += `${idx + 1}. *${item.name}* \n   الكمية: ${item.quantity} | السعر: ${itemTotal} ج.م\n`;
    });

    let message = `🛒 *طلب جديد من متجر WOSHWOSHA* \n\n`;
    message += `👤 *الاسم:* ${name}\n`;
    message += `📞 *الهاتف:* ${phone}\n`;
    message += `🌍 *الدولة:* ${country} - *المحافظة:* ${gov}\n`;
    message += `📍 *العنوان:* ${address}\n`;
    message += `💳 *طريقة الدفع:* ${paymentMethod}\n\n`;
    message += `📦 *المنتجات المطلوبة:*\n${itemsText}\n`;
    message += `💰 *الإجمالي الكلي:* *${total} ج.م*\n\n`;
    message += `✨ شكراً لتسوقكم معنا!`;

    const storeWhatsAppNumber = "201551627284"; 
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${storeWhatsAppNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}

document.addEventListener("DOMContentLoaded", () => {
    updateCartBadge();
    renderCartItems();
});