// Add your own services by modifying this array:
const services = [
  // GEL MANICURE
  { id: 1, name: 'Gel Manicure (XS)', price: 349.00 },
  { id: 2, name: 'Gel Manicure (S)', price: 399.00 },
  { id: 3, name: 'Gel Manicure (M)', price: 449.00 },
  { id: 4, name: 'Gel Manicure (ML)', price: 499.00 },
  { id: 5, name: 'Gel Manicure (L)', price: 549.00 },
  { id: 6, name: 'Gel Manicure (XL)', price: 599.00 },
  { id: 7, name: 'Gel Manicure (XXL)', price: 649.00 },

  // STRUCTURED BUILDER GEL
  { id: 8, name: 'Structured Builder Gel (XS)', price: 449.00 },
  { id: 9, name: 'Structured Builder Gel (S)', price: 499.00 },
  { id: 10, name: 'Structured Builder Gel (M)', price: 549.00 },

  // SOFTGEL EXTENSIONS
  { id: 11, name: 'Softgel Extensions (XS)', price: 499.00 },
  { id: 12, name: 'Softgel Extensions (S)', price: 549.00 },
  { id: 13, name: 'Softgel Extensions (M)', price: 599.00 },
  { id: 14, name: 'Softgel Extensions (ML)', price: 649.00 },
  { id: 15, name: 'Softgel Extensions (L)', price: 699.00 },
  { id: 16, name: 'Softgel Extensions (XL)', price: 749.00 },
  { id: 17, name: 'Softgel Extensions (XXL)', price: 799.00 },

  // HARD GEL OVERLAY
  { id: 18, name: 'Hard Gel Overlay (M)', price: 699.00 },
  { id: 19, name: 'Hard Gel Overlay (ML)', price: 749.00 },
  { id: 20, name: 'Hard Gel Overlay (L)', price: 799.00 },
  { id: 21, name: 'Hard Gel Overlay (XL)', price: 849.00 },
  { id: 22, name: 'Hard Gel Overlay (XXL)', price: 899.00 },

  // HARD GEL EXTENSIONS
  { id: 23, name: 'Hard Gel Extensions (XS)', price: 799.00 },
  { id: 24, name: 'Hard Gel Extensions (S)', price: 849.00 },
  { id: 25, name: 'Hard Gel Extensions (M)', price: 899.00 },
  { id: 26, name: 'Hard Gel Extensions (ML)', price: 949.00 },
  { id: 27, name: 'Hard Gel Extensions (L)', price: 999.00 },
  { id: 28, name: 'Hard Gel Extensions (XL)', price: 1049.00 },
  { id: 29, name: 'Hard Gel Extensions (XXL)', price: 1199.00 },

  // NAIL ART (PER NAIL)
  { id: 30, name: '3D Flower Design (Partial)', price: 49.00 },
  { id: 31, name: '3D Flower Design (Detailed)', price: 99.00 },
  { id: 32, name: '3D Line / Wobble', price: 39.00 },
  { id: 33, name: '3D Mermaid / Shell', price: 69.00 },
  { id: 34, name: 'French Tip', price: 34.00 },
  { id: 35, name: 'Ombre', price: 29.00 },
  { id: 36, name: 'Aura', price: 24.00 },
  { id: 37, name: 'Chrome (Powder)', price: 39.00 },
  { id: 38, name: 'Chrome (Metallic)', price: 24.00 },
  { id: 39, name: 'Decals (Foils & Stickers)', price: 19.00 },
  { id: 40, name: 'Hand Paint (Easy)', price: 39.00 },
  { id: 41, name: 'Hand Paint (Intricate)', price: 49.00 },
  { id: 42, name: 'Dots / Lines (Simple)', price: 19.00 },
  { id: 43, name: 'Outline / Shapes', price: 29.00 },
  { id: 44, name: 'Blooming', price: 29.00 },
  { id: 45, name: 'Marble', price: 24.00 },
  { id: 46, name: 'Loose Glitters', price: 29.00 },
  { id: 47, name: 'Paint Glitters', price: 19.00 },
  { id: 48, name: 'Encapsulation', price: 69.00 },
  { id: 49, name: 'Embossed', price: 39.00 },
  { id: 50, name: 'Cat Eye', price: 39.00 },

  // RHINESTONES & CHARMS
  { id: 51, name: 'Simple Rhinestones (1 to5 pcs)', price: 19.00 },
  { id: 52, name: 'Intricate Rhinestones (5 to 10 pcs)', price: 29.00 },
  { id: 53, name: 'Full Nail Rhinestones', price: 69.00 },
  { id: 54, name: '3/4 Coverage Rhinestones', price: 59.00 },
  { id: 55, name: '1/2 Coverage Rhinestones', price: 49.00 },
  { id: 56, name: '1/4 Coverage Rhinestones', price: 39.00 },
  { id: 57, name: '1/8 Coverage Rhinestones', price: 29.00 },

  { id: 58, name: 'Charms (Small)', price: 19.00 },
  { id: 59, name: 'Charms (Medium)', price: 29.00 },
  { id: 60, name: 'Charms (Large)', price: 39.00 },
  { id: 61, name: 'Metal Charms (Small)', price: 39.00 },
  { id: 62, name: 'Metal Charms (Medium)', price: 49.00 },
  { id: 63, name: 'Metal Charms (Large)', price: 59.00 },

  // REMOVAL
  { id: 64, name: 'Removal (Gel/Structured/Hard/Softgel - Our Work)', price: 149.00 },
  { id: 65, name: 'Removal (Gel Manicure - Others)', price: 179.00 },
  { id: 66, name: 'Removal (Structured Builder Gel - Others)', price: 249.00 },
  { id: 67, name: 'Removal (Hard Gel Overlay/Extensions - Others)', price: 399.00 },
  { id: 68, name: 'Removal (Softgel Extensions - Others)', price: 299.00 }
];

