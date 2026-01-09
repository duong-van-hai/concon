const data10 = [
    { 
        title: "Bài 1: Khái quát về công nghệ", 
        content: "<h3>1. Khái niệm</h3><p>Công nghệ là giải pháp, quy trình, bí quyết kĩ thuật để biến đổi nguồn lực thành sản phẩm.</p><h3>2. Mối quan hệ</h3><p>Khoa học tạo ra tri thức, kĩ thuật vận dụng tri thức, và công nghệ hiện thực hóa thành sản phẩm.</p>" 
    },
    { 
        title: "Bài 2: Hệ thống kĩ thuật", 
        content: "<h3>Cấu trúc hệ thống</h3><p>Gồm 3 phần chính:</p><ul><li>Đầu vào (Input)</li><li>Bộ phận xử lý (Process)</li><li>Đầu ra (Output)</li></ul>" 
    },
    { 
        title: "Bài 3: Một số công nghệ phổ biến", 
        content: "<h3>Các loại công nghệ</h3><ul><li>Công nghệ luyện kim</li><li>Công nghệ điện - cơ</li><li>Công nghệ tế bào quang điện</li><li>Công nghệ in 3D</li></ul>" 
    },
    { 
        title: "Bài 4: Hệ thống kĩ thuật trong gia đình", 
        content: "<h3>Ví dụ</h3><p>Hệ thống chiếu sáng tự động, hệ thống điều hòa không khí, hệ thống báo cháy.</p>" 
    },
    { 
        title: "Bài 5: Đánh giá công nghệ", 
        content: "<h3>Tiêu chí đánh giá</h3><ul><li>Tiêu chí về hiệu quả</li><li>Tiêu chí về độ tin cậy</li><li>Tiêu chí về kinh tế</li><li>Tiêu chí về môi trường</li></ul>" 
    },
    { 
        title: "Bài 6: Cách mạng công nghiệp 4.0", 
        content: "<h3>Đặc trưng</h3><p>Sự kết hợp giữa hệ thống thực và ảo, Internet vạn vật (IoT), Trí tuệ nhân tạo (AI), Dữ liệu lớn (Big Data).</p>" 
    },
    { 
        title: "Bài 7: Ngành nghề kĩ thuật, công nghệ", 
        content: "<h3>Các nhóm ngành</h3><p>Kĩ sư cơ khí, kĩ sư điện, kĩ sư điện tử, kĩ sư xây dựng, kĩ sư công nghệ thông tin.</p>" 
    },
    { 
        title: "Bài 8: Bản vẽ kĩ thuật và tiêu chuẩn", 
        content: "<h3>Tiêu chuẩn TCVN</h3><ul><li>Khổ giấy (A0-A4)</li><li>Tỉ lệ</li><li>Nét vẽ</li><li>Chữ viết</li><li>Ghi kích thước</li></ul>" 
    },
    { 
        title: "Bài 9: Hình chiếu vuông góc", 
        content: "<h3>Các mặt phẳng chiếu</h3><p>Mặt phẳng chiếu đứng, mặt phẳng chiếu bằng, mặt phẳng chiếu cạnh.</p>" 
    },
    { 
        title: "Bài 10: Hình cắt và mặt cắt", 
        content: "<h3>Mục đích</h3><p>Biểu diễn rõ hơn hình dạng cấu tạo bên trong của vật thể bị che khuất.</p>" 
    },
    { 
        title: "Bài 11: Hình chiếu trục đo", 
        content: "<h3>Các loại phổ biến</h3><ul><li>Hình chiếu trục đo vuông góc đều (p=q=r=1)</li><li>Hình chiếu trục đo xiên góc cân</li></ul>" 
    },
    { 
        title: "Bài 12: Hình chiếu phối cảnh", 
        content: "<h3>Đặc điểm</h3><p>Tạo cảm giác xa gần, thường dùng trong thiết kế kiến trúc và xây dựng nhà cửa.</p>" 
    },
    { 
        title: "Bài 13: Vẽ kĩ thuật với sự hỗ trợ của máy tính", 
        content: "<h3>Phần mềm CAD</h3><p>Sử dụng AutoCAD hoặc các phần mềm vẽ 3D để tăng độ chính xác và tiết kiệm thời gian.</p>" 
    },
    { 
        title: "Bài 14: Quy trình thiết kế kĩ thuật", 
        content: "<h3>Các bước cơ bản</h3><p>1. Xác định vấn đề -> 2. Tìm giải pháp -> 3. Thiết kế -> 4. Chế tạo mẫu -> 5. Thử nghiệm và đánh giá.</p>" 
    },
    { 
        title: "Bài 15: Xác định vấn đề và tìm giải pháp", 
        content: "<h3>Kĩ thuật động não</h3><p>Tập hợp các ý tưởng sáng tạo không giới hạn để tìm ra phương án tối ưu cho vấn đề kĩ thuật.</p>" 
    },
    { 
        title: "Bài 16: Thiết kế và lập hồ sơ kĩ thuật", 
        content: "<h3>Hồ sơ kĩ thuật</h3><p>Bao gồm các bản vẽ chi tiết, bản vẽ lắp, thuyết minh tính toán và hướng dẫn sử dụng.</p>" 
    },
    { 
        title: "Bài 17: Chế tạo mẫu và thử nghiệm", 
        content: "<h3>Vai trò</h3><p>Giúp phát hiện các lỗi thiết kế trước khi đưa vào sản xuất hàng loạt.</p>" 
    },
    { 
        title: "Bài 18: Thẩm mỹ trong thiết kế", 
        content: "<h3>Yếu tố thẩm mỹ</h3><p>Màu sắc, đường nét, tỉ lệ hài hòa giúp sản phẩm không chỉ tốt mà còn đẹp và thu hút người dùng.</p>" 
    },
    { 
        title: "Bài 19: Dự án thiết kế sản phẩm đơn giản", 
        content: "<h3>Thực hành</h3><p>Học sinh tự thực hiện thiết kế một vật dụng nhỏ như giá sách, hộp đựng bút hoặc đèn ngủ.</p>" 
    },
    { 
        title: "Bài 20: Tổng kết chương trình", 
        content: "<h3>Hệ thống hóa</h3><p>Ôn tập lại các kiến thức trọng tâm từ công nghệ đại cương đến vẽ kĩ thuật và quy trình thiết kế.</p>" 
    }
];
