let productName = "Laptop";
let price = 1500;
let quantity = 2;
const DISCOUNT_RATE = 0.1;

let totalPrice = price * quantity * (1 - DISCOUNT_RATE);

console.log(
  "Sản phẩm: " + productName +
  ", Số lượng: " + quantity +
  ", Tổng giá: " + totalPrice
);
