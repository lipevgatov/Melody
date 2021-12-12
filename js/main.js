$(document).ready(function () {
    var currentFloor=2;                        /*переменная этажа */
    var floorPath = $(".home-image path");     /*выбор этажа, каждый отдельный этаж в СВГ*/
    var counterUp = $(".counter-up");          /*кнопка увеличения этажа */
    var counterDown = $(".counter-down");         /*кнопка уменьшения этажа */
    floorPath.on("mouseover", function(){         /*функция выбора (подсвечивания) этажа при помощи мыши */
        floorPath.removeClass("current-floor");   /*очищение значения */
        currentFloor=$(this).attr("data-floor");
        $(".counter").text(currentFloor);
    });


    counterUp.on("click", function(){           /*процедура выбора (подсвечивания) этажа при кнопке вверх */
    if (currentFloor<18) {                      /*ограничение на 18 этажей */
    currentFloor++;                             /*функция на увеличение этажей*/
    usCurrentFloor = currentFloor.toLocaleString ('en-Us',{minimumIntegerDigits:2,   /*нормальное отображение этажей, 01 а не 1*/
        useGroupping: false}); 
    $(".counter").text(usCurrentFloor);                                              /* запись значения этажа в счетчик справа */
    floorPath.removeClass("current-floor");                                          /*функция очищения значения этажа */
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");                /* а потом запись выбранного этажа */
    }
 });

    counterDown.on("click", function(){           /*процедура выбора (подсвечивания) этажа при кнопке вниз */
    if (currentFloor>2) {
    currentFloor--;
    usCurrentFloor = currentFloor.toLocaleString ('en-Us',{minimumIntegerDigits:2, 
        useGroupping: false});
    $(".counter").text(usCurrentFloor);
    floorPath.removeClass("current-floor");
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
 });

});