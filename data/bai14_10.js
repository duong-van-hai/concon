/**
 * FILE: data/bai14_10.js
 * Nội dung Bài 14: Bản vẽ cơ khí
 */

const bai14_10 = {
    title: "Bài 14: Bản vẽ cơ khí",
    content: `
        <p>Bản vẽ cơ khí là phương tiện thông tin kỹ thuật dùng trong thiết kế, chế tạo, lắp ráp, kiểm tra và sử dụng các sản phẩm cơ khí. Có hai loại bản vẽ quan trọng nhất là bản vẽ chi tiết và bản vẽ lắp.</p>

        <div class="box-definition">
            <strong>I. Bản vẽ lắp (Assembly Drawing)</strong>
            <p>Bản vẽ lắp trình bày hình dạng, vị trí tương quan của một nhóm chi tiết được lắp ghép với nhau để tạo thành một bộ phận máy hoặc một chiếc máy hoàn chỉnh.</p>
        </div>

        <p><strong>1. Nội dung của bản vẽ lắp:</strong></p>
        <ul>
            <li><strong>Hình biểu diễn:</strong> Diễn tả hình dạng, kết cấu và vị trí các chi tiết trong bộ phận máy.</li>
            <li><strong>Kích thước:</strong> Gồm kích thước chung (dài, rộng, cao), kích thước lắp ghép giữa các chi tiết.</li>
            <li><strong>Bảng kê:</strong> Liệt kê số thứ tự, tên gọi, số lượng, vật liệu của từng chi tiết.</li>
            <li><strong>Khung tên:</strong> Tên bộ phận máy, tỉ lệ, ký hiệu bản vẽ, tên người thiết kế...</li>
        </ul>

        <p><strong>2. Công dụng:</strong> Dùng để lắp ráp, kiểm tra và nghiên cứu nguyên lý làm việc của bộ phận máy.</p>

        <img src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=1200&q=80">
        <p class="img-caption">Hình 14.1: Bản vẽ lắp giúp kỹ sư hình dung cách các chi tiết phối hợp hoạt động</p>

        <div class="box-warning">
            <strong>II. Bản vẽ chi tiết (Detail Drawing)</strong>
            <p>Bản vẽ chi tiết trình bày đầy đủ hình dạng, kích thước và các yêu cầu kỹ thuật của một chi tiết cụ thể để phục vụ cho việc chế tạo và kiểm tra chi tiết đó.</p>
        </div>

        <p><strong>1. Nội dung của bản vẽ chi tiết:</strong></p>
        <table>
            <tr>
                <th>Thành phần</th>
                <th>Nội dung chi tiết</th>
            </tr>
            <tr>
                <td><strong>Hình biểu diễn</strong></td>
                <td>Các hình chiếu, hình cắt... diễn tả đầy đủ hình dạng cấu tạo của chi tiết.</td>
            </tr>
            <tr>
                <td><strong>Kích thước</strong></td>
                <td>Đầy đủ, chính xác các kích thước cần thiết để chế tạo.</td>
            </tr>
            <tr>
                <td><strong>Yêu cầu kỹ thuật</strong></td>
                <td>Chỉ dẫn về gia công (độ bóng, dung sai), xử lý nhiệt, bề mặt.</td>
            </tr>
            <tr>
                <td><strong>Khung tên</strong></td>
                <td>Tên gọi chi tiết, vật liệu, tỉ lệ, đơn vị thiết kế.</td>
            </tr>
        </table>

        <p><strong>2. Công dụng:</strong> Dùng làm tài liệu để chế tạo và kiểm tra chất lượng chi tiết sau khi gia công.</p>

        <div class="box-summary">
            <strong>Phân biệt nhanh:</strong>
            <p>• <strong>Bản vẽ chi tiết:</strong> Chỉ có 1 chi tiết duy nhất + Có yêu cầu kỹ thuật.</p>
            <p>• <strong>Bản vẽ lắp:</strong> Có nhiều chi tiết phối hợp + Có bảng kê chi tiết.</p>
        </div>

        <div class="box-definition">
            <strong>Câu hỏi tư duy:</strong>
            <p>Tại sao bản vẽ chi tiết lại cần có mục "Yêu cầu kỹ thuật" còn bản vẽ lắp thì thường không có mục này cho từng chi tiết?</p>
            <p><em>Gợi ý: Bản vẽ chi tiết dùng để sản xuất trực tiếp nên cần hướng dẫn cách làm; bản vẽ lắp dùng để ghép nối nên tập trung vào vị trí và kích thước chung.</em></p>
        </div>

        <div style="height: 150px;"></div>
    `
};
