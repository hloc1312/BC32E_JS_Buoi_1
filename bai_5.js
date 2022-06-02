/**
 * Bài 5: Tính tổng 2 kí số
 *
 * - Đầu vào:
 *      + n = 12
 *      + hangChuc
 *      + hangDonVi
 *      + tong
 * - Xử lý:
 *      + hangChuc = n/10
 *      + hangDonVi = n%10
 * - Đầu ra:
 *      + tong = ?
 *
 */

var n = 12;
var hangChuc = Math.floor(n / 10);
var hangDonVi = n % 10;
var tong = hangChuc + hangDonVi;
console.log("Tổng 2 kí số: " + tong);