let receiptItems = [];

// Initialize the app
function init() {
    console.log('App initialized');
    renderServices();
}

// Render service buttons
function renderServices() {
    console.log('Rendering services, count:', services.length);
    const serviceGrid = document.getElementById('serviceGrid');
    serviceGrid.innerHTML = services.map(service => `
        <div class="service-btn" onclick="toggleService(${service.id})" data-id="${service.id}">
            <div>${service.name}</div>
            <div class="service-price">$${service.price.toFixed(2)}</div>
        </div>
    `).join('');
    console.log('Services rendered');
}

// Toggle service on/off
function toggleService(serviceId) {
    const service = services.find(s => s.id === serviceId);
    const existingIndex = receiptItems.findIndex(item => item.id === serviceId);

    if (existingIndex > -1) {
        // Remove from receipt
        receiptItems.splice(existingIndex, 1);
        document.querySelector(`[data-id="${serviceId}"]`).classList.remove('active');
    } else {
        // Add to receipt
        receiptItems.push({ ...service, quantity: 1 });
        document.querySelector(`[data-id="${serviceId}"]`).classList.add('active');
    }

    renderReceipt();

}


// Render receipt
function renderReceipt() {
    const receiptItemsEl = document.getElementById('receiptItems');
    const receiptTotalEl = document.getElementById('receiptTotal');
    const totalAmountEl = document.getElementById('totalAmount');

    if (receiptItems.length === 0) {
        receiptItemsEl.innerHTML = `
            <div class="empty-state">
                <div>No services selected yet</div>
                <div style="font-size: 0.9rem; margin-top: 10px;">Click on services above to add them to your receipt</div>
            </div>
        `;
        receiptTotalEl.style.display = 'none';
        return;
    }

    // Calculate totals
    const subtotal = receiptItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + tax;

    receiptItemsEl.innerHTML = receiptItems.map(item => `
        <div class="receipt-item">
            <span>${item.name} <small>(x${item.quantity})</small></span>
            <span>$${ (item.price * item.quantity).toFixed(2) }</span>
        </div>
    `).join('') + `
        <div class="receipt-item">
            <span><strong>Subtotal</strong></span>
            <span><strong>$${subtotal.toFixed(2)}</strong></span>
        </div>
        <div class="receipt-item">
            <span>Tax (8%)</span>
            <span>$${tax.toFixed(2)}</span>
        </div>
    `;

    totalAmountEl.textContent = total.toFixed(2);
    receiptTotalEl.style.display = 'block';
}

// Clear all items
function clearReceipt() {
    receiptItems = [];
    document.querySelectorAll('.service-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    renderReceipt();
}

// Print receipt
function printReceipt() {
    if (receiptItems.length === 0) {
        alert('Please add some services first!');
        return;
    }

    const subtotal = receiptItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    const printContent = `
        <div style="font-family: Arial, sans-serif; max-width: 400px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; border-bottom: 2px solid #333; padding-bottom: 10px; margin-bottom: 20px;">
                <h2>RECEIPT</h2>
                <p>Date: ${new Date().toLocaleDateString()}</p>
            </div>
            ${receiptItems.map(item => `
                <div style="display: flex; justify-content: space-between; padding: 8px 0;">
                    <span>${item.name} (x${item.quantity})</span>
                    <span>$${ (item.price * item.quantity).toFixed(2) }</span>
                </div>
            `).join('')}
            <div style="border-top: 1px solid #ccc; padding-top: 10px; margin-top: 15px;">
                <div style="display: flex; justify-content: space-between;">
                    <span>Subtotal:</span>
                    <span>$${subtotal.toFixed(2)}</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>Tax (8%):</span>
                    <span>$${tax.toFixed(2)}</span>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 1.2em; font-weight: bold; margin-top: 10px;">
                    <span>Total:</span>
                    <span>$${total.toFixed(2)}</span>
                </div>
            </div>
            <div style="text-align: center; margin-top: 20px; font-size: 0.8em; color: #666;">
                Thank you for your business!
                </div>
        </div>
    `;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head><title>Receipt</title></head>
            <body>${printContent}</body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

// Initialize app when page loads
window.onload = init;