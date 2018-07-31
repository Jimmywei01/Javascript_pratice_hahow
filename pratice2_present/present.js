// 練習
// bar 讀取到100% 禮物盒打開

var persent = 0;

var timer = setInterval(function () {

    $(".bar").css("width", persent + "%")
    // console.log("剩餘"+persent+"%")
    $(".text").text(persent + "%")
    persent += 1
    if (persent > 100) {
        // 新增class給禮物盒用 
        $(".cup").addClass("complete")
        clearInterval(timer)
    }
}, 30)



