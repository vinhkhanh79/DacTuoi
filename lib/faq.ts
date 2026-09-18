export type FaqItem = {
  question: string;
  answer: string;
};

// Nội dung FAQ dưới đây được tổng hợp lại từ thông tin đã có thật trên website
// (giá sản phẩm ở Products.tsx, chính sách giao hàng ở DeliveryPolicy.tsx, quy
// trình đặt hàng ở OrderProcess.tsx) — không thêm cam kết hay số liệu mới nào
// ngoài những gì trang đã công bố, để tránh Schema và nội dung hiển thị lệch
// khỏi dữ liệu thật.
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Hạt đác tươi giá bao nhiêu?",
    answer:
      "Hiện có 2 lựa chọn: hạt đác tươi size trung giá 50.000đ/kg và size lớn giá 55.000đ/kg. Giá có thể thay đổi theo thời điểm, bạn nên gọi 0378 259 987 hoặc điền form đặt hàng để được báo giá chính xác nhất.",
  },
  {
    question: "Hạt đác tươi giao ở những khu vực nào?",
    answer:
      "Giao tận nơi tại TP. Hồ Chí Minh, đơn nội thành dự kiến nhận trong 1–2 ngày. Các tỉnh thành khác vẫn được hỗ trợ giao theo thỏa thuận khi đặt hàng.",
  },
  {
    question: "Làm sao để đặt hạt đác tươi?",
    answer:
      "Bạn chọn sản phẩm và điền thông tin ở form đặt hàng trên website, hoặc gọi trực tiếp số 0378 259 987. Đơn hàng sẽ được gọi xác nhận lại trước khi giao.",
  },
  {
    question: "Hạt đác tươi có tươi và sạch không?",
    answer:
      "Hạt đác được sơ chế trong ngày, không qua tẩy trắng và không dùng chất bảo quản. Nếu chưa dùng ngay, nên bảo quản trong ngăn mát tủ lạnh và dùng trong vài ngày để giữ được độ giòn ngon tốt nhất.",
  },
  {
    question: "Phí giao hàng hạt đác tươi tính thế nào?",
    answer:
      "Phí vận chuyển được thông báo trước khi chốt đơn, tùy theo địa chỉ nhận hàng và khối lượng đặt mua.",
  },
];
