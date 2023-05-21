function kiemTraRong(checkInput, idThongBao) {
    // console.log("hello");
    if (checkInput) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).innerHTML = "Vui lòng nhập dữ liệu";
        return false;
    }
}