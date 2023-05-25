function kiemTraRong(checkInput, idThongBao) {
    if (checkInput) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).style = "display: inline";
        document.getElementById(idThongBao).innerHTML = "Vui lòng nhập dữ liệu";
        return false;
    }
}

function kiemTraTaiKhoan(checkInput, idThongBao) {
    const number = String(checkInput);
    if (number.length >= 4 && number.length <= 6) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).style = "display: inline";
        document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đúng 4 đến 6 ký số";
        return false;
    }
}

function kiemTraEmail(checkInput, idThongBao) {
    var regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var hopLe = regexEmail.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).style = "display: inline";
        document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đúng Email";
        return false;
    }
}

function kiemTraPassword(checkInput, idThongBao) {
    // Check the length of the password
    if (checkInput.length < 6 || checkInput.length > 10) {
        document.getElementById(idThongBao).style = "display: inline";
        document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đúng mật khẩu";
        return false;
    }

    // Check if the password contains at least 1 number
    if (!/\d/.test(checkInput)) {
        document.getElementById(idThongBao).style = "display: inline";
        document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đúng mật khẩu";
        return false;
    }

    // Check if the checkInput contains at least 1 special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(checkInput)) {
        document.getElementById(idThongBao).style = "display: inline";
        document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đúng mật khẩu";
        return false;
    }

    // Check if the checkInput contains at least 1 uppercase character
    if (!/[A-Z]/.test(checkInput)) {
        document.getElementById(idThongBao).style = "display: inline";
        document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đúng mật khẩu";
        return false;
    }
    document.getElementById(idThongBao).innerHTML = "";
    // If all criteria are met, return true
    return true;
}

function kiemTraDinhDangNgay(checkInput, idThongBao){
    const pattern = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/\d{4}$/;
    if (pattern.test(checkInput)) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).style = "display: inline";
        document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đúng định dạng mm/dd/yyyy";
        return false;
    }
}

function kiemTraRong(checkInput, idThongBao) {
    if (checkInput) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).style = "display: inline";
        document.getElementById(idThongBao).innerHTML = "Vui lòng nhập dữ liệu";
        return false;
    }
}

function kiemTraLuong(checkInput, idThongBao) {
    if (checkInput <= 20000000 && checkInput >= 1000000) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).style = "display: inline";
        document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đúng số lương";
        return false;
    }
}

function kiemTraChucVu(checkInput, idThongBao) {
    if (checkInput == 1 || checkInput == 2 || checkInput == 3) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).style = "display: inline";
        document.getElementById(idThongBao).innerHTML = "Vui lòng chọn đúng chức vụ";
        return false;
    }
}

function kiemTraGioLam(checkInput, idThongBao) {
    if (checkInput <= 200 && checkInput >= 80) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).style = "display: inline";
        document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đúng số giờ làm";
        return false;
    }
}