// 練習
// 以 [1,2,3,4,5,6,7,8,9,10,11,12,13] 為資料 轉換成四個顏⾊色52張簡易易撲克牌呈現在畫⾯面上

//產⽣生13張同花⾊撲克牌（數字陣列,花色)
//產⽣生單張撲克牌html(牌,花⾊)
//呼叫四個花⾊的產⽣生13張撲克牌

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
var color = [{
        type: "&#9824"
    }, /*黑桃*/
    {
        type: "&#9829"
    }, /*紅心*/
    {
        type: "&#9830"
    }, /*方塊*/
    {
        type: "&#9827"
    }
] /*梅花*/

// 最後 html 排序 .orderPoker > ul.ser > li
// 產⽣13張同花⾊撲克牌（花色排序,數字,花色)
function numArray(order, num, color) {
    var item = $("<li>")
    item.append("<h2 class='type'>" + color.type + "</h2>")
    // 這裡不能用 ("<h3>"+num+"</h3>") -> 0~12 排數字不對
    item.append("<h3 class='nums'>" + numbers[j] + "</h3>")
    $("ul.ser" + order).append(item)
}

//產⽣生單張撲克牌html(花色排序,花⾊)
function orderPoker(order, color) {
    // 要將13張不同花色分開管理
    var head = $("<ul class='ser" + order + "'>")
    $(".singoPoker").append(head)
}

// 取出資料 由於 花色跟數字 要在一起顯示所以用2個迴圈取出
for (var i = 0; i < color.length; i++) {
    // 產生單張的排序
    orderPoker(i)
    var colorType = color[i]
    // console.log(i) // 4
    // console.log(color.length) // 4
    for (var j = 0; j < numbers.length; j++) {
        // console.log(j) // 13
        // 產生13張
        numArray(i, j, colorType)
    }
}


//呼叫四個花⾊的產⽣生13張撲克牌
$(".s1").click(function () {
    $(".ser0").toggleClass("open")
})
$(".s2").click(function () {
    $(".ser1").toggleClass("open");
})
$(".s3").click(function () {
    $(".ser2").toggleClass("open");
})
$(".s4").click(function () {
    $(".ser3").toggleClass("open");
})