function NhanVien(
    _taiKhoan,
    _hoTen,
    _email,
    _matKhau,
    _ngayLam,
    _luongCB,
    _chucVu,
    _gioLam
) {
    this.taiKhoan = _taiKhoan;
    this.hoTen = _hoTen;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCB = _luongCB;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;

    this.hienThiChucVu = function () {
        var chucVuCT = "";
        if (this.chucVu == 0) {
            chucVuCT = "";
        } else if (this.chucVu == 1) {
            chucVuCT = "Sếp";
        } else if (this.chucVu == 2) {
            chucVuCT = "Trưởng phòng";
        } else if (this.chucVu == 3) {
            chucVuCT = "Nhân viên";
        }
        return chucVuCT;
    };

    this.tinhTongLuong = function () {
        var chucVuCT = this.hienThiChucVu();
        var tongLuong = 0;
        if (chucVuCT == "Sếp") {
            tongLuong = this.luongCB * 3;
        } else if (chucVuCT == "Trưởng phòng") {
            tongLuong = this.luongCB * 2;
        } else if (chucVuCT == "Nhân viên") {
            tongLuong = this.luongCB;
        } else if (chucVuCT == "") {
            tongLuong;
        }
        return tongLuong;
    };
    this.xepLoaiNV = function () {
        var chucVuCT = this.hienThiChucVu();
        var xepLoai = "";
        if (this.gioLam >= 192 && chucVuCT == "Nhân viên") {
            xepLoai = "Nhân viên xuất sắc";
        } else if (this.gioLam >= 176 && chucVuCT == "Nhân viên") {
            xepLoai = "Nhân viên giỏi";
        } else if (this.gioLam >= 160 && chucVuCT == "Nhân viên") {
            xepLoai = "Nhân viên khá";
        } else if (this.gioLam < 160 && chucVuCT == "Nhân viên") {
            xepLoai = "Nhân viên trung bình";
        } else if (chucVuCT != "Nhân viên") {
            xepLoai = "Không phải nhân viên";
        }
        return xepLoai;
    };
}
