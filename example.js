// TODO: divide 라고 하는 함수를 만들고
// TODO: Item 이라고 하는 커스텀 타입을 만들어서
// TODO: 이 item의 타입에 따라, 그리고 어떤 값인지에 따라
// TODO: 각각의 값을 구분하여 console.log()로 출력하는 함수를 만들어보세요
// ? enum 타입 활용, switch문 활용
var Item;
(function (Item) {
    Item["BAG"] = "bag";
    Item["GUN"] = "gun";
    Item["BULLET"] = "bullet";
})(Item || (Item = {}));
var divide = function (item) {
    // TODO: switch문을 활용하여 각각의 role에 따라 다른 메세지를 출력하도록 작성하세요
    switch (item) {
        case Item.BAG:
            console.log('bag');
            break;
        case Item.GUN:
            console.log('gun');
            break;
        case Item.BULLET:
            console.log('bullet');
            break;
    }
};
divide(Item.BULLET);
