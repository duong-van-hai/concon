/**
 * FILE: data/bai13_10.js
 * Nội dung Bài 13: Biểu diễn quy ước ren
 */

const bai13_10 = {
    title: "Bài 13: Biểu diễn quy ước ren",
    content: `
        <div class="box-definition">
            <strong>I. Chi tiết có ren và vai trò của ren</strong>
            <p>Ren là một thành phần quan trọng trong cơ khí, được hình thành bởi một đường xoắn ốc trên bề mặt trụ hoặc mặt nón của chi tiết.</p>
        </div>

        <p><strong>1. Chi tiết có ren:</strong></p>
        <p>Trong thực tế, ta gặp rất nhiều chi tiết có ren như: Bu lông, đai ốc, vít, nắp chai, đuôi bóng đèn, vòi nước...</p>
        
        <p><strong>2. Vai trò của ren:</strong></p>
        <table>
            <tr>
                <th>Vai trò chính</th>
                <th>Ví dụ minh họa</th>
            </tr>
            <tr>
                <td><strong>Dùng để ghép nối</strong></td>
                <td>Ghép nối các chi tiết bằng bu lông, đai ốc, vít gỗ.</td>
            </tr>
            <tr>
                <td><strong>Dùng để truyền lực</strong></td>
                <td>Trục vít trong kích ô tô, ê tô dùng để kẹp chặt.</td>
            </tr>
            <tr>
                <td><strong>Dùng để kín khít</strong></td>
                <td>Các khớp nối ống nước, nắp bình gas.</td>
            </tr>
        </table>

        <img src="https://images.unsplash.com/photo-1530124560677-bdaea027f8e1?auto=format&fit=crop&w=1200&q=80">
        <p class="img-caption">Hình 13.1: Bu lông và đai ốc là những chi tiết có ren phổ biến nhất trong đời sống</p>

        <div class="box-warning">
            <strong>II. Biểu diễn quy ước ren (TCVN 5907 : 1995)</strong>
            <p>Vì ren có cấu tạo xoắn ốc rất phức tạp, nên trong bản vẽ kỹ thuật người ta không vẽ đúng hình dạng thực mà vẽ theo quy ước đơn giản sau:</p>
        </div>

        <p><strong>1. Đối với ren ngoài (Ren trục):</strong></p>
        <ul>
            <li><strong>Đường đỉnh ren:</strong> Vẽ bằng nét liền đậm.</li>
            <li><strong>Đường chân ren:</strong> Vẽ bằng nét liền mảnh.</li>
            <li><strong>Đường giới hạn ren:</strong> Vẽ bằng nét liền đậm.</li>
            <li><strong>Vòng tròn đỉnh ren:</strong> Vẽ đóng kín bằng nét liền đậm.</li>
            <li><strong>Vòng tròn chân ren:</strong> Vẽ hở 1/4 vòng tròn bằng nét liền mảnh (thường hở ở góc phía trên bên phải).</li>
        </ul>

        <p><strong>2. Đối với ren trong (Ren lỗ):</strong></p>
        <ul>
            <li>Quy ước tương tự ren ngoài nhưng vị trí đường đậm và mảnh đảo ngược lại (nhìn từ ngoài vào): 
                <em>Đường đỉnh ren ở trong, đường chân ren ở ngoài.</em>
            </li>
        </ul>

        <div class="box-summary">
            <strong>Ghi nhớ quy tắc vẽ:</strong>
            <p>Phần nhìn thấy được của ren luôn vẽ bằng nét liền đậm (đỉnh ren ngoài hoặc giới hạn ren). Đường chân ren luôn vẽ bằng nét liền mảnh và nằm cách đỉnh ren một khoảng nhỏ.</p>
        </div>

        <div class="box-definition">
            <strong>Câu hỏi luyện tập:</strong>
            <p>Tại sao người ta không vẽ ren đúng như hình dạng thật trên bản vẽ kỹ thuật?</p>
            <p><em>Trả lời: Để đơn giản hóa bản vẽ, giúp người đọc dễ dàng quan sát và giảm thời gian thiết kế mà vẫn đảm bảo đầy đủ thông tin kỹ thuật cần thiết.</em></p>
        </div>

        <div style="height: 150px;"></div>
    `
};
