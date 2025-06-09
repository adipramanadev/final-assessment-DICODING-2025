// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Variabel penampung data orders
let orders = [];

// Fungsi menambahkan pesanan
function addOrder(customerName, items) {
  const id = generateUniqueId();
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
  const newOrder = {
    id,
    customerName,
    items,
    totalPrice,
    status: 'Menunggu'
  };
  orders.push(newOrder);
}

// Fungsi mengubah status pesanan
function updateOrderStatus(orderId, status) {
  const order = orders.find((o) => o.id === orderId);
  if (order) {
    order.status = status;
  }
}

// Fungsi menghitung total pendapatan dari pesanan yang selesai
function calculateTotalRevenue() {
  return orders
    .filter((order) => order.status === 'Selesai')
    .reduce((total, order) => total + order.totalPrice, 0);
}

// Fungsi menghapus pesanan
function deleteOrder(id) {
  orders = orders.filter((order) => order.id !== id);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
