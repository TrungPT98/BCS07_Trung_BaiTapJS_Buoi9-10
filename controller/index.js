var arrNhanVien = [];

getStorage();

renderGiaoDien();

function renderGiaoDien() {
    var content = "";
    for (var i = 0; i < arrNhanVien.length; i++) {
        var nhanVien = new NhanVien();
        var nhanVienItem = arrNhanVien[i];
        Object.assign(nhanVien, nhanVienItem);

        var hienThiChucVu = nhanVien.hienThiChucVu();
        var tongLuong = nhanVien.tinhTongLuong();
        var xepLoai = nhanVien.xepLoaiNV();
        content += `
    <tr>
		<td>${nhanVien.taiKhoan}</td>
		<td>${nhanVien.hoTen}</td>
		<td>${nhanVien.email}</td>
		<td>${nhanVien.ngayLam}</td>
		<td>${hienThiChucVu}</td>									
		<td>${tongLuong.toLocaleString()}</td>
		<td>${xepLoai}</td>
		<td>
        <button onclick="xoaNhanVien('${nhanVien.taiKhoan
            }')" class="btn btn-danger">
            <i class="fa fa-trash"></i>
          </button>
          <button onclick="editNhanVien('${nhanVien.taiKhoan
            }')" class="btn btn-warning" data-toggle="modal"
            data-target="#myModal">
            <i class="fa fa-pencil"></i>
        </button>
        </td>
	</tr>
    `;
    }
    document.getElementById('tableDanhSach').innerHTML = content;
}

function themNhanVien() {
    var nhanVien = layGiaTriInput();

    if (nhanVien) {
        arrNhanVien.push(nhanVien);
        console.log(arrNhanVien);
        saveStorage(arrNhanVien);
    
        renderGiaoDien();
        ganGiaTriChoInput("", "", "", "", "", "", "", "");
    }
}

function xoaNhanVien(taiKhoan) {
    var index = timViTriNhanVien(taiKhoan);
    if (index != -1) {
        arrNhanVien.splice(index, 1);
        saveStorage(arrNhanVien);
        renderGiaoDien();
    }
}

function editNhanVien(taiKhoan) {
    var index = timViTriNhanVien(taiKhoan);
    var nhanVien = arrNhanVien[index];
    ganGiaTriChoInput(
      nhanVien.taiKhoan,
      nhanVien.hoTen,
      nhanVien.email,
      nhanVien.pass,
      nhanVien.ngayLam,
      nhanVien.luongCB,
      nhanVien.chucVu,
      nhanVien.gioLam
    );
    document.getElementById("tknv").readOnly = true;
    document.getElementById('btnThemNV').disabled = true;
}

function clearThongTin() {
    document.getElementById("tknv").readOnly = false;
    document.getElementById('btnThemNV').disabled = false;
    // document.querySelectorAll("sp-thongbao").style = "display: none";
    ganGiaTriChoInput("", "", "", "", "", "", "", "");
}

function capNhatThongTinNV() {
    var nhanVienDaSua = layGiaTriInput();

    var index = timViTriNhanVien(nhanVienDaSua.taiKhoan);
    // console.log(index);
    arrNhanVien[index] = nhanVienDaSua;
    saveStorage(arrNhanVien);
    alert("Đã cập nhật");
    renderGiaoDien();
}

function timLoaiNhanVien () {
    var nguoiDungNhap = document.getElementById('searchName').value;
    // console.log(nguoiDungNhap);
    var nhanVien = arrNhanVien;
    // console.log(nhanVien);
    for (var i=1; i < arrNhanVien.length; i++) {
        var loaiNhanVien = "";
        if (nguoiDungNhap == "Nhân viên xuất sắc") {
            // console.log("đúng");
            nhanVien.forEach(function (item, index) {
                if (item.gioLam >= 192 && item.chucVu == 3) {
                    loaiNhanVien += item.hoTen + `<br>`;
                    // console.log(loaiNhanVien);
                } 
            });
        } else if (nguoiDungNhap == "Nhân viên giỏi") {
            // console.log("đúng");
            nhanVien.forEach(function (item, index) {
                if (item.gioLam < 192 && item.gioLam >= 176 && item.chucVu == 3) {
                    loaiNhanVien += item.hoTen + `<br>`;
                    // console.log(loaiNhanVien);
                }
            });
        } else if (nguoiDungNhap == "Nhân viên khá") {
            // console.log("đúng");
            nhanVien.forEach(function (item, index) {
                if (item.gioLam < 176 && item.gioLam >= 160 && item.chucVu == 3) {
                    loaiNhanVien += item.hoTen + `<br>`;
                    // console.log(loaiNhanVien);
                }
            });
        } else if (nguoiDungNhap == "Nhân viên trung bình") {
            // console.log("đúng");
            nhanVien.forEach(function (item, index) {
                if (item.gioLam < 160 && item.chucVu == 3) {
                    loaiNhanVien += item.hoTen + `<br>`;
                    // console.log(loaiNhanVien);
                }
            });
        }
    }
    document.getElementById('tenDaXepLoai').innerHTML = loaiNhanVien;
}